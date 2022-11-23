import { Text, View } from "react-native"
import { scale } from "app/lib/scale";
import { StyleSheet } from "react-native";
import { riskindicators } from "app/constants/risk";

const RiskTypeIndicators = () => {
  return (
    <View style={styles.container}>
      {Object.keys(riskindicators).map((item, idx) => (
        <View 
          key={`risktypelabels-${idx}`} 
          style={{...styles.risktypelabelscontainer, backgroundColor: riskindicators[item].color}}
        >
         <Text style={styles.risktypelabel}>{riskindicators[item].label}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: scale(16),
    marginRight: scale(16),
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