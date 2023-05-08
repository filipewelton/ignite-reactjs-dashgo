import { Flex, Button, Stack } from '@chakra-ui/react'
import {
  FieldError,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '@components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

const signInSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatório'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema),
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<FieldValues> = async (raw) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const values = raw as SignInFormData
  }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input
            label='E-mail'
            type='email'
            {...register('email')}
            error={errors.email as FieldError}
          />
          <Input
            label='Password'
            type='password'
            {...register('password')}
            error={errors.password as FieldError}
          />
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
