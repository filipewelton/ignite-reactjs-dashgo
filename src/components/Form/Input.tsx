import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { ForwardRefRenderFunction, forwardRef } from 'react'

interface InputProps extends ChakraInputProps {
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const { label, ...rest } = props

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor='email'>{label}</FormLabel>}

      <ChakraInput
        ref={ref}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{
          bgColor: 'gray.900',
        }}
        size='lg'
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
