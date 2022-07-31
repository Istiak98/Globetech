import React, { useEffect, useState } from "react";
import "./Card.css";
const Card = () => {
     const [Services, setServices] = useState([]);
     const getData = async () => {
       await fetch("./service.json")
         .then((res) => res.json())
         .then((data) => setServices(data));
     };
     useEffect(() => {
       getData();
     }, []);
  return (
    <div>
      <div class="container">
      <div className="justify-contetnt-center align-items-center">
      <h4 className="service-text text-center">SERVICES</h4>
      <h4 className="service-text text-center2">We provides services to our clients</h4>
      </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          
        {Services.map((service, index) => (
          <div class="col-md-4 col-sm-12 col-lg-4">
            <div class="card m-3">
              <div class="card-image-wrapper">
                <img
                  src={service.image}
                  class="card-img-top img-fluid"
                  alt="..."
                  style={{"width":"470px","height":"340px"}}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{service.title}</h5>
                <p class="card-text text-start">
                  {service.description}
                </p>
                <button href="#" class="btn-more">
                  MORE
                </button>
              </div>
            </div>
          </div>
             ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
