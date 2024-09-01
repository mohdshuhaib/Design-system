interface TypographyPropsType {
  text: string
  tag: keyof JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  role?: string
  ariaLabel?: string
  arialabelledBy?: string

}

export default TypographyPropsType