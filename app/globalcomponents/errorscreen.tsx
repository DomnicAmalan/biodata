import globalstyles from "app/globalstyles"
import { FC, PropsWithChildren } from "react"
import { Text, View } from "react-native"

const ErrorScreen: FC<PropsWithChildren<ErrorScreenProps>> = (props) => {
  return (
    <View style={{...globalstyles.container, ...globalstyles.align}}>
      <Text>
        {props?.text}
      </Text>
    </View>
  )
}

interface ErrorScreenProps {
  text?: string
}

export default ErrorScreen