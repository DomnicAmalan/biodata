import { View, ListRenderItem, Platform } from "react-native"
import { StyleSheet } from "react-native";
import { riskDataType } from "app/store/types";
import { scale } from "app/lib/scale";
import Typography from "app/globalcomponents/typography";
import { riskindicators } from "app/constants/risk";

const RiskData: ListRenderItem<riskDataType> = (info) => {
  const {item, index} = info;
  return (
    <View style={styles.container} key={`riskname-${index}`}>
      <Typography style={styles.label}>{item?.hazardName}</Typography>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: scale(64),
    elevation: 2,
    backgroundColor: '#fff',
    marginLeft: scale(16),
    marginRight: scale(16),
    marginBottom: scale(8),
    borderRadius: scale(12),
    padding: scale(16),
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    textTransform: 'capitalize',
    color: '#15284E'
  },
  chartcontainer: {
    height: scale(8),
    width: scale(100),
    marginTop: scale(20),
    zIndex: 100,
    
  },
  chartvaluecontainer: {
    height: scale(8),
    borderRadius: scale(2),
  }
})


export default RiskData