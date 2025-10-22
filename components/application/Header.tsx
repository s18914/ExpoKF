import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Conversation from '../../assets/icons/conversation';
import KfText from '../common/KfText/KfText';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';
import UserEmpty from '../../assets/icons/user_empty';
import ArrowDown from '../../assets/icons/common/arrow_down';
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
        <UserEmpty />
        <ArrowDown />

      </TouchableOpacity>

      <KfText title="Pulpit inwestycyjny" type={5} otherStyles={{height: "auto"}}/>

      <TouchableOpacity
        onPress={onAskPress}
        activeOpacity={0.7}
      >
        <Conversation width={scaleFontSize(29)} height={scaleFontSize(28)} fill="#1F2225" />
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
    height: verticalScale(60),
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    zIndex: 1001, // Above MoreMenu
  },
  avatarContainer: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(7),
  },
});

export default Header;
