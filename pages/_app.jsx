import { Inter } from 'next/font/google'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import '../global.css'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
        <Theme>
      <Component {...pageProps} />
      </Theme>
    </main>
  )
}