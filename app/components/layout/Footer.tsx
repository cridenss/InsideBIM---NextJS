import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="contact">
        <div className="phone">
          <img src="/" alt="" />
          <p>06 98 29 44 70</p>
        </div>
        <div className="mail">
          <img src="/" alt="" />
          <p>contact@insidebim.fr</p>
        </div>
        <div className="social">
          <img src="/" alt="" />
          <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Finsidebim%2Fposts%2F%3FfeedView%3Dall">InsideBIM</a>
        </div>
      </div>
      <div className="title">InsideBIM</div>
      <div className="links">
        <a href="/Services">Services</a>
        <a href="/Realisations">Réalisations</a>
        <a href="/Actualites">Actualités</a>
        <a href="/Contact">Contact</a>
      </div>
    </footer>
  )
}
