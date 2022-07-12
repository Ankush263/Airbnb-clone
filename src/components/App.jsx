import '../styles/App.css';
import Home from './Home';

import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import SearchPage from './SearchPage'
import Header from './Header';
import Footer from './Footer';


const App = () => {
  return (
    <div className="app">
      {/* <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/search' element={<SearchPageLayout />} />
      </Routes> */}
        <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
