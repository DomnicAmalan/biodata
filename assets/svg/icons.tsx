import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const CollapseIcon = (props: SvgProps) => {
  return (
    <Svg
      width={12}
      height={8}
      viewBox="0 0 12 8"
      fill="none"
      {...props}
    >
      <Path
        d="M1 7l5-5 5 5"
        stroke="#919AAF"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

const ExpandIcon = (props: SvgProps) => {
  return (
    <Svg
      width={12}
      height={8}
      viewBox="0 0 12 8"
      fill="none"
      {...props}
    >
      <Path
        d="M11 1L6 6 1 1"
        stroke="#919AAF"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export {
  ExpandIcon,
  CollapseIcon
}


