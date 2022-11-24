import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TaskScreen6 = () => {
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
    // flexDirection: 'row',
  },
  cajaMorada: {
    // width: 100,
    flex: 2,
    height: 100,
    borderWidth: 10,
    backgroundColor: '#5856d6',
    borderColor: 'white',
  },
  cajaNaranja: {
    // width: 100,
    flex: 2,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
  },
  cajaAzul: {
    // width: 100,
    flex: 4,
    height: 100,
    borderWidth: 10,
    backgroundColor: '#28c4d9',
    borderColor: 'white',
  },
});
