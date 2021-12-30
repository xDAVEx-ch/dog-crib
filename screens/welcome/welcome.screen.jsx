import React from 'react';

import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CustomizeButton from '../../components/customizeButton/customizeButton.component';

import styled from 'styled-components/native';

const InnerContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const WelcomeContainer = styled(InnerContainer)`
  padding: 0 20px;
  align-items: center;
`;

const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  margin: 10px auto 20px auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.ui.primary};
  background-color: red;
`;

const WelcomeImage = styled(Image)`
  height: 50%;
  min-width: 100%;
`;

const PageTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h2};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text.primary};
  width: 100%;
  font-size: ${(props) =>
    props.welcome ? props.theme.fontSizes.h1 : props.theme.fontSizes.h2};
`;

const SubTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text.primary};
  width: 100%;
`;

const StyledFormArea = styled(View)`
  width: 100%;
  margin-top: ${(props) => props.theme.sizes[2]};
`;

const Content = styled(ScrollView)`
  flex: 1;
  width: 100%;
  margin-bottom: 10px;
`;

const BtnContainer = styled(Pressable)`
  width: 50%;
  margin: 0 auto;
`;

const Welcome = ({ navigation }) => {
  return (
    <>
      <StatusBar style='dark' />
      <InnerContainer>
        <WelcomeImage
          resizeMode='cover'
          source={require('./../../assets/group-of-dogs.jpg')}
        />

        <WelcomeContainer>
          <Content>
            <PageTitle welcome={true}>Welcome</PageTitle>
            <SubTitle welcome={true}>Homer Simpson</SubTitle>
            <SubTitle welcome={true}>homer@gmail.com</SubTitle>

            <StyledFormArea showsVerticalScrollIndicator={false}>
              <Avatar
                resizeMode='cover'
                source={require('./../../assets/playing-with-dogs.png')}
              />

              <BtnContainer>
                <CustomizeButton
                  buttonText={'Logout'}
                  onPress={() => navigation.navigate('Login')}
                ></CustomizeButton>
              </BtnContainer>
            </StyledFormArea>
          </Content>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
