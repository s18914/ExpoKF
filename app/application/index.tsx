import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import MoreMenu from './MoreMenu';
import ProfileDrawer from './ProfileDrawer';
import { WebView } from 'react-native-webview';

export default function ApplicationScreen() {
  const [isMoreMenuVisible, setIsMoreMenuVisible] = useState(false);
  const [isProfileDrawerVisible, setIsProfileDrawerVisible] = useState(false);

  const handleMorePress = () => {
    setIsMoreMenuVisible(!isMoreMenuVisible);
  };

  const handleMoreMenuClose = () => {
    setIsMoreMenuVisible(false);
  };

  const handleAvatarPress = () => {
    setIsProfileDrawerVisible(!isProfileDrawerVisible);
    // Close MoreMenu if it's open
    if (isMoreMenuVisible) {
      setIsMoreMenuVisible(false);
    }
  };

  const handleProfileDrawerClose = () => {
    setIsProfileDrawerVisible(false);
  };

  return (
    <View style={styles.container}>
      <ProfileDrawer
        isVisible={isProfileDrawerVisible}
        onClose={handleProfileDrawerClose}
      />
      <Header onAvatarPress={handleAvatarPress} />
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