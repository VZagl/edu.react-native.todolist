import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function (): React.JSX.Element {
  return <Text style={styles.text}>Список дел</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    backgroundColor: 'silver',
    color: '#d00',
    fontWeight: '800',
    textAlign: 'center',
    padding: 10,
  },
});
