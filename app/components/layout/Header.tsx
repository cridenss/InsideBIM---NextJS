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
                <Link href="/services/releves-scans-3d/">Relevés & Scan 3D</Link>
                <Link href="/services/modelisation-bim/">Modélisation BIM</Link>
                <Link href="/services/carnets-de-details/">Carnets de détails</Link>
                <Link href="/services/familles-parametriques/">Familles paramétriques</Link>
                <Link href="/services/synthese-tce/">Synthèse TCE</Link>
                <Link href="/services/formations/">Formations</Link>
              </div>
            )}

          </li>
          <li>
            <Link href="/realisations">Réalisations</Link>
          </li>
          <li>
            <Link href="/actualites">Actualités</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button>Contactez nous</button>
      </nav>
    </header>
  )
}
