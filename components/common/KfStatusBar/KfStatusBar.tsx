import React, { FunctionComponent, useContext } from "react";

import style from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { RegistrationContext } from "../../../app/registration/_layout";

interface Props {
}

const KfStatusBar: FunctionComponent<Props> = () => {
  const registerCtx = useContext(RegistrationContext);
  const barWidth = (registerCtx.step ?? 1) * 20;

  return (
    <LinearGradient
      colors={["rgba(10, 206, 148, 1)", "rgba(104, 220, 69, 1)"]}
      style={[style.progressLine, { width: `${barWidth}%` }]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    ></LinearGradient>
  );
};

export default KfStatusBar;
