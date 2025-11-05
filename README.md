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

# Example Project Status Report Output
<img width="1893" height="688" alt="image" src="https://github.com/user-attachments/assets/767804cc-38b3-47d5-8221-59658c08ef2d" />
<img width="1898" height="332" alt="image" src="https://github.com/user-attachments/assets/571eff51-787e-4bfe-ad4c-760d012f1cb7" />
