import React from "react";
import './marble.css';
import { TERRA, CLASSIC, BLACK } from "../../constants";

const MarblePage = () => {
  return (
    <div id="granitePage">

      <div className="graniteHeader">
        <h1>Granite Collection</h1>
        <p>Our granite countertops are made with the highest quality granite quarried in Europe and then engineered into strong, beautiful surfaces at our very own manufacturing facility in Sebring, Florida. Owning and operating our facility allows us to maintain strict quality control. Additionally, we guarantee the quality of our countertops with a Lifetime Limited Warranty. These countertops contain our own proprietary product called ForeverSeal®, which ensures the surfaces are nonporous, stain and scratch-resistant, and, unlike other traditional granite surfaces, will never require sealing. Our granite color palette is constantly evolving and follows industry trends and customer input, so you know you’re getting a broad selection of high quality surfaces that will endure anything life throws at them.

Our granite countertops and mosaic tile surfaces are not only for kitchens. They are perfect for bathrooms and other areas of your home, including flooring, fireplaces and walls. Granite or quartz showers are easier to clean and will maintain their beauty longer than any other surface solution you might be considering. We can also add a gorgeous mosaic tile inlay into your shower to add an element of style and sophistication. Whether it’s a bathroom vanity, tub surround, mosaic feature wall or mosaic tile strip, we will provide the best quality for your money and guarantee it with our warranty. Our kitchen and bathroom remodel process is fast, easy and stress-free, and we will manage the entire project from design through installation. Browse our granite countertop color palette below. If you see something you like, schedule your free in-home consultation today by filling out the form.</p>
      </div>
      
      <div className="showBox">
        <h1>Terra Series</h1>
        <div className="showIcons">
        {TERRA.map((set) => (
          <div className="showCard">
          <div className="showIcon">
            <img src={set.img} alt="" />
          </div>
          <h4>{set.name}</h4>
        </div>
          ))}
        </div>

      </div>

      <div className="showBox">
        <h1>Classic Series</h1>
        <div className="showIcons">
        {CLASSIC.map((set) => (
          <div className="showCard">
          <div className="showIcon">
            <img src={set.img} alt="" />
          </div>
          <h4>{set.name}</h4>
        </div>
          ))}
        </div>
      </div>

      <div className="showBox">
        <h1>Black Series</h1>
        <div className="showIcons">
        {BLACK.map((set) => (
          <div className="showCard">
          <div className="showIcon">
            <img src={set.img} alt="" />
          </div>
          <h4>{set.name}</h4>
        </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default MarblePage