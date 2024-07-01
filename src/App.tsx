import './App.css';

import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main className=' min-h-[812px] flex flex-col gap-4 justify-center py-7 px-4 md:min-h-[1024px] lg:min-h-[768px] '>
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}

export default App;
