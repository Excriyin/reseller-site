import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Upgrade from './pages/Upgrade';
import Renew from './pages/Renew';
import { ChakraProvider } from '@chakra-ui/react';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';
import Faq from './pages/Faq/Faq';
import { useEffect } from 'react';
import { TopArrow } from './assets/SVGComponents';



export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.querySelector('.fixedScrollToTop').style.display = 'flex';
      } else {
        document.querySelector('.fixedScrollToTop').style.display = 'none';
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
      <div className='background'>
        <div
          className='fixedScrollToTop fixed bottom-6 right-10 bg-primary w-12 h-12 items-center justify-center rounded-full cursor-pointer z-[9999] hidden'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <TopArrow />
        </div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/upgrade' component={Upgrade} />
            <Route exact path='/renew' component={Renew} />
            <Route exact path='/faq' component={Faq} />
            <Route exact path='*' component={NotFoundPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </ChakraProvider>
  );
}
