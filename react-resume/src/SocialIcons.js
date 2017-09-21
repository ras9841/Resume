import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import contactInfo from './info/contact.js';
import './SocialIcons.css'
const SocialIcons = (props) => {
  const iconStyle = {
    height: "20px",
    width: "20px",
    marginTop: "5px",
    display: "inline-block"
  };
  return (
    <div className="socialIcons">
      {contactInfo.map(({name, address, iconLink}) => (
        <span key={name} className="iconContainer">
          <img
            src={iconLink}
            style={iconStyle}
            alt={name}
          />
          <span className="iconLabel">{address}</span>
        </span>
      ))}
    </div>
  );
}
export default muiThemeable()(SocialIcons);
