import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {Container} from "../styles/appStyles";
import Constants from "expo-constants";
import Home from "../components/Home";

export default function HomeScreen() {
  return (
    <Container style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#332424',
    padding: 20,
    paddingBottom: 0,
    paddingTop: Constants.statusBarHeight
  },
});
