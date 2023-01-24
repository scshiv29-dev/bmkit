import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <MantineProvider  theme={{ colorScheme: 'dark' }}>
<SessionProvider session={pageProps.session}>
  <Component {...pageProps} />
</SessionProvider>
  </MantineProvider>
  )
}
