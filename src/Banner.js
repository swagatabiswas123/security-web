import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
          <section class="banner">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://mm.media-mccoymart.com/post/wp-content/uploads/2021/10/Dome-Camera.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://www.ipcctv.my/wp-content/uploads/2022/04/dahua-wired-ip-cctv-8-channel.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://www.itgallery.lk/wp-content/uploads/2020/04/hik-banner-2.png" class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

       </section>

    </div>
  )
}

export default Banner