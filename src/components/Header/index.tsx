import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav'
import { Search } from './Search'
import { Logo } from './Logo'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const isWideVersion =
    useBreakpointValue({
      base: false,
      lg: true,
    }) ?? false
  const { onOpen } = useSidebarDrawer()

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          aria-label={'Open navigation'}
          onClick={onOpen}
          mr='2'
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <Search />}

      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
