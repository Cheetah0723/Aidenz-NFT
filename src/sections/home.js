import "./home.css"

import { Container, Row, Col, Button, Image } from "react-bootstrap"

export default function () {
  return (
    <section className="home">
      <Container>
        <Row>
          <Col xs={12} md={6} className="z-index home-content">
            <div>
              <h1>YOUR KEY TO THE</h1>
              <h1>REVELLERS</h1>
              <div className="paragraph-large text-uppercase">
                <span className="color-purple">5555</span>
                <span> unique passes</span>
              </div>
              <Button className="wallet-btn">Connect Wallet</Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="z-index">
            <Image src={"assets/imgs/gif.gif"} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
