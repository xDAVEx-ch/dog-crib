import React from 'react';
import Constants from 'expo-constants';
import { Formik } from 'formik';

import { View, Text, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import FormInput from '../../components/formInput/formInput.component';
import CustomizeButton from '../../components/customizeButton/customizeButton.component';
import MsgBox from '../../components/msgBox/msgBox.component';
import StyledLine from '../../components/Line/Line.component';
import KeyboardAvoid from '../../components/keyboardAvoidWrapper/keyboardAvoidWrapper';
import ExtraView from '../../components/extraView/extraView.component';

import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const dimensions = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
};

const statusBarHeight = Constants.statusBarHeight;

const StyledContainer = styled(View)`
  flex: 1;
  padding: 25px;
  padding-top: ${statusBarHeight + 10}px;
  background-color: ${(props) => props.theme.colors.bg.light};
`;

const InnerContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const PageLogo = styled(Image)`
  width: 100%;
  height: 35%;
`;

const PageTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h2};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text.primary};
  width: 100%;
`;

const SubTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text.primary};
  width: 100%;
`;

const StyledFormArea = styled(ScrollView)`
  width: 90%;
  margin-top: ${(props) => props.theme.sizes[2]};
`;

const GoogleIcon = styled(Ionicons)`
  color: ${(props) => props.theme.colors.bg.light};
  z-index: 10;
  font-size: ${(props) => props.theme.fontSizes.title};
  padding-top: 2px;
`;

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoid>
      <StyledContainer style={{ height: dimensions.screenHeight }}>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageLogo
            resizeMode='cover'
            source={require('./../../assets/playing-with-dogs.png')}
          />
          <PageTitle>Dog Crib</PageTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={() => {
              console.log('Information was sent');
              navigation.navigate('Welcome');
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea showsVerticalScrollIndicator={false}>
                <FormInput
                  labelText={'Email Address'}
                  placeholder={'jonh@gmail.com'}
                  placeholderTextColor={'#ccc'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                />

                <FormInput
                  labelText={'Password'}
                  placeholder={'password'}
                  placeholderTextColor={'#ccc'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                />

                <MsgBox>...</MsgBox>

                <CustomizeButton buttonText={'Login'} onPress={handleSubmit} />

                <StyledLine />

                <CustomizeButton
                  buttonText={'Sign in with Google'}
                  onPress={handleSubmit}
                  isGoogle={true}
                >
                  <GoogleIcon name='logo-google' />
                </CustomizeButton>

                <ExtraView
                  textMsg={'Need an account?'}
                  textContent={'Signup'}
                  navigation={navigation}
                />
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoid>
  );
};

export default Login;
