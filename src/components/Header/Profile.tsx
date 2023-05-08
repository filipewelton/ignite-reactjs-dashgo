import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile(props: ProfileProps) {
  const { showProfileData } = props
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Filipe Welton</Text>
          <Text color='gray.300' fontSize='small'>
            filipewelton@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Filipe Welton'
        src='https://avatars.githubusercontent.com/u/52325140?v=4'
      />
    </Flex>
  )
}
