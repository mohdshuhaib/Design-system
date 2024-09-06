import classNames from "classnames"
import ButtonProps from "./type"

const getBtnClasses = ({variant, variantType, classes, isLoading}: ButtonProps) => {
  const btnClasses = classNames(
    'py-3 px-5 rounded font-bold text-white cursor-pointer',
    {
      'bg-primary text-white': variant === 'primary' && variantType === 'filled',
      'bg-secondary': variant === 'secondary' && variantType === 'filled',
      'bg-tertiary': variant === 'tertiary' && variantType === 'filled',
      'border-2 border-primary': variant === 'primary' && variantType === 'outline',
      'border-2 border-secondary': variant === 'secondary' && variantType === 'outline',
      'border-2 border-tertiary': variant === 'tertiary' && variantType === 'outline',
      'cursor-not-allowed': isLoading,
    },
    classes,
    );
 
      return btnClasses

}

export default getBtnClasses