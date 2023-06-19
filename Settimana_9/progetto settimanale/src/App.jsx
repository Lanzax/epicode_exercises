import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyHeader from "./components/Header";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";

const END_POINT = 'http://www.omdbapi.com/?apikey=';
const MY_KEY = 'f4988f99';

function App() {
  return (
    <div className="App bg-dark">
      <MyHeader />
      <MyMain endPoint={END_POINT} myKey={MY_KEY}/>
      <MyFooter />
    </div>
  );
}

export default App;
