import { Provider } from 'react-redux';
import store from './store/store';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
//import Test from './components/Test/Test';
import Cloth from './components/clothes/Cloth';
import Footer from './components/footer/Footer';



function App() {
  return(
    <Provider store={store}> <>
    <Header/>
    <Cloth title="Clothes"/>  
    <Footer />
  </></Provider>
   
  );
}

export default App;
