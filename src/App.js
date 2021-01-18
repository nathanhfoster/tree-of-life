import React from "react"
import { connect } from "store"
import { Home } from "views"
import { Footer, TileMap } from "components"
import { Container, Row, Col } from "reactstrap"

const App = ({}) => {
  return (
    <Container className="App" tag="main">
      <Row>
        <Col xs={2}>
          <Home />
        </Col>
        <Col xs={10}>
          <TileMap />
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}

const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps)(App)
