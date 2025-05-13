import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(saved);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
