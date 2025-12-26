import './styles/globals.css'
import Header from './components/shared/Header/Header'
import Footer from "./components/shared/Footer/Footer"

export const metadata = {
  title: 'InsideBIM - Services BIM Auvergne-Rhône-Alpes',
  description: 'Relevés 3D, modélisation BIM, synthèse et formations Revit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}