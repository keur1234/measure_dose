import './globals.css'
import { ImageProvider } from '@/components/useImageContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <ImageProvider>
      <body className='bg-[#F8F7F7] min-h-screen flex justify-center'>{children}</body>
      </ImageProvider>
    </html>
  )
}
