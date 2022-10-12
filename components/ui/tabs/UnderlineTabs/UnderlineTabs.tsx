import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../../styles/index';
interface UnderlineTabsProps {
  leftTitle: string;
  rightTitle: string;
}

const UnderlineTabs = ({ leftTitle, rightTitle }: UnderlineTabsProps) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setIsActive(true);
        }}
        style={[styles.tab, isActive ? styles.activeTab : {}]}
      >
        <Text style={[styles.title, isActive ? styles.activeTitle : {}]}>
          {leftTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsActive(false);
        }}
        style={[styles.tab, !isActive ? styles.activeTab : {}]}
      >
        <Text style={[styles.title, !isActive ? styles.activeTitle : {}]}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UnderlineTabs;

const styles = StyleSheet.create({
  container: {
    width: 390,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    width: '50%',
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.BLACK,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREEN,
  },
  title: {
    color: Colors.GREY,
    textAlign: 'center',
  },
  activeTitle: {
    color: Colors.GREEN,
  },
});
