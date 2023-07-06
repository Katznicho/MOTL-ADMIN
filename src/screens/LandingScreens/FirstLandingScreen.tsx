// @ts-nocheck
import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';

const FirstLandingScreen = () => {
  return (

    <ImageBackground
      source={require('./assests/test.png')}
      className=" h-full w-full justify-center items-center relative ">
      <Image source={require('./assests/logo.png')} />

      <Image
        source={require('./assests/bottomlogo.png')}
        className="absolute bottom-0"
      />
    </ImageBackground>
  );
};

export default FirstLandingScreen;
