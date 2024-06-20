import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <>
      <main className='w-full h-[100vh] py-6 px-6 bg-gradient-to-bottom'>
        <NewsLetter />
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
