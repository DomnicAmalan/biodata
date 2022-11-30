import { RiskSub } from "app/store/types"
import { ListRenderItem, View, TouchableOpacity, ListRenderItemInfo } from "react-native"
import { StyleSheet, Text } from "react-native";
import { riskindicators } from "app/constants/risk";
import _ from 'lodash'
import { useNavigation } from "@react-navigation/native";
import { FC, PropsWithChildren } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
const SubHazardRisksCard: FC<PropsWithChildren<SubHazardRisksCard>>  = (props) => {
  const {item} = props?.data
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate(
        'RiskbySNP', {subHazardId: item?.subHazardId, snpInterpretationId: item?.snpInterpretationId, title: item?.snpMarker?.toLowerCase()}
      )}
    >
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
    </TouchableOpacity>
  )
}

interface SubHazardRisksCard {
  data: ListRenderItemInfo<RiskSub>
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