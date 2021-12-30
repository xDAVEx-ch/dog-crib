import React, { useState } from 'react';
import Constants from 'expo-constants';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';

import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import FormInput from '../../components/formInput/formInput.component';
import CustomizeButton from '../../components/customizeButton/customizeButton.component';
import MsgBox from '../../components/msgBox/msgBox.component';
import StyledLine from '../../components/Line/Line.component';
import ExtraView from '../../components/extraView/extraView.component';

import styled from 'styled-components/native';

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

const Signup = ({ navigation }) => {
  const today = Date.now();

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(today));
  const [dob, setDob] = useState();

  const onChangeDate = (eve, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageTitle>Dog Crib</PageTitle>
        <SubTitle>Account Signup</SubTitle>

        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={date}
            is24Hour={true}
            display='default'
            onChange={onChangeDate}
          />
        )}

        <Formik
          initialValues={{
            fullName: '',
            email: '',
            dateOfBirth: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={() => {
            console.log('Information was sent');
            navigation.navigate('Welcome');
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea showsVerticalScrollIndicator={false}>
              <FormInput
                labelText={'Full Name'}
                placeholder={'Richard Barrer'}
                placeholderTextColor={'#ccc'}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />

              <FormInput
                labelText={'Email Address'}
                placeholder={'jonh@gmail.com'}
                placeholderTextColor={'#ccc'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <FormInput
                labelText={'Date of Birth'}
                placeholder={'YYYY - MM - DD'}
                placeholderTextColor={'#ccc'}
                onChangeText={handleChange('datOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
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

              <FormInput
                labelText={'Confirm password'}
                placeholder={'Confirm password'}
                placeholderTextColor={'#ccc'}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('password')}
                value={values.confirmPassword}
                secureTextEntry={true}
              />

              <MsgBox>...</MsgBox>

              <CustomizeButton buttonText={'Signup'} onPress={handleSubmit} />

              <StyledLine />

              <ExtraView
                textMsg={'Already have an account?'}
                textContent={'Login'}
                navigation={navigation}
              />
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Signup;
