"use client";

import Link from "next/link";
import Image from "next/image";
import "./Header.scss";
import { useState } from "react";
import { CallToAction } from "@/components/shared/index"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header__nav">
        <Link href="/" className="header__logo">
          <Image src="/public/images/logo.png" alt="logo-insideBim" width={120} height={50} />
        </Link>

        <ul className="header__menu">
          <li
            className="header__item header__item--dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link href="#" className="header__link">
              Services
            </Link>
            {isOpen && (
              <div className="header__dropdown">
                <Link
                  href="/services/releves-scans-3d"
                  className="header__dropdown-link"
                >
                  Relevés & Scan 3D
                </Link>
                <Link
                  href="/services/modelisation-bim"
                  className="header__dropdown-link"
                >
                  Modélisation BIM
                </Link>
                <Link
                  href="/services/carnets-de-details"
                  className="header__dropdown-link"
                >
                  Carnets de détails
                </Link>
                <Link
                  href="/services/familles-parametriques"
                  className="header__dropdown-link"
                >
                  Familles paramétriques
                </Link>
                <Link
                  href="/services/synthese-tce"
                  className="header__dropdown-link"
                >
                  Synthèse TCE
                </Link>
              </div>
            )}
          </li>
          <li className="header__item">
            <Link href="/formations" className="header__link">
              Formations
            </Link>
          </li>
          <li className="header__item">
            <Link href="/realisations" className="header__link">
              Réalisations
            </Link>
          </li>
          <li className="header__item">
            <Link href="/actualites" className="header__link">
              Actualités
            </Link>
          </li>
        </ul>
        
        <CallToAction
          text="Contactez nous"
          link="/contact"
        />
      </nav>
    </header>
  );
}
