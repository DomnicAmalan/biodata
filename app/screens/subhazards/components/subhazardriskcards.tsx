import { RiskSub, SubHazardType } from "app/store/types"
import { ListRenderItem, View } from "react-native"
import { scale, windowWidth, moderateScale, windowHeight } from "app/lib/scale";
import { StyleSheet, Text } from "react-native";
import { riskindicators } from "app/constants/risk";
import _ from 'lodash'
const SubHazardRisksCard: ListRenderItem<RiskSub> = (info) => {
  const {item} = info
  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        <Text style={styles.headerlabel}>{item?.geneName}</Text>
      </View>
      <View style={styles.itemcontainer}>
        <Text style={{...styles.headerlabel, textTransform: 'lowercase'}}>{item?.snpMarker}</Text>
      </View>
      <View style={{...styles.itemcontainer, backgroundColor: riskindicators[_.camelCase(item?.alleleTypeName)].color}}>
        <Text style={{...styles.headerlabel, textTransform: 'capitalize'}}>{item?.alleleTypeName}</Text>
      </View>
      <View style={styles.itemcontainer}>
        <Text style={styles.headerlabel}>{item?.magnitude}</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    padding: 16,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    flex: 1,
    marginBottom: 8,
    alignSelf: 'stretch',
   
  },
  itemcontainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 3
  },
  headerlabel: {
    fontSize: 12, fontWeight: '500', color: '#15284E',
  }
})

export default SubHazardRisksCard