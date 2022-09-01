/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 40 }}>
        Contador: {counter}
      </Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};
