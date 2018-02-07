import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';

const styles = {
  chip: {
    marginRight: "5px",
    marginBottom: "5px",
    width: "1.42in"
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const ChipArray = (props) => {
  let data = props.data;
  return (
    <div style={styles.wrapper}>
      {data.map((chip, index) => (
        <Chip key={index} style={styles.chip}>
          <Avatar icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>} />
          {chip}
        </Chip>
      ))}
    </div>
  );
}
export default muiThemeable()(ChipArray);
