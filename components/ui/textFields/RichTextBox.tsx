import { StyleSheet, TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../styles';
import EyeIcon from '../../../assets/Icons/EyeIcon';

interface RichTextBoxProps {
  placeholder: string;
  lable: string;
  isError?: boolean;
  isSuccess?: boolean;
  isDisabled?: boolean;
}
//TODO: Cursor Color
const RichTextBox = ({
  placeholder,
  isError = false,
  isSuccess = false,
  isDisabled = false,
  lable,
}: RichTextBoxProps) => {
  const [isActive, setActive] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lable}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          multiline={true}
          textAlignVertical={'bottom'}
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
      </View>
    </View>
  );
};

export default RichTextBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    width: 351,
    height: 154,
    borderRadius: 8,
    backgroundColor: Colors.BLACK_1,
    paddingHorizontal: 18,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  input: {},
  icon: {
    marginLeft: 10,
  },
  lable: {
    color: Colors.WHITE,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
});
