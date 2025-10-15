import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import MoreMenu from './MoreMenu';
import ProfileDrawer from './ProfileDrawer';
import BiometricsScreen from './BiometricsScreen';
import ChangePinScreen from './ChangePinScreen';
import { WebView } from 'react-native-webview';

type Screen = 'main' | 'biometrics' | 'changePin';

export default function ApplicationScreen() {
  const [isMoreMenuVisible, setIsMoreMenuVisible] = useState(false);
  const [isProfileDrawerVisible, setIsProfileDrawerVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('main');

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

  const handleBiometricsPress = () => {
    setCurrentScreen('biometrics');
    setIsProfileDrawerVisible(false);
  };

  const handleChangePinPress = () => {
    setCurrentScreen('changePin');
  };

  const handleBackToMain = () => {
    setCurrentScreen('main');
  };

  const handleBackToBiometrics = () => {
    setCurrentScreen('biometrics');
  };

  // Render different screens based on currentScreen state
  if (currentScreen === 'biometrics') {
    return (
      <View style={styles.container}>
        <BiometricsScreen
          onBack={handleBackToMain}
          onChangePinPress={handleChangePinPress}
        />
      </View>
    );
  }

  if (currentScreen === 'changePin') {
    return (
      <View style={styles.container}>
        <ChangePinScreen onBack={handleBackToBiometrics} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProfileDrawer
        isVisible={isProfileDrawerVisible}
        onClose={handleProfileDrawerClose}
        onBiometricsPress={handleBiometricsPress}
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