import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

// import colors from '../styles/colors';
import appStyles from '../styles/styles';

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/img/background.jpg')}>

        <View style={appStyles.buttons.primary}>
          <Text>Heuh</Text>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default WelcomeScreen;