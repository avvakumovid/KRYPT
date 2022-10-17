import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  AreaChart,
  BarChart,
  Grid,
  LineChart,
  XAxis,
  YAxis,
} from 'react-native-svg-charts';
import { Colors } from '../../../../styles';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
// import { Gradient } from '@/screens/AreaChartScreen/chartAdds';

const SimpleGraph = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  const contentInset = { top: 20, bottom: 20 };
  return (
    <>
      <View
        style={{
          borderColor: 'rgba(94, 213, 168, 1)',
          borderWidth: 1,
          borderRadius: 20,
          height: 200,
          width: 300,
        }}
      >
        {/* <YAxis
        data={data}
        contentInset={contentInset}
        svg={{
          fill: 'grey',
          fontSize: 10,
        }}
        numberOfTicks={10}
        formatLabel={value => `${value}ºC`}
      /> */}

        <AreaChart
          style={{ height: 200 }}
          gridMin={-100}
          gridMax={120}
          data={data}
          start={-1000}
          contentInset={{ top: 10, bottom: 30, right: -1, left: -1 }}
          curve={shape.curveNatural}
          svg={{
            stroke: 'rgba(94, 213, 168, 1)',
            fill: 'rgba(94, 213, 168, 0.1)',
          }}
        ></AreaChart>
        {/* <BarChart
          style={{ height: 200 }}
          data={data}
          svg={{ fill: 'red' }}
          contentInset={{ top: 30, bottom: 30 }}
        >
        </BarChart> */}
        {/* <Gradient /> */}
        <Grid />
        {/* <View style={{ height: 200, padding: 20 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            gridMin={0}
            contentInset={{ top: 100, bottom: 100 }}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
          >
            <Grid />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10 }}
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View> */}
      </View>
    </>
  );
};

export default SimpleGraph;

const styles = StyleSheet.create({});
