// import { Dimensions } from 'react-native';
// import DeviceInfo from 'react-native-device-info';

import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// 📌 Telefon z makiety (iPhone 14 Pro Max w figmie)
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

/**
 * Skaluje względem szerokości
 * np. horizontalScale(20) => dopasowany margines/padding
 */
export const horizontalScale = (size: number) =>
  (width / guidelineBaseWidth) * size;

/**
 * Skaluje względem wysokości
 * np. verticalScale(50) => dopasowana wysokość komponentu
 */
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

/**
 * Umiarkowane skalowanie (bardziej naturalne na różnych ekranach)
 * factor = 0.5 => kompromis między width a makietą
 */
export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

/**
 * Skalowanie czcionek (z uwzględnieniem DPI)
 * Daje efekt najbardziej zbliżony do designu na różnych ekranach
 */
export const scaleFontSize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(horizontalScale(size)));

// const { width, height } = Dimensions.get('window');

// const isSmall = width <= 375 && !DeviceInfo.hasNotch();

// const guidelineBaseWidth = () => {
//   if (isSmall) {
//     return 330;
//   }
//   return 350;
// };

// const horizontalScale = size => (width / guidelineBaseWidth()) * size;

// const guidelineBaseHeight = () => {
//   if (isSmall) {
//     return 550;
//   } else if (width > 410) {
//     return 620;
//   }
//   return 680;
// };

// const verticalScale = size => (height / guidelineBaseHeight()) * size;

// const guidelineBaseFonts = () => {
//   if (width > 410) {
//     return 430;
//   }
//   return 400;
// };

// const scaleFontSize = size => Math.round((width / guidelineBaseFonts()) * size);

// export { horizontalScale, verticalScale, scaleFontSize };
