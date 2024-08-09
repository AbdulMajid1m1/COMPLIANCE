import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import image1 from "../../../../Images/productsdetails/image1.png";
import image2 from "../../../../Images/productsdetails/image2.png";
import image3 from "../../../../Images/productsdetails/image3.png";
import image4 from "../../../../Images/productsdetails/image4.png";
import "./ProductDetails.css";

const ProductDetails = ({ isVisible, setVisibility }) => {
  const { t, i18n } = useTranslation();

  // List of images
  const images = [
    { src: image1, alt: "Shoe 1" },
    { src: image2, alt: "Shoe 2" },
    { src: image3, alt: "Shoe 3" },
    { src: image4, alt: "Shoe 4" },
    { src: image1, alt: "Shoe 5" },
  ];

  // State to store the index of the currently selected image
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Handler to change the main image
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    // auto scroll to bottom
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const closePopUp = () => {
    setVisibility(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="popup-overlay z-50">
          <div className="popup-container h-auto sm:w-[90%] w-full">
            <div className="w-full"  style={{ maxHeight: "90vh", overflowY: "auto" }}>
              <div className="flex justify-end w-full">
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={closePopUp}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Top Header Section */}
              <div className="flex justify-center items-center mb-4 mt-4">
                <div
                  className={`h-24 w-[92%] z-10 bg-secondary text-white flex flex-col justify-center items-start shadow-xl rounded-md px-8 ${
                    i18n.language === "ar" ? "justify-end" : "justify-start"
                  } border border-secondary`}
                >
                  <p className="text-lg font-sans font-semibold">
                    Complete Data
                  </p>
                  <p className="font-sans text-base">
                    This number is registered to company: : testing sample
                    company
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div
                  className={`h-auto w-[97%] bg-[#DDF3F6] rounded-md flex flex-col shadow-xl -mt-10 sm:px-10 px-4 py-8`}
                >
                  <form className="flex flex-col gap-4">
                    {/* Product Name */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0 text-secondary">
                        <span className="ml-1 mb-2">
                          {" "}
                          Product Name [English]
                        </span>
                        <input
                          type="text"
                          placeholder="Enter Product Name[English]"
                          className="p-2 pl-4 border rounded-full text-secondary placeholder:text-secondary"
                        />
                      </label>
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2">
                          {" "}
                          Product Name [Arabic]{" "}
                        </span>
                        <input
                          type="text"
                          placeholder="Enter Product Name[Arabic]"
                          className="p-2 pl-4 border rounded-full text-secondary placeholder:text-secondary"
                        />
                      </label>
                    </div>

                    {/* Brand Name and GPC */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2">
                          {" "}
                          Brand Name [English / Arabic]{" "}
                        </span>
                        <select className="p-2 border rounded-full text-secondary placeholder:text-secondary">
                          <option>Enter Brand Name</option>
                        </select>
                      </label>
                      <div className="flex flex-col w-full md:w-[48%]">
                        <div className="flex items-center gap-4">
                          <span className="text-gray-700 font-medium ml-1">
                            GPC (Global Product Classification)
                          </span>
                          <label className="flex items-center gap-1">
                            <input type="checkbox" className="form-checkbox " />
                            <span>Add GPC by myself</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <select className="p-2 border rounded-full text-secondary placeholder:text-secondary w-full">
                            <option>Select GPC</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Unit Code and Size */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2"> Unit Code </span>
                        <select className="p-2 border rounded-full text-secondary placeholder:text-secondary">
                          <option>Enter Unit code</option>
                        </select>
                      </label>
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2"> Size </span>
                        <input
                          type="text"
                          placeholder="Enter size"
                          className="p-2 border rounded-full text-secondary placeholder:text-secondary"
                        />
                      </label>
                    </div>

                    {/* Origin and Country of Sale */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2"> Origin </span>
                        <select className="p-2 border rounded-full text-secondary placeholder:text-secondary">
                          <option>Select origin</option>
                        </select>
                      </label>
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2"> Country of Sale </span>
                        <select className="p-2 border rounded-full text-secondary placeholder:text-secondary">
                          <option>Select country</option>
                        </select>
                      </label>
                    </div>
                  </form>
                </div>
              </div>

              {/* Second Content */}
              <div className="flex justify-center items-center">
                <div
                  className={`h-auto w-[97%] bg-[#DDF3F6] rounded-md flex flex-col shadow-xl mt-6 mb-6 sm:px-10 px-4 py-8`}
                >
                  <form className="flex flex-col gap-4">
                    {/* Product Description Language */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2">
                          {" "}
                          Product Description Language{" "}
                        </span>
                        <select className="p-2 border rounded-full text-secondary placeholder:text-secondary">
                          <option>Enter Product description language</option>
                        </select>
                      </label>
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2"> Product Type </span>
                        <select className="p-2 border rounded-full text-secondary placeholder:text-secondary">
                          <option>Enter Product Type</option>
                        </select>
                      </label>
                    </div>

                    {/* Package Type and Product URL */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2"> Package Type </span>
                        <select className="p-2 border rounded-full text-secondary placeholder:text-secondary">
                          <option>Select package type</option>
                        </select>
                      </label>
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2"> Product URL </span>
                        <input
                          type="url"
                          placeholder="Enter URL"
                          className="p-2 border rounded-full text-secondary placeholder:text-secondary"
                        />
                      </label>
                    </div>

                    {/* HS-Code */}
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2">HS-Code</span>
                        <select className="p-2 border rounded-full text-secondary placeholder:text-secondary w-full">
                          <option>Product Name[English]</option>
                        </select>
                        <label className="flex items-center gap-1 mt-2">
                          <input type="checkbox" className="form-checkbox" />
                          <span>Add HS-Code by myself</span>
                        </label>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2">
                          {" "}
                          Description [English]{" "}
                        </span>
                        <input
                          placeholder="Automatic"
                          className="p-2 pl-4 border rounded-full text-secondary placeholder:text-secondary"
                        />
                      </label>
                      <label className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
                        <span className="ml-1 mb-2">
                          {" "}
                          Description [Arabic]{" "}
                        </span>
                        <input
                          placeholder="Automatic"
                          className="p-2 pl-4 border rounded-full text-secondary placeholder:text-secondary"
                        />
                      </label>
                    </div>
                  </form>
                </div>
              </div>

              {/* Thumbnil Images */}
              <div className="flex justify-center items-center">
                <div
                  className={`h-auto w-[97%] bg-[#DDF3F6] rounded-md flex flex-col shadow-xl mb-6 p-10`}
                >
                  {/* Title */}
                  <h2 className="text-blue-900 font-semibold mb-4">
                    Insert & Select Image of the Item
                  </h2>

                  {/* Image Gallery */}
                  <div className="flex flex-row">
                    {/* Thumbnails */}
                    <div className="flex flex-col justify-center items-center space-y-2">
                      {images.map((image, index) => (
                        <img
                          key={index}
                          src={image.src}
                          alt={image.alt}
                          className={`w-16 h-16 rounded-md cursor-pointer border-2 ${
                            selectedImageIndex === index
                              ? "border-blue-500"
                              : "border-transparent"
                          }`}
                          onClick={() => handleThumbnailClick(index)}
                        />
                      ))}
                    </div>

                    {/* Main Image */}
                    <div className="ml-8">
                      <img
                        src={images[selectedImageIndex].src}
                        alt={images[selectedImageIndex].alt}
                        className="w-96 h-auto rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
