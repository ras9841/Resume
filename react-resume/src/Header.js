import React from 'react';
import personalInfo from './info/personal.js'
import muiThemeable from 'material-ui/styles/muiThemeable';
import Avatar from 'material-ui/Avatar';
import './Header.css';
import SocialIcons from './SocialIcons'

const Header = (props) => (
  <div>
    <div  className="headerContainer"
          style={{backgroundColor: props.muiTheme.palette.primary1Color}}>
          <div  id="headerText"
                style={{color: props.muiTheme.palette.alternateTextColor}}>
            <p>
              <span id="name">{personalInfo.name}</span> <br/>
              <span id="tagLine">{personalInfo.tagLine}</span>
            </p>
            <p>{personalInfo.objective}</p>
          </div>
          <Avatar
            id="profileImage"
            src="profile.jpg"
            style={{display: "none"}}
            size={115}
          />
    </div>
    <div style={{ backgroundColor: props.muiTheme.palette.primary2Color,
                  color: props.muiTheme.palette.alternateTextColor}}>
          <SocialIcons/>
    </div>
  </div>
);

export default muiThemeable()(Header);
