'use client'

import Link from "next/link"
import Image from 'next/image'
import './Header.css'
import { useState } from "react"

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <nav className="header-nav">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo-insideBim"
            width={120}
            height={50}
          />
        </Link>
        <ul className="header-nav-item">
          <li
            className="dropdown-container"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)} 
          >
            <Link href="#">Services</Link>
            
            {isOpen && (
              <div className="dropdown-menu">
                <Link href="/Services/releves-scans-3d/">Relevés & Scan 3D</Link>
                <Link href="/Services/modelisation-bim/">Modélisation BIM</Link>
                <Link href="/Services/carnets-de-details/">Carnets de détails</Link>
                <Link href="/Services/familles-parametriques/">Familles paramétriques</Link>
                <Link href="/Services/synthese-tce/">Synthèse TCE</Link>
                <Link href="/Services/formations/">Formations</Link>
              </div>
            )}

          </li>
          <li>
            <Link href="/Realisations">Réalisations</Link>
          </li>
          <li>
            <Link href="/Actualites">Actualités</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        <button>Contactez nous</button>
      </nav>
    </header>
  )
}
