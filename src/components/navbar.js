import { AiOutlineTwitter } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"

import "./navbar.css"

export default function () {
  return (
    <header>
      <a className="logo" href="/">
        <img src={"assets/imgs/logo.png"} />
      </a>
      <div className="headerMenu">
        <a className="headerMenu-btn kasumi" href="/">
          Home
        </a>
        <a className="headerMenu-btn kasumi" href="/">
          Roadmap
        </a>
        <a className="headerMenu-btn kasumi" href="/">
          About
        </a>
        <a className="headerMenu-btn kasumi" href="/">
          Faq
        </a>
        <a className="headerMenu-btn kasumi" href="/">
          Team
        </a>
        <a className="headerMenu-btn kasumi" href="/">
          Gallery
        </a>
      </div>
      <div className="social-link">
        <a className="social-btn">
          <AiOutlineTwitter />
        </a>
        <a className="social-btn">
          <FaDiscord />
        </a>
        <a className="social-btn">
          <AiOutlineTwitter />
        </a>
        <button className="menu-link"></button>
      </div>
    </header>
  )
}
