import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../../components/application/Footer';
import Header from '../../components/application/Header';
import MoreMenu from '../../components/application/MoreMenu';
import ProfileDrawer from '../../components/application/ProfileDrawer';
import BiometricsScreen from './BiometricsScreen';
import ChangePinScreen from './ChangePinScreen';
import { WebView } from 'react-native-webview';
import AskDrawer from '../../components/application/AskDrawer';

type Screen = 'main' | 'biometrics' | 'changePin';

export default function ApplicationScreen() {
  const [isMoreMenuVisible, setIsMoreMenuVisible] = useState(false);
  const [isProfileDrawerVisible, setIsProfileDrawerVisible] = useState(false);
  const [isAskDrawerVisible, setIsAskDrawerVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('main');

  const handleMorePress = () => {
    setIsMoreMenuVisible(!isMoreMenuVisible);
  };

  const handleMoreMenuClose = () => {
    setIsMoreMenuVisible(false);
  };

  const handleAvatarPress = () => {
    setIsProfileDrawerVisible(!isProfileDrawerVisible);
    setIsAskDrawerVisible(false);
    // Close MoreMenu if it's open
    if (isMoreMenuVisible) {
      setIsMoreMenuVisible(false);
    }
  };

  const handleProfileDrawerClose = () => {
    setIsProfileDrawerVisible(false);
  };

  const handleAskDrawerClose = () => {
    setIsAskDrawerVisible(false);
  };

  const handleAskPress = () => {
    setIsAskDrawerVisible(!isAskDrawerVisible);
    setIsProfileDrawerVisible(false);
    // Close MoreMenu if it's open
    if (isMoreMenuVisible) {
      setIsMoreMenuVisible(false);
    }
  };

  const handleBiometricsPress = () => {
    setCurrentScreen('biometrics');
    setIsProfileDrawerVisible(false);
    setIsAskDrawerVisible(false);
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
      <AskDrawer
        isVisible={isAskDrawerVisible}
        onClose={handleAskDrawerClose}
        onBiometricsPress={handleBiometricsPress}
      />
      <Header onAvatarPress={handleAvatarPress} onAskPress={handleAskPress}/>
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