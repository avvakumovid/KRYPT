import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../../styles';
import { LinearGradient } from 'expo-linear-gradient';
import ArrowLeft from '../../../assets/Icons/ArrowLeft';
import ArrowRight from './../../../assets/Icons/ArrowRight';

interface SecondaryButtonProps {
  disabled?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  width: 350 | 165 | 70;
  title?: string;
  onPress: () => {};
}

const SecondaryButton = ({
  leftIcon = false,
  rightIcon = false,
  disabled = false,
  title,
  width,
  onPress,
}: SecondaryButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <LinearGradient
        colors={
          disabled
            ? [Colors.BLACK_1, Colors.BLACK_1]
            : [Colors.BLACK, Colors.BLACK]
        }
        style={[styles.container, { width }]}
      >
        {rightIcon && <ArrowLeft disabled={disabled} color={Colors.GREEN} />}
        {title ? (
          <Text
            style={[
              styles.title,
              disabled ? { color: Colors.GREY } : { color: Colors.GREEN },
            ]}
          >
            {title}
          </Text>
        ) : null}
        {leftIcon && <ArrowRight disabled={disabled} color={Colors.GREEN} />}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.GREEN,
    borderRadius: 999,
    paddingVertical: 19.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,

    flexDirection: 'row',
  },
  title: {
    marginHorizontal: 12,
  },
});
