import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TaskScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: '#5856d6',
    borderColor: 'white',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
  },
  cajaAzul: {
    // width: 100, OR width: '100%',
    height: 100,
    borderWidth: 10,
    backgroundColor: '#28c4d9',
    borderColor: 'white',
  },
});
