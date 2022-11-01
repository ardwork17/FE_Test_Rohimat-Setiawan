import bg1 from './Assets/BGPage1.jpg';
import bg2 from './Assets/BGPage2.jpg';
import fl1 from './Assets/Flower4.png';
import fl2 from './Assets/Flower1.png';
import fl3 from './Assets/Flower2.png';
import fl4 from './Assets/Flower3.png';
import lf1 from './Assets/Leaf2.png';
import lf2 from './Assets/Leaf1.png';
import ringer from "./Assets/musik.mp3";
import profile from './Assets/PhotoProfil.png';
import React, { useState, useEffect } from "react";


import './App.scss';

function App() {
  const audio = new Audio(ringer);
  audio.loop = true;
  
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showTopBtn1, setShowTopBtn1] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 1) {
            setShowTopBtn(true);
            audio.loop = true;
            audio.play();
            setShowTopBtn1(true);
        } else {
            setShowTopBtn(false);
            setShowTopBtn1(false);
        }
    });
}, []);

  return (
 
  
    
  <div className="app"    
          >

<div className='container-fluid  invitation-cont'>
<div className="row justify-content-center invitation-row">

  <div className='col-xl-6 col-lg-12 col-12 invitation-col'>
  <img src={bg1} className="app-bg" alt="logo" />
  <div className='row justify-content-end row-flower'>
      <div className='col-12 col-flower'>
      <img src={fl1} className="app-flower1" alt="logo" />
      </div>
  </div>
  <h1 className="title">
    <span class="c1">T</span>
    <span class="c2">h</span>
    <span class="c3">e</span>
    <span class="c4">W</span>
    <span class="c5">e</span>
    <span class="c6">d</span>
    <span class="c7">d</span>
    <span class="c8">i</span>
    <span class="c9">n</span>
    <span class="c10">g</span>
    <span class="c11">o</span>
    <span class="c12">f</span>
  </h1>
    
  <div className="row justify-content-center row-profile">
  
  <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-3 col-img">
  <div className="bord"></div>

    <div className="picture">
    <div className="bord1"></div>
    <img src={profile}  className="img-profile" ></img>    

    </div>

  </div>
  </div>
  <div className='row justify-content-end row-flower-icon'>
      <div className='col-12 col-flower'>
      <img src={lf1} className="app-flower1" alt="logo" />
      </div>
  </div>
 
  <div className='row justify-content-end row-flower-icon1'>
  
      <div className='col-12 col-flower'>
      {showTopBtn && (
      <img src={lf2} className="app-flower1" alt="logo" />
      )}
      </div>
      
  </div>

  <h5 className='name-title'>Mustika <br></br>& Wira</h5>

  <div className='row justify-content-center '>
    <div className='col-7'>
  <div className='row row-tgl'>
            <div className='col-4 col-tgl'>
              <h5 className='tgl'>25</h5>
            </div>
            <div className='col-4 col-tgl'>
            <h5 className='tgl'>05</h5>
            </div>
            <div className='col-4 col-tgl1'>
            <h5 className='tgl'>2022</h5>
            </div>
          </div>
    </div>
  </div>
 

  <h5 className='kehadiran'>
    di mohon kehadirannya
  </h5>
  <div className='row justify-content-end row-flower-last'>
      <div className='col-12 col-flower'>
      <img src={fl4} className="app-flower1" alt="logo" />
      </div>
  </div>
</div>

<div className='col-xl-6 col-lg-12 col-12 invitation-col1'>
  <img src={bg2} className="app-bg" alt="logo" />
  <div className='row justify-content-end row-flower'>
      <div className='col-12 col-flower'>
      <img src={fl2} className="app-flower1" alt="logo" />
      </div>
  </div>
 
 <h5 className='greting'>Assalamualaikum Wr. Wb.</h5>
 <p className='greting2'>Tanpa mengurangi rasa hormat, Kami mengundang <br></br>
 Bapak/Ibu/Saudara/i pada acara pernikahan kami:</p>
 <div className='row justify-content-end row-flower-icon1'>
      <div className='col-12 col-flower'>
      <img src={lf2} className="app-flower1" alt="logo" />
      </div>
  </div>
  {showTopBtn1 && (
 <h5 className='name'>Mustika</h5>
 )}
 <p className='greting2'>Putri dari Bpk Winarno & Ibu Julaikah</p>
 <h5 className='name2'>&</h5>
 <div className='row justify-content-end row-flower-icon'>
      <div className='col-12 col-flower'>
      <img src={lf1} className="app-flower1" alt="logo" />
      </div>
  </div>
 <h5 className='name2'>Wira</h5>
 <p className='greting2'>Putra dari Bpk Winarno & Ibu Julaikah</p>

 <h5 className='greting3'>QS. Ar-Rum Ayat 21</h5>
 <div className='row justify-content-center'>
  <div className='col-11'>
  <p className='greting4'>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia <br></br>
                          menciptakan pasangan-pasangan untukmu dari jenismu sendiri,<br></br>
                          agar kamu cenderung dan merasa tentram kepadanya, dan Dia <br></br>
                          menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada <br></br>
                          yang demikian itu benar-benar terdapat tanda-tanda (Kebesaran<br></br>
                          Allah) bagi kamu yang berfikir.</p>
  </div>
 </div>
 <div className='row justify-content-end row-flower-end'>
      <div className='col-12 col-flower'>
      <img src={fl3} className="app-flower1" alt="logo" />
      </div>
  </div>
</div>
  </div>



  </div>

</div>
         

  

      
  );
}

export default App;
