<p align="center">
  <img src="https://i.imgur.com/MpyZk4N.gif" />
  <h1 align="center">SpaceShips API</h1>
</p>

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)
* [Team](#team)
* [Contributing](#contributing)
* [Others](#others)

### Introduction
SpaceShips API supports the [SpaceShips Web](https://github.com/tjtanjin/spaceships_web) project by providing the functionality of maintaining a leaderboard. For work pertaining to the SpaceShips game itself, please refer to the repository here:
```
https://github.com/tjtanjin/spaceships_web
```
Currently, the game is live on the following website:
```
https://spaceships.tjtanjin.com/
```

### Features
The API currently supports 2 endpoints, one for each type of leaderboard as shown below:
```
1) Single player
2) Two player
```
GET and POST requests are supported on both endpoints for the updating and retrieving of listings on the leaderboards.

### Technologies
Technologies used by SpaceShips Web are as below:
##### Done with:
<p align="center">
  <img height="150" width="150" src="https://i.imgur.com/1D3AoId.png"/>
</p>
<p align="center">
JavaScript
</p>

##### Deployed on:
<p align="center">
  <img height="150" width="150" src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ayzwkdawmlyzvuummuf4" />
</p>
<p align="center">
OVHcloud
</p>

##### Project Repository
```
https://github.com/tjtanjin/spaceships_api
```

### Setup
The following section will guide you through setting up your own SpaceShips Web edition!
* First, cd to the directory of where you wish to store the project and clone this repository. An example is provided below:
```
$ cd /home/user/exampleuser/projects/
$ git clone https://github.com/tjtanjin/spaceships_api.git
```
* Following which, execute the following commands to install nodejs and npm:
```
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
```
* Then, install mongodb as well following the [guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) from their official website.
* Next, create a .env file at the base directory of the project with variable name DATABASE_URL as shown below (assumes localhost):
```
DATABASE_URL=mongodb://localhost/leaderboard
```
* Finally, run the following command to start the API:
```
$ sudo npm run start
```
* If you wish to host this API 24/7, you may refer to a similar guide [here](https://gist.github.com/tjtanjin/29875407defe183c5147bb854f9e69ae) that uses telegram bot hosting as a demonstration. 
* Reminder to update the API endpoint on the frontend of the project [here](https://github.com/tjtanjin/spaceships_web#setup)!

### Team
* [Tan Jin](https://github.com/tjtanjin)

### Contributing
If you have code to contribute to the project, open a pull request and describe clearly the changes and what they are intended to do (enhancement, bug fixes etc). Alternatively, you may simply raise bugs or suggestions by opening an issue.

### Others
For any questions regarding the implementation of the project, please drop an email to: cjtanjin@gmail.com.
