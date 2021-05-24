import React, { useState } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Input, Icon } from '@ui-kitten/components';

const ValidatedInput = (props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      {name === 'password' || name === 'confirmPassword' ? (
        <Input
          style={[styles.textInput, hasError && styles.errorInput]}
          value={value}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
          secureTextEntry={secureTextEntry}
          accessoryRight={renderIcon}
        />
      ) : (
        <Input
          style={[styles.textInput, hasError && styles.errorInput]}
          value={value}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
      )}
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '85%',
    margin: 0,
    padding: 15,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderBottomColor: 'black',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  errorInput: {
    borderBottomColor: 'red',
  },
});

export default ValidatedInput;
