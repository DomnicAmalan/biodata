import { View, ListRenderItem, Platform } from "react-native"
import { StyleSheet } from "react-native";
import { riskDataType } from "app/store/types";
import { scale } from "app/lib/scale";
import Typography from "app/globalcomponents/typography";
import StackedBarChartComponent from "app/globalcomponents/barstackedchart";
import Expand from '../../../../assets/svg/expand.svg';

const RiskData: ListRenderItem<riskDataType> = (info) => {
  const {item, index} = info;
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <View style={styles.container} key={`riskname-${index}`}>
        <Typography style={styles.label}>{item?.hazardName}</Typography>
        <StackedBarChartComponent 
          index={index}
          data={[item?.deficient, item?.risk, item?.wildType, item?.improved, item?.optimal]}
          colorrange={['#EF9611', '#FFF4E4', '#D2D2D2', '#EBFBE2', '#81B578']}
          width={scale(250)}
          height={scale(8)}
          styles={styles.chartcontainer}
          barRadius={2}
        />
      </View>
      <Expand />
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
    marginTop: scale(8),
    height: scale(8),
  }
})


export default RiskData