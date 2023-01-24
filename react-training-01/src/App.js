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
import CreditCard from './components/CreditCard/CreditCard';
import MasterCard from "./assets/img/logoMC.svg";
import Visa from "./assets/img/logoVisa.png";
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';


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
      <div className='credit-card'>
        <CreditCard
          type={Visa}
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type={MasterCard}
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
      </div>
      <br />
      <hr />
      <br />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <br />
      <hr />
      <br />
      <div className='driver-card'>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
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

      <br />
      <hr />
      <br />
    </div>
  )
}

export default App;
