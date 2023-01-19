import './App.css';
import IdCard from './components/IdCard/IdCard';


function App() {
  return (
    <>
      <IdCard
        lastName='Rodriguez'
        firstName='Angel'
        gender='male'
        height={178}
        // birth={new Date('1985-05-12')}
        picture='https://www.looper.com/img/gallery/the-one-regret-the-writers-have-about-the-simpsons-movie/l-intro-1641663043.jpg'
      />
      <IdCard
        lastName='Martinez'
        firstName='Nelson'
        gender='Trans'
        height={145}
        // birth={new Date('1985-05-12')}
        picture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsD33LBMW7PkAboAxNA0Z6tfIl8HkaOK05FnQII_9n5jRtuVHKJ0Rjb_y1_nRFqxHpIo&usqp=CAU'
      />
    </>
  )
}

export default App;
