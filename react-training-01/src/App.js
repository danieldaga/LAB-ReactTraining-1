import { useState } from 'react';
import './App.css';
import BoxColor from './components/BoxColor/BoxColor';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard/IdCard';
import LikeButton from './components/LikeButton/LikeButton';
import Random from './components/Random/Random';
import RandomBoxColor from './components/RandomBoxColor/RandomBoxColor';
import pictureAlfredo from './assets/img/alfredo.png'
import pictureGlasses from "./assets/img/alfredo-glasses.png";
import Carousel from './components/Carousel/Carousel';


function App() {
  return (
    <div className='container-app'>
      <IdCard
        lastName='Rodriguez'
        firstName='Angel'
        gender='male'
        height={1.78}
        birth={(new Date("1875-03-09")).toLocaleDateString('en-us', { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
        picture='https://www.looper.com/img/gallery/the-one-regret-the-writers-have-about-the-simpsons-movie/l-intro-1641663043.jpg'
      />
      <IdCard
        lastName='Martinez'
        firstName='Nelson'
        gender='Trans'
        height={1.45}
        birth={(new Date("1999-12-02")).toLocaleDateString('en-us', { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
        picture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsD33LBMW7PkAboAxNA0Z6tfIl8HkaOK05FnQII_9n5jRtuVHKJ0Rjb_y1_nRFqxHpIo&usqp=CAU'
      />
      <br />
      <hr />
      <br />
      <Greetings lang="de">Nelson</Greetings>
      <Greetings lang="fr">Angel</Greetings>
      <Greetings lang="es">Pablo</Greetings>
      <Greetings lang="en">Dani</Greetings>
      <br />
      <hr />
      <br />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <br />
      <hr />
      <br />
      <div className='color-box-all'>
        <BoxColor r={0} g={0} b={253} />
        <BoxColor r={255} g={255} b={35} />
        <RandomBoxColor />
      </div>
      <br />
      <hr />
      <br />
      <div className='button-container'>
        <LikeButton />
      </div>
      <br />
      <hr />
      <br />
      <ClickablePicture picture={pictureAlfredo} glasses={pictureGlasses} />
      <br />
      <hr />
      <br />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
    </div>


  )
}

export default App;
