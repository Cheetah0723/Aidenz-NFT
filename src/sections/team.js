import "./team.css"
import gif from "../imgs/gif.gif"
import { Container, Row, Col, Button, Image } from "react-bootstrap"
export default function () {
  const openText = (e) => {
    const eventDiv = Array.from(e.target.parentElement.children)[2]
    if (Array.from(eventDiv.classList).includes("hide")) {
      e.target.children[0].classList.add("highlight-number")
      eventDiv.classList.remove("hide")
    } else {
      e.target.children[0].classList.remove("highlight-number")
      eventDiv.classList.add("hide")
    }
  }
  return (
    <section className="team">
      <Container>
        <Row>
          <Col xs={12} md={6} className="z-index">
            <h2>ROADMAP</h2>
            <div className="content-lists">
              <div className="roadmap-content" onClick={(e) => openText(e)}>
                <Button style={{ zIndex: -10 }}>01</Button>
                <p style={{ zIndex: -10 }}>PASSES ARE AVAILABLE</p>
              </div>
              <div className="roadmap-horizontal-separator" />

              <p className="paragraph-large hide">
                Welcome, Agents. You are now officially enlisted as a founding
                supporter of the Nanoverse. You stand at the start of something
                great. Your mysterious passes are ready to take you places you
                cannot imagine.
              </p>
            </div>
            <div className="content-lists">
              <div className="roadmap-content" onClick={(e) => openText(e)}>
                <Button style={{ zIndex: -10 }}>02</Button>
                <p style={{ zIndex: -10 }}>
                  NANOPASSES REVEALED & COMMUNITY VAULT COMES ONLINE
                </p>
              </div>
              <div className="roadmap-horizontal-separator" />

              <p className="paragraph-large hide">
                Once Phase 1 is completed, the NANOPASSES will be revealed and
                the community vault will be set up.
              </p>
            </div>
            <div className="content-lists">
              <div className="roadmap-content" onClick={(e) => openText(e)}>
                <Button style={{ zIndex: -10 }}>03</Button>
                <p style={{ zIndex: -10 }}>
                  WEEKLY [BLACK BOXES] START DROPPING
                </p>
              </div>
              <div className="roadmap-horizontal-separator" />

              <p className="paragraph-large hide">
                Every week, passes will enable you to plunder{" "}
                <span className="highlight">[BLACK BOXES]</span> from the
                Nanoverse. Boxes that are uncorrupted could theoretically
                contain a diverse range of goods. Items such as weapons and
                outfits may very well start showing up in the future…
              </p>
            </div>
            <div className="content-lists">
              <div className="roadmap-content" onClick={(e) => openText(e)}>
                <Button style={{ zIndex: -10 }}>04</Button>
                <p style={{ zIndex: -10 }}>UNVEILING OF PROJECT SUBNET</p>
              </div>
              <div className="roadmap-horizontal-separator" />

              <p className="paragraph-large hide">
                Rei and Rui are physical manifestations of data lifeforms. They
                are highly intelligent and firmly allied with us. They were the
                first, but they will not be the last. There will be more of
                their kin outside our world and perhaps in time they too shall
                reach out to us. We stand at the dawn of a new era.
              </p>
            </div>
            <div className="content-lists">
              <div className="roadmap-content" onClick={(e) => openText(e)}>
                <Button style={{ zIndex: -10 }}>05</Button>
                <p style={{ zIndex: -10 }}>PARTNERSHIPS WITH OTHER NFT DROPS</p>
              </div>
              <div className="roadmap-horizontal-separator" />

              <p className="paragraph-large hide">
                Our founders are early adopters in the crypto space. We are in
                preliminary talks with multiple alpha groups and founders that
                we think are winners. Similar to{" "}
                <span className="color-purple">Project SUBNET</span>, our pass
                holders will be given exclusive access to those projects.
              </p>
            </div>
            <div className="content-lists">
              <div className="roadmap-content" onClick={(e) => openText(e)}>
                <Button style={{ zIndex: -10 }}>06</Button>
                <p style={{ zIndex: -10 }}>
                  LAUNCH ADDITIONAL LINES OF BLACK BOXES
                </p>
              </div>
              <div className="roadmap-horizontal-separator" />

              <p className="paragraph-large hide">
                We plan to launch several additional series of premium perpetual
                Black Box NFT’s in the future. Current pass holders will be
                given priority access to these drops as well.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="z-index">
            <Image src={gif} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
