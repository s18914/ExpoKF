import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import KfText from "../KfText/KfText";
import ArrowIcon from "../../../assets/icons/arrow_icon";
import Spacer from "../Spacer/Spacer";

interface MenuItemProps {
  title: string;
  marker?: boolean;
  badge?: string;
  color?: string;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, marker, badge, color, onPress }) => (
  <TouchableOpacity style={styles.menuItem} activeOpacity={0.7} onPress={onPress} >
    <View style={styles.menuItemContent}>
      <View style={styles.menuItemTitle}>
        <KfText title={title} type={40} />
        {marker && <View style={[styles.marker, { backgroundColor: color }]} />}
      </View>
      <Spacer />
      {badge && (
        <View style={[styles.badge, { backgroundColor: `${color}25` }]}>
          <KfText
            title={badge}
            type={7}
            color={color ?? "black"}
            otherStyles={{ fontFamily: "EuclidCircularM" }}
          />
        </View>
      )}
    </View>
    <ArrowIcon fill="#1F2225" />
  </TouchableOpacity>
);

export default MenuItem;