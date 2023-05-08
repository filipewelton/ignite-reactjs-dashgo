import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from '@chakra-ui/react'
import { ForwardRefRenderFunction, forwardRef } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const { label, error = null, ...rest } = props

  return (
    <FormControl isInvalid={!!error}>
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

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
