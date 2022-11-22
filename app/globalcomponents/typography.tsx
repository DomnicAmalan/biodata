import globalstyles from "app/globalstyles"
import { FC, PropsWithChildren } from "react"
import { Text, TextProps } from "react-native"

const Typography: FC<PropsWithChildren<TextProps>> = (props) => {
  return (
    <Text style={globalstyles.typography} {...props} >{props?.children}</Text>
  )
}

export default Typography