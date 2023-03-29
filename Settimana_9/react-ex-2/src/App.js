import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Jumbotron from './components/Jumbotron';
import MyLibrary from './components/MyLibray';



const app = () => {
  return (
    <div>
      <header>
      <MyNav />
      <Jumbotron />
      </header>
      <MyLibrary/>


    </div>


  )
}
export default app;