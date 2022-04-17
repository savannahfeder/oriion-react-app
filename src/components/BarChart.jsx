import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from 'react-vis';
import React from 'react';

const BarChart = () => {
  return (
    <XYPlot width={350} height={200}>
      <HorizontalGridLines />
      <LineSeries
        data={[
          { x: 1, y: 40 },
          { x: 2, y: 5 },
          { x: 3, y: 90 },
          { x: 4, y: 15 },
          { x: 5, y: 90 },
        ]}
      />
      <XAxis />
      <YAxis />
    </XYPlot>
  );
};

export default BarChart;
