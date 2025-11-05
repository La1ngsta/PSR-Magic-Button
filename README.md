# PSR-Magic-Button
A custom run application which converts columns and rows in a CSV file into a standardised Project Status Report.
This allows Project Managers to only edit a simple csv file without having to worry about formatting and beautifying project status reports.
The report is rendored in HTML and features a custom print to PDF button which always fits the report in A3 landscape single screen.

# Why was this developed
This application was designed specifically to run in security hardened organisations which control software on enterprise assets through a Standard Operating Environment (SOE).
The application is able to work on devices which run Application Control Agents. It does this by utilising processes already approved through the MSEdge Browser to render and generate the report.
The application only utilised default applications which come standard in windows 10 and 11.

# Requirements
- Permission to run .bat files on your local computer
- Windows Edge Browser (msedge.exe)
- a txt editor such as notepad.exe or other code editor
- Outside of these requirements, The application itself does not require installation, only a single line edit of the run.bat file

# Setting up on your local machine
1. To run the application you need to download and unpackaged/unzip onto your local computer.
2. You need to open up notepad and edit the run.bat file.
   If you cant see the run.bat file when trying to open in notepad make sure you click the drop down and select All Files (default is Text Documents)
4. Edit the line which says file:///P:/PSR-Magic-Button/PSR.html and change it to the new path where the /PSR-Magic-Button/PSR.html is located
   Example: If you want to run the program from your desktop you might have a file path such as file:///C:/Users/laicl/Desktop/PSR-Magic-Button-main/PSR.html
5. The application can now be run by double clicking on the run.bat file

# How to use the application
To edit the PSR content, open up the PSR.CSV file within the project and change the data within the report.
You do not need to format the csv file, you can add infite columns with your own headings, and infinite rows.
The program will automatically formate these rows to fit on one screen within the report, dynamically adjusting the column and row size
<img width="1344" height="486" alt="image" src="https://github.com/user-attachments/assets/67bd0b8d-44fc-42ca-b463-3c9a17f6917a" />

# Traffic Light Indicators
There are some special rules to substitue traffic light indicators, these are often used as part of a traditional Red, Amber, Green (RAG) status.
This application expandes on the common RAG colours to include a few others relevant to Project Management reporting in Project Status Reports.
<img width="689" height="61" alt="image" src="https://github.com/user-attachments/assets/589eab14-a65e-48a5-8934-646bd4251c6f" />

# Run the Report
When you are ready to run the report, execute the run.bat file within the project directory.
If MSEdge says file not found, this means you have not correctly edited the run.bat file in the setup instructions and it cannot find the PSR.html file
In this case you will have to edit the run.bat file in notepad and troubleshoot the file directory path.
If the report is successful it should appear within MSEdge rendered in HTML. 
You are able to edit the CSV file live, just press F5 or refresh while in MSEdge to have those edits updating to see in the report.
If you are happy with the report, scroll down to the bottom and press the custom print to CSV button to have it saved in a single A3 landscape document.

# Example Project Status Report Output
<img width="1893" height="688" alt="image" src="https://github.com/user-attachments/assets/767804cc-38b3-47d5-8221-59658c08ef2d" />
<img width="1898" height="332" alt="image" src="https://github.com/user-attachments/assets/571eff51-787e-4bfe-ad4c-760d012f1cb7" />

# Single Page A3 .PDF output
<img width="1247" height="848" alt="image" src="https://github.com/user-attachments/assets/a1afb1a9-ed4e-475f-8149-dd65a1097991" />
