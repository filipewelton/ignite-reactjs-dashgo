import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import { SideBarNav } from './SidebarNav'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })
  const { isOpen, onClose } = useSidebarDrawer()

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={() => {}}>
        <DrawerOverlay>
          <DrawerContent bg='gray.800' p='4'>
            <DrawerCloseButton mt='6' onClick={onClose} />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <SideBarNav />
    </Box>
  )
}
