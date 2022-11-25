import { scale, windowWidth, moderateScale, windowHeight } from "app/lib/scale";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  description: {
    fontWeight: '400',
    fontSize: 14,
    color: '#15284E',
    marginBottom: scale(33),
    marginTop: scale(16)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: scale(16),
    marginRight: scale(16),
    paddingBottom: scale(40),
    backgroundColor: '#F5F5F5'
  },
  riskscontainer: {
    display: 'flex',
    paddingBottom: scale(100),
    flexGrow: 1
  },
  itemheadercontainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  tableheadercontainer: {
    display: 'flex',
    height: '100%',
    paddingVertical: 16,
    flexDirection: 'row',
    flex: 1,
    marginBottom: 8,
  },
  headerlabel: {
    fontSize: 12, fontWeight: '500', color: '#919AAF',
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
})