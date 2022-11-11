import NavBar from './components/NavBar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          Linkeys - created by NK
        </footer>
      </body>
    </html>
  )
}
