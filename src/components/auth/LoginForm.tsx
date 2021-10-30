import React, { FC, useState } from 'react';
import { Formik } from 'formik';
import { View, Pressable, Keyboard, KeyboardAvoidingView, Text } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import styles from './formStyles';
import { InputField } from '../common/InputField';
import { CustomButton } from '../common';
import axios, { AxiosResponse } from 'axios';
import { LoginError, LoginFormProps, LoginResponse } from './types';
import notifier from '../../utils/Notifiers/Notifier';
import { NotifierTitle } from '../../utils/enums';
import { useUser } from './AuthContext';

export const LoginForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useUser();
  const loginHandle = async (values: LoginFormProps) => {
    try {
      setLoading(true);
      const response: AxiosResponse = await axios.get(
        'https://res.cloudinary.com/prohorde/raw/upload/v1633980023/cdn/teewt_api/user_login_data_lyukus.json'
      );
      const result = response.data as LoginResponse;
      let loggedIn = false;
      result.oauth.map((item) => {
        if (item.user_id === values.username && item.password === values.password) {
          notifier.success(NotifierTitle.LOGIN);
          loggedIn = true;
          setUser(item);
          return;
        }
      });
      if (!loggedIn) {
        throw new Error("Username or Password doesn't match");
      }
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        notifier.error(NotifierTitle.LOGIN, error.message);
      } else {
        const errMsg = error as LoginError;
        notifier.error(NotifierTitle.LOGIN, errMsg.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.loginForm}
      contentContainerStyle={styles.loginForm_container}
      // keyboardShouldPersistTaps="always"
      // showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={Keyboard.dismiss} style={styles.loginForm_containerPressable}>
        <Text style={styles.loginForm_heading}>Log In</Text>
        <View style={styles.loginForm_containerWrapper}>
          <View>
            <Formik
              initialValues={{ username: '', password: '' } as LoginFormProps}
              onSubmit={loginHandle}
              validationSchema={Yup.object().shape({
                username: Yup.string()
                  .required('Username is a required field')
                  .typeError('Username must be a valid email.'),
                password: Yup.string()
                  .min(4, 'Password must be minimum of 4 characters long')
                  .required('Password is a required field')
                  .typeError('Password must be minimum of 4 characters long'),
              })}
            >
              {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (
                <>
                  <InputField
                    field="username"
                    values={values.username}
                    handleChange={handleChange}
                    setFieldTouched={setFieldTouched}
                    touched={touched.username!}
                    errors={errors.username}
                    placeholderName="Username"
                  />
                  <InputField
                    field="password"
                    values={values.password}
                    handleChange={handleChange}
                    setFieldTouched={setFieldTouched}
                    touched={touched.password!}
                    errors={errors.password}
                    showSecureTextEntry
                    placeholderName="Password"
                  />
                  <View style={styles.loginForm_buttonWrapper}>
                    <CustomButton center onPress={handleSubmit} loading={loading} />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
