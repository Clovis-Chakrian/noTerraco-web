import Head from 'next/head';
import '../styles/globals.css';
import { Space_Grotesk } from 'next/font/google';

export const metadata = {
  title: 'No Terraço Restaurante',
  description: 'Site do restaurante No Terraço, de Carla Chakrian.',
}

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  )
}
