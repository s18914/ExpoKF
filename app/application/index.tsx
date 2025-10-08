import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';

export default function ApplicationScreen() {
  return (
    <View style={styles.container}>
        <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});