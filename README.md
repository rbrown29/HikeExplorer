### Hike Explorer

#### Deployment link: 
[Hike Explorer](https://hikeexplorer.netlify.app/)

#### Overview

This project is an interactive hiking trail map built using React and Mapbox GL JS. It allows users to explore hiking trails across the United States by selecting a state and viewing trail details, such as distance, elevation gain, difficulty, rating, and more.

#### Features

- State-specific trail data visualization
- Interactive clustering for trails
- Popups with detailed trail information
- Smooth map transitions to selected states

#### More Features

- State Selector: A dropdown menu allows users to select a state and view its hiking trails.

- Trail Clustering: Trails are clustered on the map for better visibility. Users can zoom in to view individual trails.

- Trail Details Popup: Clicking on a trail displays a popup with detailed information, including a trail image, difficulty, rating, and a link to more details.

#### Create .env file

- Create a .env file in the root of your project and add your Mapbox API token and style URL:
    
    ```
    REACT_APP_MAPBOX_API_TOKEN=your_mapbox_api_token
    REACT_APP_MAPBOX_STYLE_URL=your_mapbox_style_url
    ```

#### Install Dependencies

- Run `npm install` to install all project dependencies.

#### Start the Application

- Run `npm start` to start the application in development mode.

#### File Structure

- `App.js`: The main application file that initializes the Mapbox map and handles interactions.

- `Oregon.json`, `California.json`, ...: JSON files containing trail data for each state.

- `App.css`: Styles for the application.

#### Mapbox integration

- Map: A fully interactive Mapbox map.

- Source & Layers: GeoJSON sources and layers for displaying clustered and unclustered trails.

- Popup: Displays trail details on selection.

#### State Data 

- `stateDataMap`: Maps state names to their respective trail data JSON files.

- `stateCoordinates`: Defines map coordinates for each state.

#### Technologies

- React: A JavaScript library for building user interfaces.

- Mapbox GL JS: A JavaScript library for interactive, customizable vector maps.

- CSS: Styles for the application.

![Hike Explorer](/src/assets/map1.png)
![Hike Explorer](/src/assets/map2.png)

#### Acknowledgements

Trail data and images provided by external sources:
    
[AllTrails](https://www.alltrails.com/)