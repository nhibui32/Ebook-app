import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
const Header = () => (
  <header className="bg-headerBackground text-primaryText text-xl items-center p-4 flex justify-between">
    <Link to="/" className="text-3xl font-bold">Review Book</Link>
    <Link to="/search" className="hover:underline">Search</Link>
    <Link to="/favorites" className="hover:underline">Favorites</Link>
    <ThemeToggle/>
  </header>
);

export default Header;
