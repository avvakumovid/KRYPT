import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../../styles/index';
import { LinearGradient } from 'expo-linear-gradient';
interface PillTabsProps {
  leftTitle: string;
  rightTitle: string;
}

const PillTabs = ({ leftTitle, rightTitle }: PillTabsProps) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <LinearGradient style={styles.container} colors={Colors.BLACK_GRADIENT}>
      <LinearGradient
        style={[styles.tab, isActive ? styles.activeTab : {}]}
        colors={isActive ? Colors.GREEN_GRADIENT : Colors.BLACK_GRADIENT}
      >
        <TouchableOpacity
          onPress={() => {
            setIsActive(true);
          }}
        >
          <Text style={[styles.title, isActive ? styles.activeTitle : {}]}>
            {leftTitle}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        style={[styles.tab, !isActive ? styles.activeTab : {}]}
        colors={!isActive ? Colors.GREEN_GRADIENT : Colors.BLACK_GRADIENT}
      >
        <TouchableOpacity
          onPress={() => {
            setIsActive(false);
          }}
        >
          <Text style={[styles.title, !isActive ? styles.activeTitle : {}]}>
            {rightTitle}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

export default PillTabs;

const styles = StyleSheet.create({
  container: {
    width: 352,
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 999,
  },
  tab: {
    width: 170,
    height: 44,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  activeTab: {},
  title: {
    color: Colors.GREY,
    textAlign: 'center',
  },
  activeTitle: {
    color: Colors.BLACK,
  },
});
