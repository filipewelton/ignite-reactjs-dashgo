import { Flex, Button, Stack } from '@chakra-ui/react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '@components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

export default function Home() {
  const { register, handleSubmit, formState } = useForm()

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
          <Input label='E-mail' type='email' {...register('email')} />
          <Input label='Password' type='password' {...register('password')} />
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
