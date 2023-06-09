import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  FieldError,
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form'

import { Input } from '@components/Form/Input'
import { Header } from '@components/Header'
import { Sidebar } from '@components/Sidebar'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatório')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf(['', yup.ref('password')], 'As senhas devem ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })
  const { errors } = formState
  const handleCreateUser: SubmitHandler<FieldValues> = async (values) => {
    new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='lg' fontWeight='normal'>
            Criar usuário
          </Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                label='Nome completo'
                {...register('name')}
                error={errors.name as FieldError}
              />
              <Input
                type='email'
                label='E-mail'
                {...register('email')}
                error={errors.email as FieldError}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                type='password'
                label='Senha'
                {...register('password')}
                error={errors.password as FieldError}
              />
              <Input
                type='password'
                label='Confirmação da senha'
                {...register('password_confirmation')}
                error={errors.password_confirmation as FieldError}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Button colorScheme='whiteAlpha' as={NextLink} href='/users'>
                Cancel
              </Button>
              <Button
                type='submit'
                isLoading={formState.isSubmitting}
                colorScheme='pink'
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
