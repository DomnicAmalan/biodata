import { scale, windowWidth, moderateScale, windowHeight } from "app/lib/scale";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tab: {
    marginTop: 24
  },
  section: {
    display: 'flex'
  },
  container: {
    paddingHorizontal: scale(16),
    backgroundColor: '#fff',
    flexGrow: 1
  },
  dataview: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16
  },
  datahead: {
    fontWeight: '400',
    fontSize: 12,
    color: '#15284E'
  },
  datatext: {
    fontWeight: '600',
    fontSize: 24,
    color: '#15284E',
    letterSpacing: 0.2,
  },
  narrative: {
    fontWeight: '400',
    fontSize: 16,
    color: '#15284E',
  }
})