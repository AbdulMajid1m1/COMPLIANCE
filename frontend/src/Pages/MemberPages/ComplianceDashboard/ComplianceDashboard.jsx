import React, { useEffect, useState } from "react";
import assetcapture from "../../../Images/capture.png";
import assetprinting from "../../../Images/identify.png";
import assetverified from "../../../Images/validation.png";
import { gtinReportsColumns } from "../../../utils/datatablesource";
import DashboardTable from "../../../components/dashboardTable/DashboardTable";
import { useTranslation } from "react-i18next";

const ComplianceDashboard = () => {
  const { t, i18n } = useTranslation();
  const [newassetData, setNewAssetData] = useState([]);
  const [PrintingAssetData, setPrintingAssetData] = useState([]);
  const [allVerifiedAssetsList, setAllVerifiedAssetsList] = useState([]);

  useEffect(() => {
    // auto scroll to bottom
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  return (
    <div>
      <style>
        {`
        .responsive-text {
              font-size: 1.3rem;
            }

          @media (max-width: 1000px) {
            .responsive-text {
              font-size: 14px;
            }
          }
        `}
      </style>
      <div
        className={`p-0 h-full ${
          i18n.language === "ar" ? "sm:mr-0" : "sm:ml-0"
        }`}
      >
        <div className="h-screen w-full">
          {/* <div class="min-h-screen h-full ml-14 mt-36 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 md:ml-64 flex flex-col justify-center"> */}
          <div class="h-auto flex flex-col justify-center">
            {/* <!-- Statistics Cards --> */}

            <div class="grid grid-cols-1 sm:grid-cols-3 p-4 gap-4">
              <div
                className={`bg-gray-50 shadow-lg cursor-pointer rounded-md flex items-center gap-3 p-3 border-b-4 border-primary2 font-medium group ${
                  i18n.language === "ar" ? "direction-rtl" : "direction-ltr"
                }`}
                style={{ flexWrap: "wrap" }}
              >
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-45 sm:w-11 sm:h-11 lg:w-14 lg:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14">
                  <img
                    src={assetcapture}
                    className="h-5 w-auto sm:h-8 sm:w-auto"
                    alt=""
                  />
                </div>
                <div
                  className="text-right responsive-text text-secondary"
                  style={{
                    display: "flex",
                    flexDirection: "rew",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <p
                    className=""
                    // don't break words on small screen
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {t("Codifications")}
                  </p>
                  <span>
                    {newassetData.length > 0 ? newassetData.length : null}
                  </span>
                </div>
              </div>

              <div
                className={`bg-gray-50 shadow-lg cursor-pointer rounded-md flex items-center gap-3 p-3 border-b-4 border-primary2 font-medium group ${
                  i18n.language === "ar" ? "direction-rtl" : "direction-ltr"
                }`}
                style={{ flexWrap: "wrap" }}
              >
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-45 sm:w-11 sm:h-11 lg:w-14 lg:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14">
                  <img
                    src={assetprinting}
                    className="h-5 w-auto sm:h-8 sm:w-auto"
                    alt=""
                  />
                </div>
                <div
                  className="text-right responsive-text text-secondary"
                  style={{
                    display: "flex",
                    flexDirection: "rew",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <p
                    className=""
                    // don't break words on small screen
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {t("NPC Certifications")}
                  </p>
                  <span>
                    {PrintingAssetData.length > 0
                      ? PrintingAssetData.length
                      : null}
                  </span>
                </div>
              </div>

              <div
                className={`bg-gray-50 shadow-lg cursor-pointer rounded-md flex items-center gap-3 p-3 border-b-4 border-primary2 font-medium group ${
                  i18n.language === "ar" ? "direction-rtl" : "direction-ltr"
                }`}
                style={{ flexWrap: "wrap" }}
              >
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-45 sm:w-11 sm:h-11 lg:w-14 lg:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14">
                  <img
                    src={assetverified}
                    className="h-5 w-auto sm:h-8 sm:w-auto"
                    alt=""
                  />
                </div>
                <div
                  className="text-right responsive-text text-secondary"
                  style={{
                    display: "flex",
                    flexDirection: "rew",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <p
                    className=""
                    // don't break words on small screen
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {t("Frontend")}
                  </p>
                  <span>
                    {allVerifiedAssetsList.length > 0
                      ? allVerifiedAssetsList.length
                      : null}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 bg-gradient-to-r from-[#D0F2F3]">
              {/* <!-- Social Traffic --> */}
              <div className="relative flex flex-col min-w-0 mb-4 md:mb-0 break-words bg-gray-50  w-full shadow-lg rounded">
                <DashboardTable
                  data={newassetData}
                  columnsName={gtinReportsColumns(t)}
                  UniqueId="newTagsId"
                  secondaryColor="secondary"
                  title={t("Codifications")}
                />
              </div>
              {/* <!-- ./Social Traffic --> */}

              {/* <!-- Social Traffic2 --> */}
              <div className="relative flex flex-col min-w-0 mb-4 md:mb-0 break-words bg-gray-50 w-full shadow-lg rounded">
                <DashboardTable
                  data={PrintingAssetData}
                  columnsName={gtinReportsColumns(t)}
                  secondaryColor="secondary"
                  UniqueId="assetPrintingId"
                  title={t("NPC Certifications")}
                />
              </div>
              {/* <!-- ./Social Traffic --> */}

              {/* <!-- Recent Activities --> */}
              <div className="relative flex flex-col min-w-0 break-words bg-gray-50  w-full shadow-lg rounded md:col-span-2">
                <DashboardTable
                  data={allVerifiedAssetsList}
                  columnsName={gtinReportsColumns(t)}
                  secondaryColor="secondary"
                  UniqueId="newTagsId"
                  title={t("Frontend")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceDashboard;
