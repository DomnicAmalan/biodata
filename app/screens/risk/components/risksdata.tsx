import { Text, View, ListRenderItem, ListRenderItemInfo } from "react-native"
import { StyleSheet } from "react-native";
import { riskDataType } from "app/store/types";
import { scale, windowWidth } from "app/lib/scale";
import Typography from "app/globalcomponents/typography";
import { VictoryBar, VictoryContainer, VictoryLabel, VictoryStack } from "victory-native";

const RiskData: ListRenderItem<riskDataType> = (info) => {
  // console.log(info)
  return (
    <>
    <View style={styles.container} key={`riskname-${info?.index}`}>
      <Typography style={styles.label}>{info?.item?.hazardName}</Typography>
      <VictoryStack
        style={{
          data: {
            stroke: "rgba(255,255,255,1)",
            strokeWidth: 2
          },
          parent: {
            backgroundColor: 'green',
            padding: 0,
            height: 8,
            width: windowWidth
          }
        }}
        colorScale={["#D0021B", "#F5A623", "#00C16F"]}
        containerComponent={<VictoryContainer preserveAspectRatio="none" portalZIndex={100} style={styles.chartcontainer}/>}
      >
        <VictoryBar barWidth={8} horizontal data={[{ x: "progress", y: 50 }]} />
        <VictoryBar barWidth={8} horizontal data={[{ x: "progress", y: 25 }]} />
        <VictoryBar barWidth={8} horizontal data={[{ x: "progress", y: 25 }]} />
      </VictoryStack>
    </View>
  </>
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
    // display: 'flex',
    // flexDirection: 'column',
    // position: 'relative'
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    textTransform: 'capitalize',
    color: '#15284E'
  },
  chartcontainer: {
    width: scale(windowWidth),
    // padding: scale(16),
    // height: scale(8)
    zIndex: 100
  }
})


export default RiskData