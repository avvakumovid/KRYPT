import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Opener from './../../../assets/Icons/Opener';
import { Colors } from '../../../styles';

interface BottomBGProps {
  title: string;
  children: any;
  backgroundColor?: string;
  height: number;
}

const BottomBG = ({
  title,
  children,
  backgroundColor = Colors.BLACK_BG,
  height = 673,
}: BottomBGProps) => {
  return (
    <View style={[styles.container, { backgroundColor, height }]}>
      <Opener style={styles.opener} />
      <Text style={[styles.text, styles.heading]}>{title}</Text>
      {children}
    </View>
  );
};

export default BottomBG;

const styles = StyleSheet.create({
  container: {
    width: 390,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: Colors.WHITE,
  },
  opener: {
    marginBottom: 31,
  },
  heading: {
    alignSelf: 'flex-start',
    marginBottom: 28,
    fontWeight: '600',
  },
});
