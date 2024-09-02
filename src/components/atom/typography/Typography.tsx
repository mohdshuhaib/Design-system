import React from "react"
import TypographyPropsType from "./type"

const Typography: React.FC<TypographyPropsType> = ({
  tag,
  text,
  className,
  children,
  style,
  role,
  ariaLabel,
  arialabelledBy,
}) => {
  return React.createElement(
    tag,
    {
      className: className,
      style: style,
      role: role,
      ariaLabel: ariaLabel,
      arialabelledBy: arialabelledBy
    },
    <>
      {text}, {children}
    </>)

}

export default Typography