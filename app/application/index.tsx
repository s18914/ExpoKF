import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import MoreMenu from './MoreMenu';
import { WebView } from 'react-native-webview';

export default function ApplicationScreen() {
  const [isMoreMenuVisible, setIsMoreMenuVisible] = useState(false);

  const handleMorePress = () => {
    setIsMoreMenuVisible(true);
  };

  const handleMoreMenuClose = () => {
    setIsMoreMenuVisible(false);
  };

  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <WebView source={{ uri: 'https://app.kupfundusz.pl/logowanie' }} />
        </View>
        <Footer onMorePress={handleMorePress} />
        <MoreMenu
          isVisible={isMoreMenuVisible}
          onClose={handleMoreMenuClose}
        />
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