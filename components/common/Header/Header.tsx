import React, { FunctionComponent } from "react";
import { View } from "react-native";
import style from "./style";
import BackButton from "../../common/BackButton/BackButton";
import Header from "../../common/KfText/KfText";

interface Props {
    title: string;
    onBack?: () => void ;
}

const KfHeader: FunctionComponent<Props> = ({title, onBack}) => {

  return (
    <>
      <View style={style.container}>
        {onBack &&
        <BackButton
            style={style.arrow}
            onPress={onBack}
          />
        }
        <Header
          title={title}
          type={5}
        />
      </View>
    </>
  );
};

export default KfHeader;
