import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify - Clone Web Music Player',
  description: 'Listen to music from spotify clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
          
        </SupabaseProvider>
      </body>
    </html>
  )
}
