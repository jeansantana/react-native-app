/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
  Button,
  Alert,
  Platform,
  Dimensions,
} from 'react-native';

// import { 
//   useDimensions,
//   useDeviceOrientation,
// } from '@react-native-community/hooks';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  // const { landscape } = useDeviceOrientation();

  const handlePress = () => {
    console.log('Text clicked');
  }

  const handleImagePress = () => {
    console.log('Image clicked');
  }

  const handleButtonPress = () => {
    Alert.alert('My Title', 'My message goes here', [
      { text: 'Yes', onPress: () => console.log('Pressed yes') },
      { text: 'No', onPress: () => console.log('Pressed no') },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: landscape ? '100%' : '30%',
        }}>
      </View> */}
      <Text onPress={handlePress} numberOfLines={1}>
        This is my long text. Let's se how it behaves on the screen. It has to behave nice.
      </Text>
      <TouchableOpacity
        onPress={handleImagePress}>
        <Image
          source={{
            uri:'https://picsum.photos/200/300',
            width: 200,
            height: 300
          }} 
        />
      </TouchableOpacity>
      <Button title='Click me' onPress={handleButtonPress}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});

export default App;
