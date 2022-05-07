import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import "./nav.css";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
import Image0 from "../core/images/far1.jpg";
import Image1 from "../core/images/far2.jpg";
import Image2 from "../core/images/far3.jpg";
// import Image3 from "../core/images/c3.jpg";
<<<<<<< HEAD

const CarouselPage = () => {
  return (
    <MDBContainer
    className="carousel_home"
    >
      <MDBCarousel
      activeItem={1}
      length={3}
=======
import Image0 from "../core/images/c5.jpg";
import Image1 from "../core/images/c1.jpg";
import Image2 from "../core/images/c2.jpg";
import Image3 from "../core/images/c3.jpg";
=======
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0

const CarouselPage = () => {
  return (
    <MDBContainer
    className="carousel_home"
    >
      <MDBCarousel
      activeItem={1}
<<<<<<< HEAD
      length={4}
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
      length={3}
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1" className="carHover">
          <MDBView>
            <img
<<<<<<< HEAD
<<<<<<< HEAD
              className="d-block"
=======
              className="d-block w-100"
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
              className="d-block"
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
              src={Image0}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Fresh Veggies</h3>
            <p>Order now</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2" className="carHover">
          <MDBView>
            <img
<<<<<<< HEAD
<<<<<<< HEAD
              className="d-block"
=======
              className="d-block w-100"
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
              className="d-block"
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
              src={Image1}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Good Vegetables</h3>
            <p>FOR YOUR DELIVERY</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3" className="carHover">
          <MDBView>
            <img
<<<<<<< HEAD
<<<<<<< HEAD
              className="d-block"
=======
              className="d-block w-100"
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
              className="d-block"
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
              src={Image2}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Organic Farming</h3>
            <p>FOR YOUR HEALTH</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
<<<<<<< HEAD
<<<<<<< HEAD
		 {/* <MDBCarouselItem itemId="4" className="carHover">
          <MDBView>
            <img
              className="d-block"
=======
		 <MDBCarouselItem itemId="4" className="carHover">
          <MDBView>
            <img
              className="d-block w-100"
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
		 {/* <MDBCarouselItem itemId="4" className="carHover">
          <MDBView>
            <img
              className="d-block"
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
              src={Image3}
              alt="Fourth slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">KisaanPortal</h3>
            <p>Discover the best veggies</p>
          </MDBCarouselCaption>
<<<<<<< HEAD
<<<<<<< HEAD
        </MDBCarouselItem> */}
=======
        </MDBCarouselItem>
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
        </MDBCarouselItem> */}
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;
