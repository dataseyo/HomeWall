# Description

A climbing wall app where climbers can customize walls with holds, save walls, and save routes on each wall for later. 

Live at: [AWS Homewall App](https://main.d1j173hsw3ayq1.amplifyapp.com)

# Tech Stack

React with Typescript, Node, MongoDB, Express, Mongoose, Redux Toolkit, Vite. 

# Current Progress

<a href="url"><img src="https://j.gifs.com/oZknkk.gif" height="500" width="300" ></a>

# Road Map

- ~~refactor wall logic into Redux reducers~~
- ~~persist wall state in redux persist local storage~~
- ~~create walls (set of saved individual walls) redux logic~~
- ~~create walls UI to display wall choices~~
- ~~add save wall functionality~~
- ~~update walls model with name and id (so it can be deleted/edited)~~
- ~~update walls logic and UI to allow user to choose wall name~~
- ~~allow for rotation of holds (need to add degreeRotated property to Hold type, and use it as a prop on the div to transform: rotate(`${degreeRotated}`))~~
- create route redux logic
- hook up route redux logic to route UI on /walls
- routes tab should show routes available on current wall
- connect to MongoDB
- add save route functionality
- make more holds in figma
- allow for users to vary the wall grid size (standard is 10 x 10)
- allow users to change wall color and background
- refactor Wall component to separate the messy functional logic from the UI 
- refactor local CSS into more global variable styles in index.css: padding, colors, margins, etc. 
- migrate to React Native
- add hold maker feature
- allow users to follow other users, and see/like/save their walls
- allow for larger holds to be used that take up multiple grid sites
- allow volumes to be placed on wall and for holds to be placed on volumes

# Issues

- the way that I ended up rendering different holds inside the hold choice modal is probably an anti-pattern and not even close to automated. I was having trouble rendering references to them from a json file and typescript wasn't happy with that solution, so I was forced to do it manually for now. 

## State Structure
- Redux persist store provides state to app
- wallSlice, wallsSlice, and routesSlice create reducers that get exported to components and receive actions and their payloads from the components (Walls, Wall, and Routes) that call them