import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from 'react-hot-toast';
import Loader from "../Loader/Loader.jsx";


const Navigation = lazy(() => import("../Navigation/Navigation"))
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"))
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage.jsx"))
const CatalogItemPage = lazy(() => import("../../pages/CatalogItemPage/CatalogItemPage.jsx"))
const Reviews = lazy(() => import("../Reviews/Reviews.jsx"))
const Features = lazy(() => import("../Features/Features.jsx"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"))

export default function App() {

  return (
    <div>
      <Toaster
      position="top-center"
      reverseOrder={false}
    />
      <Navigation />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogItemPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </div>
  )
}
