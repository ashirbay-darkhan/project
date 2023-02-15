import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen({navigation}) {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("Home")}
      onDone={() => navigation.navigate("Home")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Connect to the world',
          subtitle: 'A new way to connect with the world',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Share your favorites',
          subtitle: 'SHare your thoughts with similar kind of people',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Become the star',
          subtitle: 'SHare your thoughts with similar kind of people',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
