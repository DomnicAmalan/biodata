import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"

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

const BackIcon = (props: SvgProps) => {
  return (
    <Svg
      width={11}
      height={18}
      viewBox="0 0 11 18"
      fill="none"
      {...props}
    >
      <Path
        d="M10 17L2 9l8-8"
        stroke="#2559D6"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

const FilterIcon = (props: SvgProps) => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <Rect width={40} height={40} rx={12} fill="#F9F9FE" />
      <Path
        d="M12 25a1 1 0 110-2v2zm16-2a1 1 0 110 2v-2zm-11 2a1 1 0 001-1h2a3 3 0 01-3 3v-2zm1-1a1 1 0 00-1-1v-2a3 3 0 013 3h-2zm-1-1a1 1 0 00-1 1h-2a3 3 0 013-3v2zm-1 1a1 1 0 001 1v2a3 3 0 01-3-3h2zm-1 1h-3v-2h3v2zm4-2h9v2h-9v-2zM28 17a1 1 0 100-2v2zm-16-2a1 1 0 100 2v-2zm11 2a1 1 0 01-1-1h-2a3 3 0 003 3v-2zm-1-1a1 1 0 011-1v-2a3 3 0 00-3 3h2zm1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zm1 1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm1 1h3v-2h-3v2zm-4-2h-9v2h9v-2z"
        fill="#2559D6"
      />
    </Svg>
  )
}


export {
  ExpandIcon,
  CollapseIcon,
  BackIcon,
  FilterIcon
}


