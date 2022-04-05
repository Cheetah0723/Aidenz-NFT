import "./team.css"
import { useEffect, useState, useRef } from "react"

import { Container, Row, Col, Button, Image } from "react-bootstrap"

const Team = () => {
  const text = [
    "The founder of this project, he is the stoic and somber glue that holds the NANOPASS family together. Leaning on his wealth of experience as Managing Director of many successful IRL ventures, he leads the charge in executing our ambitious roadmap and build NANOPASS into the next bluechip NFT project.",
    "Fearless Leader and Art Director, champion of all things aesthetic. She has garnered praise for her unyielding attention to detail and artistic style. Her impressive team has worked on massively successful games such as Valorant, and like every good leader, Rui is nothing without the talented artists behind her.",
    "The Queen of Ramen, leader of the Simps. She plans to dominate the Nanoverse with her army of Ramen lovers. As a community leader, she engages with everyone, gives out free Ramen, and abuses her Whitelist distribution authority. She is a Head Marketer at a financial services conglomerate and an early adopter of NFTs & Crypto. Her strategy? Ape first, understand later.",
    "The brains, the brawn, the hidden pillar behind NANOPASS. With over 10 years experience in blockchain dev, he reads only in code.",
    "Lead Marketer who has $0 budget – trying to do the impossible. She often complains to Rei about how limited the marketing budget is. She is a funds management analyst and ex-streamer of LoL and Valorant. Spent most of her year studying for CFA until a 3-month lockdown happened and the exam became non-existent. Now she’s a full time NFT aper.",
  ]
  const imgSrc = [
    "assets/imgs/1.jpg",
    "assets/imgs/1.png",
    "assets/imgs/2.png",
    "assets/imgs/3.png",
    "assets/imgs/4.gif",
  ]
  const membername = ["Aidenz", "Aidenz", "Aidenz", "Iwamoto Yuki", "Marketer"]

  const name = useRef()
  const description = useRef()
  const [imgURL, setImgURL] = useState("assets/imgs/1.jpg")
  const admin = (idx) => {
    description.current.innerText = text[idx]
    name.current.innerText = membername[idx]
    setImgURL(imgSrc[idx])
  }
  useEffect(() => {
    description.current.innerText = text[0]
    name.current.innerText = membername[0]
  }, [])
  useEffect(() => {})
  return (
    <section className="team">
      <Container>
        <Row>
          <h2>TEAM</h2>
          <p className="team-title">WHO ARE WE?</p>
          <Col xs={12} md={6} className="z-index">
            <div className="member-pic">
              <Image src={imgURL} fluid />
              <p className="member-name" ref={name} />
            </div>
          </Col>
          <Col xs={12} md={6} className="z-index">
            <div className="content-lists">
              <button className="member-name-btn" onClick={() => admin(0)}>
                AGENT AIDENZ
              </button>
              <button className="member-name-btn" onClick={() => admin(1)}>
                AGENT AIDENZ
              </button>
              <button className="member-name-btn" onClick={() => admin(2)}>
                AGENT AIDENZ
              </button>
              <button className="member-name-btn" onClick={() => admin(3)}>
                DEV YUKI
              </button>
              <button className="member-name-btn" onClick={() => admin(4)}>
                MARKETER
              </button>

              <p className="member-content" ref={description}></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Team
