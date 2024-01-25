import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
import BannerServices from '../../../services/BannerServices';
import { Link } from 'react-router-dom';

function Slider() {
    const [sliders, setSliders] = useState([]);
    useEffect(function(){
      (async function(){
        try{
          const result = await BannerServices.getByPosition("slidershow")
          setSliders(result.banners) 
        }
        catch(error){
          console.log('wait...')
        }
      })();
    },[])
  return (
    <div className="mb-4">
    <div className="">

    <div className='slider'>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          {sliders && sliders.map(function (slider, index) {
            if (index === 0) {
              return (
                <div class="carousel-item active">
                  <img src={urlImage + "banner/" + slider.image} class="d-block w-100" alt={slider.image} />
                </div>
              );
            }
            else {
              return (
                <div class="carousel-item">
                  <img src={urlImage + "banner/" + slider.image} class="d-block w-100" alt={slider.image} />
                </div>
              );
            }
          })}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      {/* <div
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
      </div> */}

    </div>
  </div>
);
}

export default Slider;