import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionsScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{ ...styles.cajaMorada, width: width * 0.5 }} />
        <View style={styles.cajaNaranja} />
        <Text style={styles.title}>
          W: {width}, H: {height}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    // width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
