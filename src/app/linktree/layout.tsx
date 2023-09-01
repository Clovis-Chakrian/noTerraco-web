export const metadata = {
  title: 'No Terraço Restaurante | Linktree',
  description: 'Linktree do restaurante No Terraço, de Carla Chakrian.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
