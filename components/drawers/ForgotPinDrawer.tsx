import React, { useState } from "react";
import { View } from "react-native";
import KfText from "../common/KfText/KfText";
import { globalStyles } from "../../assets/styles/globalStyles";
import KfButton, { KFButtonTypes } from "../common/KfButton/KfButton";
import { verticalScale } from "../../assets/styles/scaling";
import TileIcon from "../common/TileIcon/TileIcon";

const ForgotPinDrawer = () => {
  return (
    <>
      <KfText
        title="Nie pamiętam kodu PIN"
        type={2}
        otherStyles={{ paddingBottom: verticalScale(19), maxWidth: "70%" }}
      />

      <KfText
        title="Aby ustawić nowy kod PIN, musisz ponownie aktywować aplikację."
        type={6}
      />
      <View
        style={[
          globalStyles.buttonsContainer,
          { paddingBottom: verticalScale(30) },
        ]}
      >
        <KfButton
          title={"Aktywuj aplikację ponownie"}
          type={KFButtonTypes.Gradient}
          icon="arrow"
        />
      </View>

      <KfText
        title="Potrzebujesz pomocy? "
        type={3}
        otherStyles={{ paddingBottom: verticalScale(15) }}
      />
      <View>
        <View style={{ flexDirection: "row", gap: verticalScale(18) }}>
          <TileIcon icon="phone" color="light-green" isSmall={true} />
          <View style={{ flex: 1 }}>
            <KfText
              title="+48 22 599 42 67"
              type={3}
              otherStyles={{ paddingBottom: verticalScale(9) }}
            />
            <KfText
              title="Jesteśmy do Twojej dyspozycji w dni robocze od&nbsp;poniedziałku do&nbsp;piątku od&nbsp;8:00 do&nbsp;16:00."
              type={6}
              otherStyles={{ opacity: 0.5 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: verticalScale(18) }}>
          <TileIcon
            icon="ask"
            color="dark-violet"
            isSmall={true}
            additionalColor="#7443FF"
          />
          <View style={{ flex: 1 }}>
            <KfText
              title="Centrum pomocy"
              type={3}
              otherStyles={{ paddingBottom: verticalScale(9) }}
            />
            <KfText
              title="Uzyskaj pomoc dotyczącą logowania, zakładania konta oraz&nbsp;korzystania z&nbsp;aplikacji KupFundusz.pl."
              type={6}
              otherStyles={{ opacity: 0.5 }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default ForgotPinDrawer;
