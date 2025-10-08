import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';
import { WebView } from 'react-native-webview';

export default function ApplicationScreen() {
  return (
    <View style={styles.container}>
        <WebView source={{ uri: 'https://app.kupfundusz.pl/logowanie' }} />
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