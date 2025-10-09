import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import { WebView } from 'react-native-webview';

export default function ApplicationScreen() {
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <WebView source={{ uri: 'https://app.kupfundusz.pl/logowanie' }} />
        </View>
        <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});