import React, { useState } from "react";
import listrequst from "../../../../Images/listrequst.png";
import { useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ListOfRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Sample data for requests
  const requests = Array.from({ length: 30 }, (_, index) => ({
    id: index + 12345,
    name: `Request #${index + 12345}`,
  }));

  // Filter requests based on the search term
  const filteredRequests = requests.filter((request) =>
    request.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isMemberGpcPopUpVisible, setIsMemberGpcPopUpVisible] = useState(false);

  const handleMemberGpcPopUp = () => {
    setIsMemberGpcPopUpVisible(true);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 shadow-md">
        <h2 className="text-xl font-sans font-semibold text-secondary mb-4">
          List of Request
        </h2>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="relative flex items-center border rounded shadow focus-within:ring focus-within:ring-blue-300 sm:w-80">
            <input
              type="text"
              className="px-4 py-2 pr-10 rounded focus:outline-none w-full"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1117.65 6.65a7.5 7.5 0 01-5.3 10.1z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid of Requests */}
        <div className="grid 2xl:grid-cols-8 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
          {filteredRequests.map((request) => (
            <div
              key={request.id}
              // onClick={() => navigate(`/member/product-details`)}
              onClick={handleMemberGpcPopUp}
              className="flex flex-col items-center border border-[#71BAEF] rounded-lg p-4 shadow-xl hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={listrequst}
                alt={request.name}
                className="w-36 h-36 mb-4 object-contain"
              />
              <p className="text-center font-normal font-sans text-secondary">
                {request.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {isMemberGpcPopUpVisible && (
        <ProductDetails
          isVisible={isMemberGpcPopUpVisible}
          setVisibility={setIsMemberGpcPopUpVisible}
        />
      )}
    </div>
  );
};

export default ListOfRequests;
