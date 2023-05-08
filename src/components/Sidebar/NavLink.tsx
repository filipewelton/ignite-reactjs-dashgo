import {
  Icon,
  Link,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react'
import { ElementType } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink(props: NavLinkProps) {
  const { icon, children, ...rest } = props
  const { asPath } = useRouter()
  const currentRoute = rest.href || String(rest.as)
  let isActive = false

  if (asPath.startsWith(currentRoute)) isActive = true

  return (
    <Link
      {...rest}
      as={NextLink}
      display='flex'
      alignItems='center'
      color={isActive ? 'pink.400' : 'gray.50'}
    >
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>
        {children}
      </Text>
    </Link>
  )
}
