import './App.css';
import Introduction from './components/introduction';
import Header from './components/header';
import Button from './components/button';
import Footer from './components/footer';
// state
import React, { useState } from 'react';

function App() {

  // state
  const [getName, setName] = useState("");

  const changeName = () => {
    setName('Selamat Pagi Semua');
  }

  const sekolah = "SMK IDN Boarding School";
  const guru1 = "rodhi";
  const guru2 = "rival";

  // const clicked = () => {
  //   alert("Selamat datang di website ini")
  //   console.log("button diklik")
  // }

  const footer = () => {
    return (
      <div>
        <i>Terima Kasih sudah mengunjungi website kami</i>
        <marquee>SMK IDN Boarding School</marquee>
      </div>
    )
  }
  return (
    <div>
      <Header sekolah={sekolah} />
      <Introduction name={guru1} job="guru XI" introValue={getName} />
      <Introduction name={guru2} job="guru X" introValue={getName}/>
      <Button clicked={changeName} />
      <Footer footer={footer} />
    </div>
  );
}

export default App;
