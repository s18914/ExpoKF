import React, { FunctionComponent, useState } from "react";
import { View, Pressable, Modal } from "react-native";
import KfText from "../KfText/KfText";
import style from "./style";

interface TooltipProps {
  children: React.ReactNode;
  message: string;
  position?: 'top' | 'bottom';
}

const Tooltip: FunctionComponent<TooltipProps> = ({ 
  children, 
  message, 
  position = 'top' 
}) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <View style={style.container}>
      <Pressable onPress={showTooltip}>
        {children}
      </Pressable>
      
      <Modal
        transparent={true}
        visible={visible}
        animationType="fade"
        onRequestClose={hideTooltip}
      >
        <Pressable 
          style={style.overlay} 
          onPress={hideTooltip}
        >
          <View style={[
            style.tooltipContainer,
            position === 'bottom' ? style.tooltipBottom : style.tooltipTop
          ]}>
            <View style={style.tooltip}>
              <KfText 
                title={message} 
                type={6} 
                color="white"
                isTextCenter={true}
              />
            </View>
            <View style={[
              style.arrow,
              position === 'bottom' ? style.arrowTop : style.arrowBottom
            ]} />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Tooltip;
