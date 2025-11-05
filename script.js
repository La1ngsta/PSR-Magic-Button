// Function to dynamically append the Month and Year to the report header.
document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('reportTitle');
    if (title) {
        const now = new Date();
        const options = { month: 'long', year: 'numeric' };
        const formattedDate = now.toLocaleDateString(undefined, options);
        title.textContent += ' - ' + formattedDate;
    }
});

// Function to read and display CSV data
function displayProjectStatus() {
    // Path to the local CSV file
    const csvFilePath = 'PSR.csv';

    // Fetch the CSV file
    fetch(csvFilePath)
        .then(response => response.text())
        .then(csvData => {
            // Parse the CSV data using locally hosted PapaParse
            Papa.parse(csvData, {
                header: true, // Treat the first row as headers
                skipEmptyLines: true,
                complete: function(result) {
                    const table = document.getElementById('projectTable');

                    // Clear existing rows in the table
                    table.innerHTML = '';

                    // Ensure there is data in the result
                    if (result.data.length > 0) {
                        // Create header row dynamically
                        const headerRow = table.insertRow(0);
                        Object.keys(result.data[0]).forEach((columnName, cellIndex) => {
                            const headerCell = headerRow.insertCell(cellIndex);
                            headerCell.textContent = columnName;
                            headerCell.classList.add('header-cell'); // Add header styling here
                        });

                        // Create rows for each data row
                        result.data.forEach((rowData, index) => {
                            const row = table.insertRow(index + 1); // Add 1 to index for proper insertion
                            Object.keys(rowData).forEach((key, cellIndex) => {
                                const cell = row.insertCell(cellIndex);
                                cell.textContent = rowData[key];

                                // Check if the column is 'Status' and add traffic light
                                if (key === 'Status') {
                                    addTrafficLight(cell, rowData[key]);
                                }
                            });
                        });

                        // Apply styles to the first row directly
                        applyStylesToFirstRow(table);
                    } else {
                        console.error('CSV file is empty.');
                    }
                },
                error: function(error) {
                    console.error('Error parsing CSV:', error.message);
                }
            });
        })
        .catch(error => {
            console.error('Error reading CSV file:', error);
        });
}


// Function to add traffic lights based on status
function addTrafficLight(cell, status) {
    const trafficLight = document.createElement('div');
    trafficLight.classList.add('traffic-light');

    switch (status.toLowerCase()) {
        case 'on track':
            trafficLight.classList.add('darwin');
            break;
        case 'at risk':
            trafficLight.classList.add('yellow');
            break;
        case 'off track':
            trafficLight.classList.add('red');
            break;
	case 'completed':
            trafficLight.classList.add('coastline');
            break;
	case 'not started':
            trafficLight.classList.add('silver');
            break;
	case 'on hold':
            trafficLight.classList.add('territory');
            break;
        default:
            trafficLight.classList.add('sand');
            break;
    }

    cell.innerHTML = ''; // Clear existing content
    cell.appendChild(trafficLight);
}

function generatePDF() {
    if (typeof html2pdf !== 'undefined') {
        const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
		const options = {
            margin: 0,
            filename: `DCDD_ABS-HSS_PSR_${currentDate}.pdf`,
            image: { type: 'jpeg', quality: 1.0 },
            html2canvas: { 
                scale: 4,
				scrollY: 0,
                useCORS: true,
                windowHeight: document.body.scrollHeight,
            },
            jsPDF: { unit: 'mm', format: 'a2', orientation: 'landscape', compressPDF: true, precision: '2'},
        };

        const clonedBody = document.body.cloneNode(true);
        const scriptTags = clonedBody.getElementsByTagName('script');

        // Remove script tags from the cloned body to prevent unwanted execution
        for (let i = 0; i < scriptTags.length; i++) {
            scriptTags[i].parentNode.removeChild(scriptTags[i]);
        }

        // Wait for all resources to be loaded
        const waitForContentLoad = new Promise((resolve) => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.addEventListener('load', resolve);
            }
        });

        // Generate the PDF after the content is fully loaded
        waitForContentLoad.then(() => {
            html2pdf(clonedBody, options);
        });
    } else {
        console.error('html2pdf library is not loaded.');
    }
}


// Function to apply styles to the first row using a class
function applyStylesToFirstRow(table) {
    const firstRow = table.rows[0];
    Array.from(firstRow.cells).forEach(cell => {
        cell.classList.add('monsoon'); // Add the class for header row styling
    });
}

function generateLegend() {
    const legendItems = [
        { label: 'Completed', status: 'completed' },
	{ label: 'On Track', status: 'on track' },
        { label: 'At Risk', status: 'at risk' },
        { label: 'Off Track', status: 'off track' },
	{ label: 'On Hold', status: 'on hold' },
        { label: 'Not Started', status: 'not started' },     
    ];

    const container = document.getElementById('legendContainer');
    const dateDisplay = document.getElementById('dateDisplay');

    if (!container || !dateDisplay) return;

    // Display today's date
    const today = new Date();
    dateDisplay.textContent = today.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    legendItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.style.display = 'flex';
        itemDiv.style.alignItems = 'center';
        itemDiv.style.gap = '6px';

        const dummyCell = document.createElement('div');
        addTrafficLight(dummyCell, item.status); // Reuse existing logic

        const label = document.createElement('span');
        label.textContent = item.label;

        itemDiv.appendChild(dummyCell.firstChild); // Just the colored dot
        itemDiv.appendChild(label);

        container.appendChild(itemDiv);
    });
}

// Also run this on page load
window.onload = () => {
    displayProjectStatus();
    generateLegend();
};

