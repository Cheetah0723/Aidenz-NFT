import "./roadmap.css"
import gif from "../imgs/gif.gif"
import { Container, Row, Col, Button, Image } from "react-bootstrap"

export default function () {
  return (
    <section className="roadmap">
      <Container>
        <Row>
          <Col xs={12} md={6} className="z-index">
            <h2>ROADMAP</h2>
            <div className="roadmap-content">
              <Button>01</Button>
              <p>PASSES ARE AVAILABLE</p>
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
