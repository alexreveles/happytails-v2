# Happy Tails v2.0

# Frontend Developer and Backend Developer


## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)


## Description
This is a task tracking site that was created using React and Apollo Provider.  Happy Tails v2.0 serves the same purpose as the original Happy Tails site, but includes added features and improved performance.  This site is currently hosted on Heroku at [Heroku Deployment](https://happytails-v2.herokuapp.com/https://happytails-v2.herokuapp.com/) and can also be run locally using the files located in the GitHub repository [Github](https://github.com/es2013/happy-tails).  To learn how to run this server locally please continue reading the [Installation](#installation) and [Usage](#usage) sections.

USER STORY:
AS a shelter employee / volunteer, I WANT to track the dogs daily activities and dogs difficulty levels so that all the dogs are taken care of and paired with a compatible caretaker that meets the required experience.  As a shelter administrator I want to track daily activity, add dogs, as well as be able to de-activate / re-activate users and dogs.

WHEN I go to the site, and am not logged in,<br>
THEN I am presented with a page that lists all the dogs in the shelter.<br>
WHEN on the homepage I can click on a Login link in the navbar to login.<br>
IF I don’t have an account THEN I can navigate to the page to sign up.<br>
WHEN I enter valid information to the signup form<br>
THEN a user account is created with my information and a unique ID<br>
WHEN I enter my password to sign up<br>
THEN that password is safely encrypted using the bcrypt package.<br>
WHEN I enter a valid email and password in the login page<br>
THEN I am able to login.<br>
WHEN I login as a user I am redirected to the Dashboard.<br>
WHEN I login as an admin I am redirected to the Admin's Dashboard.<br>


IF I view my Dashboard I am able to quickly identify the dogs that haven’t had a potty break or walk via a table for the current shift (either AM or PM).<br>
IF I want to filter dogs by difficulty level<br>
THEN a dropdown menu allows me to select an option to view all dogs by a specific difficulty level.<br>
IF I select a dropdown demeanor category<br>
THEN only those dogs with the selected demeanor are displayed. (Easy, Moderate, Difficult).<br>
IF I want to see all dogs who have been walked for that shift,<br>
OR I want to see all dogs who haven't been walked for that shift,<br>
THEN I can select a dropdown option to view those dogs.<br>
IF I want to see all dogs who have gone potty for that shift,<br>
OR I want to see all dogs who haven't gone potty for that shift,<br>
THEN I can select a dropdown option to view those dogs.<br>
IF I want to see all dogs who have been walked AND gone potty for that shift,<br>
OR I want to see all dogs who haven't been walked OR gone potty for that shift,<br>
THEN I can select a dropdown option to view those dogs.<br>

WHEN I take the dog on a walk or to go potty<br>
THEN I am able to record that acivity on the table.<br>
IF I click UPDATE on a dog row on the table <br>
THEN I am taken to a new page with the selected dog's information<br>
WHEN I am taken to the single dog page<br>
THEN I am able to edit the dog's activity record for that shift.<br>
WHEN I check "Walk" then submit my change<br>
THEN my username appears in the walk column for that dog on the dog table.<br>
WHEN I check "Potty" then submit my change<br>
THEN my username appears in the potty column for that dog on the dog table.<br>
WHEN I have filled out both activity columns for that dog<br>
THEN the emoji next to their name displays a happy face on the dog table.<br>
WHEN new activity is recorded for a dog<br>
WHEN a user loads or reloads the homepage or dashboard<br>
THEN the walk and potty data will be reloaded to reflect the current state of the database.<br>

AS an admin user I will have more capabilities than a non-admin user<br>
WHEN I log into my admin account<br>
THEN I am directed to an admin dashboard with added features for viewing and manipulating data<br>
WHEN I look at my admin dashboard<br>
THEN I see additional buttons below the dropdown filters labeled "Add Dog" and "See Users"<br>
WHEN I click the add dog button<br>
THEN it redirects me to the add dog page which has a form for entering data for a new dog.<br>
WHEN I enter valid information for a new dog<br>
THEN a new row with the new dog's information populates in the dog tables<br>
WHEN I select the See User button<br>
THEN I am redirected to a page with a users table and the current count of active and unactive user profiles.<br>
WHEN I click the Update button for a user<br>
THEN I am taken to a page with that user's information and a button to activate or de-activate the selected user<br>

This application was created using React.js and Apollo to launch the server and connect to a graphql database.  The database is hosted on MongoDB Altas and is called "happy-tails".  All user, canine, and activity collections are stored the happy-tails database.  The live app is currently deployed on Heroku, using the JAWSDB add on to store data.  All passwords have been encrypted using the bcrypt Node.js package.  The HTML pages and components are generated using React.js.


## Installation
1.  Navigate to the GitHub repository ( https://github.com/es2013/happytails-v2 ) in your web browser and click on the green dropdown menu that says “Code”.  Copy the SSH key to your clipboard and then open your terminal.  

2.  In your terminal navigate to the directory you wish to house this repository.   

3.  Type “git clone” into your command line and paste the SSH key you copied from the repository, then hit Enter.  A new file titled “happytails-v2” containing the necessary files will appear in your chosen directory.  Due to file size, Node.js and the necessary dependencies will not be cloned to your repository.  Please continue reading the instructions to find out how to install these dependencies on your working environment.   

4.  Since this application uses Node.js you will have to install Node and the required Node dependencies to operate, make edits, and/or run the server locally.  For detailed instructions on how  to install Node.js to your computer please visit: https://www.guru99.com/download-install-node-js.html  

5.  Once Node is successfully installed on your computer, navigate to the project's root directory in your terminal.  For a quick access you can right-click the root directory in VS Code and click the option “Open in Integrated Terminal”. 

6.  Type the following command to install the proper node modules: “npm install”.  

7.  Check your newly downloaded “node_modules” folder to ensure that the correct packages have been installed.  The dependencies that are not included within the general Node module package are:

   Packages installed in client directory:

1. apollo-boost graphql graphql-tag @apollo/react-hooks
2. react-router-dom
3. jwt-decode
4. react-select
5. react-dropdown --save
6. --save @stripe/react-stripe-js @stripe/stripe-js
7. react-bootstrap bootstrap
8. apollo-client apollo-cache-inmemory apollo-link-context
9. @apollo/client
10. Apollo-upload-client

   Packages installed in server directory:

1. apollo-server-express graphql
2. jsonwebtoken
3. mongoose
4. bcrypt
5. graphql-upload
6. uuid

  Packages installed at root directory:

1. if-env
2. -D concurrently ( Dev-Dependency )

  If these packages are not present within your Node modules folder then run the command “npm install \<package-name\>” to install the missing packages (“npm install -D \<package-name\>”  for Dev Dependencies). 

8.  Once you have cloned the repository and downloaded Node.js and its necessary modules you are ready to run the server locally! See the next section, [Usage](#usage), for instructions on how to properly set up and seed the application with test data.

## Usage

To use this app you must first create a user account.  Navigate to the hompage using the link found in the [Description](#description) section and click login.  This will direct you to a login page which has an additional link for signup.  Once you have entered the correct info in the signup form you will be directed to your dashboard where you can view all dogs, update a dog's activities, and filter dogs by category.  

If you would like to test this application using an admin login account, please contact us.

As an admin user you will be able to make additional actions and have access to exclusive pages and data.  The admin user will be able to add dogs, view user info, and activate or de-activate users.  

If you wish to run the application on local host first follow all instructions in the [Installation](#installation) section.  To seed the data navigate to the server.js file in the server directory.  Towards the middle of the file there will be a block of code commented out with instructions on how to seed the database above it.  Once your database is seeded and node modules are installed you can run the command "npm start" from the root directory and the page will open automatically in your default browser. 

Here are some screenshots and gifs of the application's functionality:

#### The signup page:
![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-Signup.gif)<br><br>

#### Updating a dog's activities:
![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-UpdateDogActivities.gif)<br><br>

#### Updating a user's active/inactive status:
![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-UpdateUserStatus.gif)<br><br>

#### Filtering by dog demeanor or dog status:
![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-FiltersDemeanorStatus.gif)<br><br>

#### Filtering by dog activities:
![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-FiltersByActivities.gif)<br><br>

#### Admin user adding a dog to the database:
![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-AddADog.gif)<br><br>

#### Link the the donation page:
![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-DonateLink.gif)<br><br>

#### Making sure only an admin user can perform admin tasks:
>![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-AdminAndLoggedInStatus.gif)<br><br>

#### Validating input:
![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-InputValidation.gif)<br><br>

#### Signup Page: Checking to make sure only an active user can login:
![Mockup](https://github.com/es2013/happytails-v2/blob/main/public/assets/images/HappyTails2-InactiveLogin.gif)<br><br>

## License
![Apache license](https://img.shields.io/badge/license-Apache2.0-brightgreen)
[Apache license](http://www.apache.org/licenses/)
   Copyright [yyyy] [name of copyright owner]

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.

## Contributing
To contribute to this site please contact the authors via GitHub at the links provided in the [Questions](#questions) section below.  Some features we would like to add in the future are the ability to update a dog's information as well as be able to delete dog and user data.  There are still some challenges with styling, in particular to the mobile view of our web app.  We would like to have a smooth style that resizes content properly for all screen sizes.  Another great feature would be to be able to create the ability to register different shelters to our site.  New shelters would be given a unique ID which links all their data and separates it from other shelters.  This would allow for growth on a massive scale as we could bring this applcation to any shelter in the world!  That's a lot of happy tails :)

## Tests
To test this application you can run the server locally or navigate to the [Heroku Deployment](https://happytails-v2.herokuapp.com/)  and test the functionality of the app as described in the [Description](#description) and [Usage](#usage) sections.  

You can check the raw json data by entering the queries and mutatuions in the graphql playground while running your server locally.  To navigate to playground use the url "http://localhost:3000/graphql".  After running the correct queries/mutations as laid out in the client/utils/ directory you will be able to cross-reference the raw data with the data presented in the happy tails tables.

You can also test the site by entering invalid information to the login, signup, or add dog forms.  If any field is invalid you will recieve a corresponding error message.  You can also try to access different enpoints like /dashboard/ or /add-dog/ without being logged in as a valid user or admin user.  This will return an error message telling you that you must be logged in to veiw this page.

## Questions
For questions or concerns regarding this project or future collaborations please contact any of the authors via GitHub at:
[Nathan Stephens](https://github.com/nystephens), [Shellie Nguyen](https://github.com/shellienguyen), [Erika Salcedo](https://github.com/es2013), [Toby Moore](https://github.com/Tobydawg), [Alex Reveles](https://github.com/alexreveles)
