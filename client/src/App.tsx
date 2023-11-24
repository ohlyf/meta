import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import ImageComponent from './components/ImageComponent';
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <ImageComponent />
      </View>
    </SafeAreaView>
  );
};

export default App;
