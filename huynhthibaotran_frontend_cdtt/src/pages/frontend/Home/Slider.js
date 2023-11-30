import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
// import SliderServices from '../../../services/SliderServices';
import { Link } from 'react-router-dom';

function Slider() {
    // const [sliders, setSliders] = useState([]);
    // useEffect(function(){
    //   (async function(){
    //     await SliderServices.getByPosition("slidershow")
    //     .then(function(result){
    //         setSliders(result.data.sliders)
    //     });
    //   })();
    // },[])
  return (
    <div className="banner_slider slider_1">
    <div className="slider_active owl-carousel">
      <div
        className="single_slider"
        style={{ backgroundImage: "url(assets/img/slider/slide_1.png)" }}
      >
        <div className="slider_content">
          <div className="slider_content_inner">
            <h1>Women's Fashion</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </p>
            <a href="#">shop now</a>
          </div>
        </div>
      </div>
      <div
        className="single_slider"
        style={{ backgroundImage: "url(assets/img/slider/slider_2.png)" }}
      >
        <div className="slider_content">
          <div className="slider_content_inner">
            <h1>New Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </p>
            <a href="#">shop now</a>
          </div>
        </div>
      </div>
      <div
        className="single_slider"
        style={{ backgroundImage: "url(assets/img/slider/slider_3.png)" }}
      >
        <div className="slider_content">
          <div className="slider_content_inner">
            <h1>Best Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </p>
            <a href="#">shop now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Slider;