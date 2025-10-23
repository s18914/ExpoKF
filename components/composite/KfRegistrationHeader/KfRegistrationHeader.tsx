import React, { FunctionComponent, useContext } from "react";
import { View } from "react-native";
import style from "./style";
import BackButton from "../../common/BackButton/BackButton";
import Header from "../../common/KfText/KfText";
import KfStatusBar from "../../common/KfStatusBar/KfStatusBar";
import { RegistrationContext } from "../../../app/activation/_layout";

interface Props {}

const KfRegistrationHeader: FunctionComponent<Props> = () => {
  const registerCtx = useContext(RegistrationContext);

  return (
    <>
      <View style={style.container}>
        {registerCtx.step !== 1 && (
          <BackButton
            style={style.arrow}
            onPress={registerCtx.goToPreviousStep}
          />
        )}

        <Header
          title={`Aktywacja aplikacji (krok ${registerCtx.step} z ${registerCtx.getMaxSteps()})`}
          type={5}
        />
      </View>
      <KfStatusBar />
    </>
  );
};

export default KfRegistrationHeader;
