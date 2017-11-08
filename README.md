# angular4-brightcomputing
An app coded with angular4, about my take home assigment for Bright Computing

## Local setup

- Install the dependencies with `npm install`
- Start in local with `npm start`
- Build with `npm run build`

## Short Analysis of previous application

The previous application, coded with angular 1, has many problems:

- => problem
* => solution

- None single file responsability (example app.js has everything that is defined in the app). 
* Solved created a more structured filesystem where every file has a specific role. 
** This app has a component for every page.

- Controller e factories haven't human readable names. 
* Every file declares in the name the own role.

- Json file not minified and placed in app.js. Query methods should not be defined inside the json object.
- There isn't a model for the object of type employee. 
* Angular 4 observable services make query methods useless.  
** These services are in listening on a resource (a json file in this case), and they manage any change in the data source, using the Employee Model defined in shared folder. 

- The view 'employess.html' is a very large file because it manages every single page, querying on a status variable. 
- There are empty attributes like 'class=""', while there aren't specific classes to differentiate the elements.
- Repeated DIVs without any use, no indentation for table columns, CSS sometimes is provided inline.
- Changes in the position of photos folder generate a 404 in the application.
* Every page has own component file, module, service and sass files with a minimal style inside. 
** The minimum indentation is respected, the main blocks have a reference class. 
** Image resources has a dynamic path loaded from a centralized configuration file.  

- Slide animations strongly connected to css beheviour
* Slide animations implemented using native animation framework of angular 4.
(there's only a little bug during the transition from EmployeeDetails route to itself. 
** It seems like a bug not related to my logic, but to the official animation framework.)
