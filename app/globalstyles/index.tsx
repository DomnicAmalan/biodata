import { scale, windowWidth, moderateScale, windowHeight } from "app/lib/scale";
import { StyleSheet } from "react-native";

const globalstyles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
  },
  align: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  typography: {
    fontFamily: 'Inter'
  },
  flatlistContainer: {
    marginTop: scale(16),
    marginBottom: scale(100),
    flexGrow: 1
  }
})

export default globalstyles