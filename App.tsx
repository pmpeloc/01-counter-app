import React from 'react';
import { SafeAreaView } from 'react-native';
import { TaskScreen10 } from './src/screens/TaskScreen10';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <TaskScreen10 />
    </SafeAreaView>
  );
};

export default App;
