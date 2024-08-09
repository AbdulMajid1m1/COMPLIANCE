import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../../Images/gs1logowhite.png";
import { RxHamburgerMenu } from "react-icons/rx";
import validation from "../../Images/validation.png";
import GTINmanagement from "../../Images/GTINmanagement.png";
import GLNmanagement from "../../Images/GLNmanagement.png";
import digitalLink from "../../Images/digitalLink.png";
import MyNPCservices from "../../Images/MyNPCservices.png";
import ListofRequest from "../../Images/ListofRequest.png";
import logout from "../../Images/logout.png";

function SideNav({ isOpen, toggleSideNav }) {

  return (
    <>
      <div className="bg-[#D0F2F3] p-0">
        <div className="body-content">
          <div className="relative lg:block navbar-menu">
            <nav
              className={`fixed top-0 transition-all bg-[#D0F2F3] lg:mt-0 mt-12 bottom-0 flex flex-col shadow bg-primary-sidebar overflow-hidden z-50 ${
                isOpen ? "w-[300px]" : "w-0"
              } left-0`}
              id="sidenav"
            >
              <div className="flex justify-center items-center w-full px-4 pt-3 pb-3 border-b border-gray-300">
                <Link to="/member/dashboard">
                  <img
                    src={Images}
                    alt="logo"
                    className="object-contain h-24"
                  />
                </Link>
              </div>

              <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                <ul className="mb-8 text-sm">
                  <li>
                    <Link
                      to="/member/dashboard"
                      className="flex items-center px-3 py-0 text-gray-700 group hover:text-gray-600 hover:bg-gray-100 flex-row"
                    >
                      <span className="drop-shadow-lg flex h-14 w-16 items-center justify-center rounded-lg bg-D2D180 bg-center text-center xl:p-2.5 mr-2">
                        <img
                          src={validation}
                          alt="logo"
                          className="w-7 h-7 object-cover"
                        />
                      </span>
                      <span className="font-sans font-medium text-base my-auto -ml-3">
                        Dashboard
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      // to="/member/gtin"
                      className="flex items-center px-3 py-0 text-gray-700 group hover:text-gray-600 hover:bg-gray-100 flex-row"
                    >
                      <span className="drop-shadow-lg flex h-14 w-16 items-center justify-center rounded-lg bg-D2D180 bg-center text-center xl:p-2.5 mr-2">
                        <img
                          src={GLNmanagement}
                          alt="logo"
                          className="w-7 h-7 object-cover"
                        />
                      </span>
                      <span className="font-sans font-medium text-base my-auto -ml-3">
                        Codifications
                      </span>
                    </Link>
                  </li>
                    <li>
                      <Link
                        to="/member/gln"
                        className="flex items-center py-0 text-gray-700 rounded hover:bg-gray-100 pl-7 pr-7 justify-start"
                      >
                        <div className="flex justify-center items-center h-14 gap-3 flex-row">
                          <img
                            src={MyNPCservices}
                            alt="logo"
                            className="w-7 h-7 object-cover"
                          />
                          <span className="text-base font-medium font-sans text-start">
                            NPC Certifications
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/member/gln"
                        className="flex items-center py-0 text-gray-700 rounded hover:bg-gray-100 pl-7 pr-7 justify-start"
                      >
                        <div className="flex justify-center items-center h-14 gap-3 flex-row">
                          <img
                            src={ListofRequest}
                            alt="logo"
                            className="w-7 h-7 object-cover"
                          />
                          <span className="text-base font-medium font-sans text-start">
                            Frontend
                          </span>
                        </div>
                      </Link>
                    </li>

                  <li>
                    <Link
                      to="/"
                      className="flex items-center px-3 py-0 text-gray-700 group hover:text-gray-600 hover:bg-gray-100 flex-row"
                    >
                      <span className="drop-shadow-lg flex h-16 w-16 items-center justify-center rounded-lg bg-D2D180 bg-center text-center xl:p-2.5 mr-2">
                        <img
                          src={logout}
                          alt="logo"
                          className="w-7 h-7 object-cover"
                        />
                      </span>
                      <span className="text-base font-medium font-sans -ml-3">
                        Log-out
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div
          className={`mx-auto transition-all content-wrapper ${
            isOpen ? "lg:ml-[300px]" : "lg:ml-0"
          }`}
          id="dash"
        >
          <section className="sticky top-0 z-20 px-3 py-0 bg-[#1F0567] shadow text-gray-100 lg:px-5">
            <nav className="relative">
              <div className="flex items-center justify-start">
                <button onClick={toggleSideNav} className="px-2 py-3">
                  <RxHamburgerMenu className="text-white h-auto w-6" />
                </button>
                <p className="text-white font-sans">COMPLIANCE</p>
              </div>
            </nav>
          </section>
        </div>
      </div>
    </>
  );
}

export default SideNav;
