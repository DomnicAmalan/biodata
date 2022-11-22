import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: any) => width / guidelineBaseWidth * size;
const verticalScale = (size: any) => height / guidelineBaseHeight * size;
const moderateScale = (size: any, factor = 0.5) => size + (scale(size) - size) * factor;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export {scale, verticalScale, moderateScale, windowWidth, windowHeight};