import globalstyles from "app/globalstyles"
import { FC, PropsWithChildren } from "react"
import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native"

const LoadingScreen: FC<PropsWithChildren<ActivityIndicatorProps>> = (props) => {
  return (
    <View style={{...globalstyles.container, ...globalstyles.align}}>
      <ActivityIndicator {...props}/>
    </View>
  )
}

export default LoadingScreen