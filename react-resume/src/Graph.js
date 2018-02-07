import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {HorizontalBar} from 'react-chartjs-2';

const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      gridLines: {display:false},
      ticks: {
        beginAtZero: true,
        fontColor: 'black'
      },
      display: false
    }],
    yAxes: [{
      barThickness: 25,
      gridLines: {display:false},
      ticks: {
        beginAtZero: true,
        fontColor: 'black'
      }
    }]
  }
};

const Graph = (props) => {
  let labels = [];
  let values = [];
  for (let key in props.data) {
    labels.push(key);
    values.push(props.data[key]);
  }
  let barData = {
    labels: labels,
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(1, 87, 155,0.5)',
        borderColor: 'rgba(1, 87, 155,1)',
        borderWidth: 1,
        data: values
      }
    ],
  };
  return (
    <div>
      <HorizontalBar
        data={barData} options={options}
        width={200} height={145}/>
    </div>
  );
}

export default muiThemeable()(Graph);
