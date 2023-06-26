import './globals.css'
import {Inter} from 'next/font/google'
import {Metadata} from "next";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Home',
  description: 'PED PROJECT NEXT',
}

export default function RootLayout({
children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      <Header/>
      <main className='container'>{children}</main>
      <Footer/>
    </body>
    </html>
  )
}
