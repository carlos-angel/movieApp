import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-paper';

export default function Loading({message}) {
  return (
    <View style={styles.view}>
      <ActivityIndicator color="#1ae1f2" />
      <Text style={styles.message}>{message ?? 'cargando...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  message: {fontSize: 10, fontWeight: 'bold', textAlign: 'center'},
});
