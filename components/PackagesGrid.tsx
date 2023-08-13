"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import NoPackages from "./NoPackages";
import Image from "next/image";
interface Props {
  title: string;
  placeholder: string;
  packages: {
    title: string;
    image: string;
    link: string;
  }[];
}
const PackagesGrid = ({ title, placeholder, packages: array }: Props) => {
  const [packages, setPackages] = useState(array);
  const [search, setSearch] = useState("");
  const [textBoxFocus, setTextBoxFocus] = useState(false);
  const handleTextBoxFocus = () => {
    setTextBoxFocus(true);
  };
  const handleTextBoxBlur = () => {
    setTextBoxFocus(false);
  };
  const filterDestinations = (search: string) => {
    const filteredDestinations = array.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setPackages(filteredDestinations);
  };
  return (
    <div className="grid-packages-container">
      <h1 className="grid-packages-title">{title}</h1>
      <div className={`${textBoxFocus ? "focus" : ""} search-container`}>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder={placeholder}
          className="search-box"
          onFocus={handleTextBoxFocus}
          onBlur={handleTextBoxBlur}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              filterDestinations(search.toLowerCase());
            }
          }}
        />
        <BsSearch
          className="search-icon"
          onClick={() => {
            filterDestinations(search.toLowerCase());
          }}
        />
      </div>

      {packages.length !== 0 ? (
        <div className="grid-packages">
          {packages.map((item, index) => {
            return (
              <div className="grid-package" key={index}>
                <div className="grid-image-container">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="grid-package-img"
                  />
                </div>
                <div className="grid-package-description">
                  <h1 className="grid-package-title">{item.title}</h1>
                  <a href={item.link} className="offset grid-package-button">
                    Discover More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <NoPackages />
      )}
    </div>
  );
};

export default PackagesGrid;
