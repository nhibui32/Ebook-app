import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import BookDetail from './pages/BookDetail';
import Favorites from './pages/Favorite';


function App() {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/book/works/:id" element={<BookDetail />} />
          <Route path="/favorites" element={<Favorites />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
