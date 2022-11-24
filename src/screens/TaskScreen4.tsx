import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TaskScreen4 = () => {
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
    justifyContent: 'space-between',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: '#5856d6',
    borderColor: 'white',
    alignSelf: 'flex-end',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    alignSelf: 'center',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: '#28c4d9',
    borderColor: 'white',
    alignSelf: 'flex-start',
  },
});
