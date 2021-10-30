import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardTypeOptions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../constants/Colors';
import { styles } from './InputFieldStyle';

export interface Props {
  field: string;
  fieldHeading?: string;
  values: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  errors: string | undefined;
  setFieldTouched: (text: string) => void;
  touched: boolean;
  placeholderName?: string;
  showSecureTextEntry?: boolean;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const InputField: React.FC<Props> = ({
  field,
  fieldHeading,
  values,
  handleChange,
  errors,
  setFieldTouched,
  touched,
  placeholderName,
  showSecureTextEntry,
  editable,
  keyboardType,
}) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const updateSecureTextEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };
  const errorBottomColorStyle = () => {
    if (errors === undefined && values !== '') {
      return { borderBottomColor: Colors.GREEN_Success };
    }
    if (touched && errors) {
      return { borderBottomColor: Colors.RED_Error };
    }
    if (isActive) {
      return { borderBottomColor: Colors.WHITE };
    }
    return {};
  };
  function onFocus() {
    setActive(true);
  }
  function onBlur() {
    setFieldTouched(`${field}`);
    setActive(false);
  }
  return (
    <View style={styles.inputField}>
      {!!fieldHeading && <Text style={styles.text_heading}>{fieldHeading}</Text>}
      <View style={[styles.action, errorBottomColorStyle()]}>
        <TextInput
          style={[styles.textInput, { color: Colors.WHITE }]}
          value={values}
          underlineColorAndroid="transparent"
          onFocus={onFocus}
          onChangeText={handleChange(`${field}`)}
          onBlur={onBlur}
          placeholder={placeholderName || ''}
          autoCapitalize="none"
          secureTextEntry={showSecureTextEntry && secureTextEntry}
          keyboardType={keyboardType}
          editable={!editable}
          placeholderTextColor={Colors.WHITE}
          clearTextOnFocus={false}
          selectionColor={Colors.WHITE}
        />
        <CheckSign values={values} errors={errors} field={field} />
        <SecureEyePatch
          showSecureTextEntry={showSecureTextEntry}
          secureTextEntry={secureTextEntry}
          updateSecureTextEntry={updateSecureTextEntry}
        />
      </View>
      <Text style={styles.errorMsg}>{touched && errors}</Text>
    </View>
  );
};

interface SecureEyePatchProps {
  showSecureTextEntry: boolean | undefined;
  secureTextEntry: boolean;
  updateSecureTextEntry: () => void;
}
const SecureEyePatch = ({ showSecureTextEntry, secureTextEntry, updateSecureTextEntry }: SecureEyePatchProps) => {
  return showSecureTextEntry ? (
    <TouchableOpacity onPress={updateSecureTextEntry}>
      {secureTextEntry ? (
        <Feather name="eye-off" color={Colors.WHITE} size={20} />
      ) : (
        <Feather name="eye" color={Colors.WHITE} size={20} />
      )}
    </TouchableOpacity>
  ) : null;
};

interface CheckSignProps {
  field: string;
  values: string;
  errors: string | undefined;
}
const CheckSign = ({ errors, values, field }: CheckSignProps) => {
  return errors === undefined && values !== '' && field === 'email' && values.length > 1 ? (
    <AntDesign name="checkcircle" color={Colors.GREEN_Success} size={20} />
  ) : null;
};

export { InputField };
