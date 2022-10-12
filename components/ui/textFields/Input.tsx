import { StyleSheet, TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../styles';
import EyeIcon from '../../../assets/Icons/EyeIcon';

interface InputProps {
  placeholder: string;
  lable: string;
  isError?: boolean;
  isSuccess?: boolean;
  isDisabled?: boolean;
}
//TODO: Cursor Color
const Input = ({
  placeholder,
  isError = false,
  isSuccess = false,
  isDisabled = false,
  lable,
}: InputProps) => {
  const [isActive, setActive] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lable}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          editable={!isDisabled}
          onFocus={() => {
            setActive(true);
          }}
          onBlur={() => {
            setActive(false);
          }}
          selectionColor={Colors.WHITE}
          placeholder={isActive ? '' : placeholder}
          placeholderTextColor={Colors.GREY}
          style={[
            styles.input,
            {
              color: isError
                ? Colors.RED_U
                : isSuccess
                ? Colors.GREEN_U
                : isDisabled
                ? Colors.GREY
                : Colors.WHITE,
            },
          ]}
        ></TextInput>
        <EyeIcon
          style={styles.icon}
          color={isActive ? Colors.WHITE : Colors.GREY}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    width: 351,
    height: 54,
    borderRadius: 8,
    backgroundColor: Colors.BLACK_1,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    maxWidth: 295,
  },
  icon: {
    marginLeft: 10,
  },
  lable: {
    color: Colors.WHITE,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
});
