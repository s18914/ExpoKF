import React, { FunctionComponent, useContext } from "react";
import { View } from "react-native";
import style from "./style";
import BackButton from "../../common/BackButton/BackButton";
import Header from "../../common/KfText/KfText";
import KfStatusBar from "../../common/KfStatusBar/KfStatusBar";
import { RegistrationContext } from "../../../app/registration/_layout";

interface Props {}

const KfRegistrationHeader: FunctionComponent<Props> = () => {
  const registerCtx = useContext(RegistrationContext);

  if (registerCtx.step === 0) {
    return null;
  }

  return (
    <>
      <View style={style.container}>
        <BackButton
          style={style.arrow}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Header
          title={`Aktywacja aplikacji (krok ${registerCtx.step} z 5)`}
          type={5}
        />
      </View>
      <KfStatusBar step={registerCtx.step} />
    </>
  );
};

export default KfRegistrationHeader;
