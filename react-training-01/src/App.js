import './App.css';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard/IdCard';
import Random from './components/Random/Random';

function App() {
  return (
    <>
      <IdCard
        lastName='Rodriguez'
        firstName='Angel'
        gender='male'
        height={1.78}
        birth={(new Date("1875-03-09")).toLocaleDateString('en-us', { weekday:"short",month:"short", day:"numeric", year:"numeric"})}
        picture='https://www.looper.com/img/gallery/the-one-regret-the-writers-have-about-the-simpsons-movie/l-intro-1641663043.jpg'
      />
      <IdCard
        lastName='Martinez'
        firstName='Nelson'
        gender='Trans'
        height={1.45}
        birth={(new Date("1999-12-02")).toLocaleDateString('en-us', { weekday:"short",month:"short", day:"numeric", year:"numeric"})}
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

    </>


  )
}

export default App;
