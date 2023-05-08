import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ReactNode, createContext, useContext, useEffect } from 'react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawer = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawer)

export function SidebarDrawerProvider(props: SidebarDrawerProviderProps) {
  const { children } = props
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => disclosure.onClose(), [disclosure, router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
