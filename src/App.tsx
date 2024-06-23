import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <>
      <NewsLetter />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
