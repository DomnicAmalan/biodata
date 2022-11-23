import globalstyles from "app/globalstyles";
import { scale } from "app/lib/scale";
import { FC, PropsWithChildren } from "react";
import { ColorValue, View, ViewStyle } from "react-native";
import { Styles } from "react-native-svg/lib/typescript/xml";

const StackedBarChartComponent: FC<PropsWithChildren<IStackedBarChartComponent>> = (props) => {
  const average = props?.data.reduce((a, b) => a + b, 0) / props?.data.length;
  const new_arr=[]

  for (let value of props?.data) {
    new_arr.push(value*(scale(props?.width)/scale(average))/props?.data.length)
  }
  
  return (
    <View style={{...globalstyles.container, flexDirection: 'row', ...props?.styles }}>
      {new_arr.map((item, index) => (
        <View style={{ height: props?.height, width: item, backgroundColor: props?.colorrange[index] }} />
      ))}
    </View>
  )
}

interface IStackedBarChartComponent {
  data: Array<any>
  width: number,
  height: number,
  colorrange: Array<ColorValue>
  styles?: ViewStyle
}

export default StackedBarChartComponent