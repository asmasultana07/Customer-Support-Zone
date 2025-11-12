import { use, useState } from "react";
import { Suspense } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Cards from "./components/cards/Cards";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Container from "./components/container/Container";



// const cardsPromise = fetch('./tickets-data.json').then(res => res.json())


function App() {
  const [progressCount, setProgressCount] = useState(0);
  const [resolveCount, setResolveCount] = useState(0);

  const cardsPromise = fetch('./tickets-data.json').then(res => res.json())
// const cardData = use(cardsPromise);

  return (
    <>
      <Navbar></Navbar>
      <Banner
        progressCount={progressCount}
        resolveCount={resolveCount}
      ></Banner>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Suspense fallback={<h3>Cards is loading...</h3>}>
      <Container 
                cardsPromise={cardsPromise}
                progressCount={progressCount}
                setProgressCount={setProgressCount}
                
      ></Container>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
