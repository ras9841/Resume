import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './Header';
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import "./App.css"

import {lightBlue900, lightBlue700, grey100} from 'material-ui/styles/colors';


const theme = getMuiTheme({
  palette: {
    primary1Color: lightBlue700,
    primary2Color: lightBlue900,
    alternateTextColor: grey100
  }
});


const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <div>
      <Header/>
      <div className="leftPannel pannel">
        <LeftSide/>
      </div>
      <div className="rightPannel pannel">
        <RightSide/>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
