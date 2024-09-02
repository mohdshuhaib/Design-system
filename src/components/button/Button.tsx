import ButtonProps from "./type"

 const Button: React.FC<ButtonProps> = ({
  children,
  type,
  classes,
  onClick,
  ...restProps
}) =>{
  return (
    <button type={type} className={classes} onClick={onClick} {...restProps}>
      {children}
      </button>
  )
}

export default Button