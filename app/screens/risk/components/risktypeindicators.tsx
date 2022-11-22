import { Text, View } from "react-native"
import { scale } from "app/lib/scale";
import { StyleSheet } from "react-native";
import { riskindicators } from "app/constants/risk";

const RiskTypeIndicators = () => {
  return (
    <View style={styles.container}>
      {riskindicators.map((item, idx) => (
        <View 
          key={`risktypelabels-${idx}`} 
          style={{...styles.risktypelabelscontainer, backgroundColor: item?.color}}
        >
         <Text style={styles.risktypelabel}>{item.label}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  risktypelabelscontainer: {
    display: 'flex',
    paddingHorizontal: scale(5),
    paddingVertical: scale(3),
    borderRadius: scale(4)
  },
  risktypelabel: {
    fontWeight: '500',
    fontSize: 12
  }
})


export default RiskTypeIndicators