import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-700 text-white p-4 flex justify-between">
    <Link to="/" className="text-xl font-bold">eBook App</Link>
    <Link to="/search" className="hover:underline">Search</Link>
    <Link to="/favorites" className="hover:underline">Favorites</Link>
  </header>
);

export default Header;
