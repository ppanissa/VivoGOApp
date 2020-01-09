import { Dimensions, Platform, PixelRatio } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// based on iphone 5s's scale
const scaleWidth = SCREEN_WIDTH / 320;

export const width = SCREEN_HEIGHT;

export const height = SCREEN_WIDTH;

/**
 * Font Normalize Size
 * @param {*} size
 */
export function font(size) {
  const newSize = size * scaleWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

/**
 * Scale
 * @author https://github.com/nirsky/react-native-size-matters
 * @param {*} size
 */
export function s(size) {
  return scale(size);
}
/**
 * Moderate Scale
 * * @author https://github.com/nirsky/react-native-size-matters
 * @param {*} size
 */
export function ms(size) {
  return moderateScale(size);
}

/**
 * Vertical Scale
 * @author https://github.com/nirsky/react-native-size-matters
 * @param {*} size
 */
export function vs(size) {
  return verticalScale(size);
}

export default { width, height, font, s, ms, vs };
