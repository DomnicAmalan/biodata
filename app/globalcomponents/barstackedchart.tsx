import globalstyles from "app/globalstyles";
import { scale } from "app/lib/scale";
import { FC, PropsWithChildren } from "react";
import { ColorValue, View, ViewStyle } from "react-native";

const StackedBarChartComponent: FC<PropsWithChildren<IStackedBarChartComponent>> = (props) => {
  const average = props?.data.reduce((a, b) => a + b, 0) / props?.data.length;
  const new_arr=[]

  for (let value of props?.data) {
    new_arr.push(value*(scale(props?.width)/scale(average))/props?.data.length)
  }
  
  return (
    <View style={{...globalstyles.container, flexDirection: 'row', ...props?.styles }}>
      {new_arr.map((item, index) => (
        <View 
          style={{ 
            borderTopLeftRadius: index === 0  ? scale(props?.barRadius || 0): 0,
            borderBottomLeftRadius: index === 0 ? scale(props?.barRadius || 0): 0,
            borderTopRightRadius: index === new_arr.length - 1  ? scale(props?.barRadius || 0): 0,
            borderBottomRightRadius: index === new_arr.length - 1 ? scale(props?.barRadius || 0): 0,
            height: props?.height, width: item, backgroundColor: props?.colorrange[index] 
          }} 
          key={`barcomp-${index}`}
        />
      ))}
    </View>
  )
}

interface IStackedBarChartComponent {
  data: Array<any>
  width: number,
  height: number,
  colorrange: Array<ColorValue>
  styles?: ViewStyle,
  index: number,
  barRadius?: number
}

export default StackedBarChartComponent