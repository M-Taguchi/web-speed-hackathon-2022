import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../../components/navs/Footer";
import { Header } from "../../components/navs/Header/Header";

export const CommonLayout = () => {
  return (
    <div>
      <Header />

      <main style={{ minHeight: "100vh" }}>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};
