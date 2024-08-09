import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import DataTableProvider from "./Contexts/DataTableContext";
import GTIN from "./Pages/MemberPages/GTIN/GTIN";
import { LanguageProvider } from "./Contexts/LanguageContext.jsx";
import MemberLogin from "./Pages/MemberPages/MemberLogin/EmailAddress/MemberLogin.jsx";
import SelectGln from "./Pages/MemberPages/MemberLogin/EmailAddress/SelectGln.jsx";
import SideNav from "./components/Sidebar/SideNav.jsx";
import { useTranslation } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header/Header.jsx";
import HeaderLine from "./components/Header/HeaderLine.jsx";
import NewFooter from "./components/Footer/NewFooter.jsx";
import ListOfRequests from "./Pages/MemberPages/Identify/ListOfRequests/ListOfRequests.jsx";
import ProductDetails from "./Pages/MemberPages/Identify/ListOfRequests/ProductDetails.jsx";
import MyProducts from "./Pages/MemberPages/Identify/MyProducts/MyProducts.jsx";
import ComplianceDashboard from "./Pages/MemberPages/ComplianceDashboard/ComplianceDashboard.jsx";

const queryClient = new QueryClient();

const App = () => {
  
  const { t, i18n } = useTranslation();
  const MainLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideNav = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="main-layout-container">
        <SideNav isOpen={isOpen} toggleSideNav={toggleSideNav} />
        <div
          className={`transition-all duration-300 ${
            isOpen ? `${i18n.language==='ar'?'lg:mr-[300px]':'lg:ml-[300px]'}` : "lg:ml-0"
          } `}
        >
          {children}
        </div>
      </div>
    );
  };

  const UserLayout = () => {
    return (
      <div>
        <div>
          <HeaderLine />
        </div>
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>
        <QueryClientProvider client={queryClient}>
        <main className="mx-auto flex max-w-[1760px] flex-col justify-center">
          <Outlet /> {/* Nested routes will render here */}
        </main>
        </QueryClientProvider>
        {/* <Footer /> */}
        <NewFooter />
      </div>
    );
  };

 
  return (
    <>
      <LanguageProvider>
        <DataTableProvider>
          <div>
            <BrowserRouter>
              <Routes>
                <Route element={<UserLayout />}>
                  <Route path="/" element={<MemberLogin />} />
                  <Route path="/select-gln" element={<SelectGln />} />

                </Route>
              </Routes>
              <Routes>
                {/* Member Routes */}
                <Route
                  path="/member/*"
                  element={
                    <MainLayout>
                      <Routes>
                        <Route
                          path="dashboard"
                          element={<ComplianceDashboard />}
                        />
                        <Route path="gtin" element={<GTIN />} />
                        <Route path="list-of-requests" element={<ListOfRequests />} />
                        <Route path="product-details" element={<ProductDetails />} />
                        <Route path="my-products" element={<MyProducts />} />

                      </Routes>
                    </MainLayout>
                  }
                />
              </Routes>
            </BrowserRouter>
          </div>
        </DataTableProvider>
      </LanguageProvider>
    </>
  );
};

export default App;
