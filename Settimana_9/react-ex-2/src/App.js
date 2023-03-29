import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Jumbotron from './components/Jumbotron';
import MyLibrary from './components/MyLibray';
import MyFooter from './components/MyFooter';



const app = () => {
  return (
    <div>
      <MyNav />

      <Jumbotron />

      <MyLibrary/>

      <MyFooter/>
    </div>


  )
}
export default app;