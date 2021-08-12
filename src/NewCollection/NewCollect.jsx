import React from "react";
import { Container, Row, Col, CardBody, CardFooter, Card } from "reactstrap";
import sneaker1 from "../images/img4.png";
import sneaker2 from "../images/img1.png";
import sneaker3 from "../images/img2.png";
import sneaker4 from "../images/img3.png";

const NewCollect = () => {
  return (
    <div className="newcollec">
      <Container>
        <Row>
          <Col md="12">
            <p>Straight From Nike</p>
            <h4>New Collection</h4>
          </Col>
          <Col className="cardsArea" lg="6" md="12">
            <Row>
              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneaker1} alt="sneaker" />
                  </CardBody>
                  <CardFooter>
                    <div className="texts">
                      <p>Nike Air Force 1</p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneaker2} alt="sneaker" />
                  </CardBody>
                  <CardFooter>
                    <div className="texts">
                      <p>Nike Air Force 1</p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneaker3} alt="sneaker" />
                  </CardBody>
                  <CardFooter>
                    <div className="texts">
                      <p>Nike Air Force 1</p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="cards" lg="6" md="6">
                <Card>
                  <CardBody>
                    <img src={sneaker2} alt="sneaker" />
                  </CardBody>
                  <CardFooter>
                    <div className="texts">
                      <p>Nike Air Force 1</p>
                      <span>$99</span>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col className="cardsArea2" lg="6" md="12">
            <Card>
              <CardBody>
                <div className="productPrice">
                  <span>SALE -50%</span>
                  <span>$99</span>
                </div>
                <img src={sneaker4} alt="sneaker" />
              </CardBody>
              <CardFooter className="leftCardFooter">
                <h4 className="productName">Nike Air Force 1 Shadow</h4>
                <p className="productBrand">Brand: Nike</p>
              </CardFooter>
            </Card>
          </Col>
                  <Col md="12" className="buttonArea">
                      <a className="exploreButton" href="#">Explore Other Products</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewCollect;
