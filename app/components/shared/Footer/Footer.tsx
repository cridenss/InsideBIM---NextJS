import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="footer__phone">
          <img src="/" alt="" className="footer__icon" />
          <p className="footer__text">06 98 29 44 70</p>
        </div>
        <div className="footer__mail">
          <img src="/" alt="" className="footer__icon" />
          <p className="footer__text">contact@insidebim.fr</p>
        </div>
        <div className="footer__social">
          <img src="/" alt="" className="footer__icon" />
          <a
            href="https://www.linkedin.com/company/insidebim"
            className="footer__link"
          >
            InsideBIM
          </a>
        </div>
      </div>

      <div className="footer__title">InsideBIM</div>

      <nav className="footer__nav">
        <Link href="/services" className="footer__nav-link">
          Services
        </Link>
        <Link href="/realisations" className="footer__nav-link">
          Réalisations
        </Link>
        <Link href="/actualites" className="footer__nav-link">
          Actualités
        </Link>
        <Link href="/contact" className="footer__nav-link">
          Contact
        </Link>
      </nav>
    </footer>
  );
}
