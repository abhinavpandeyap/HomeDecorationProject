//import SimpleImageSlider from "react-simple-image-slider";
import Carousel from "react-bootstrap/Carousel";


const Sliders = () => {
  return (
    <div>
      <div className="row d-flex" style={{ height: "20%" }}>
          <div className="col-sm-12 col-md-12">
            <Carousel style={{ width: "100%" }}>
              <Carousel.Item interval={2000}>
                <img
                  className="d-flex w-100"
                  src="https://www.woodenstreet.com/images/info-banner/decor-banner.jpg?v=19"
                  alt="First slide"
                  style={{ height: "60vh" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="https://www.woodenstreet.com/images/wall-art/banner-d1.jpg?v=19"
                  alt="Second slide"
                  style={{ height: "60vh" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="https://www.woodenstreet.com/images/home-decor/banner-d5.jpg?v=19"
                  alt="Third slide"
                  style={{ height: "60vh" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

    </div>
  );
};

export default Sliders;
