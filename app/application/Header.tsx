import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AskSmall from '../../assets/icons/ask_small';
import KfText from '../../components/common/KfText/KfText';

interface HeaderProps {
  onAvatarPress?: () => void;
  onAskPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAvatarPress, onAskPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={onAvatarPress}
        activeOpacity={0.7}
      >
        <View style={styles.avatar}>
          
        </View>
      </TouchableOpacity>

      <KfText title="Pulpit inwestycyjny" type={5} otherStyles={{flex: 1, height: "auto"}}/>

      <TouchableOpacity
        style={styles.askButton}
        onPress={onAskPress}
        activeOpacity={0.7}
      >
        <AskSmall width={20} height={19} fill="#1F2225" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    zIndex: 1001, // Above MoreMenu
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  askButton: {
    padding: 8,
  },
});

export default Header;
