import styled from "styled-components";
import { EthiopiaTourPackagesArray } from "../Data/PackagesArray";
import Bale1 from "../assets/bale_1.jpg";
import crop from "../functions/cropString";
const ImageGallery = () => {
  const TopEthiopiaTourPackagesArray = EthiopiaTourPackagesArray.sort(
    () => Math.random() - Math.random()
  ).slice(0, 5);

  const Gallery = styled.div`
      &::after {
        background: url("${Bale1}") no-repeat center;`;
  const cropString = crop;
  return (
    <Gallery className="gallery-container inset-blurr">
      <h2 className="gallery-title">Our Top Ethiopia Tour Packages</h2>
      <div className="ctr-accordion" data-aos="fade-right">
        {TopEthiopiaTourPackagesArray.map((item, index) => {
          return (
            <div className="tab" key={index}>
              <img src={item.image} />
              <p className="sudo-description">{item.title}</p>
              <p className="description">
                {item.title}
                <br />
                <span>{cropString(item.description, 300)}</span>
              </p>
            </div>
          );
        })}
      </div>
    </Gallery>
  );
};

export default ImageGallery;
