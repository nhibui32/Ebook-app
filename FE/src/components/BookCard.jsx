
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const coverId = book.cover_i;
  // get the cover image based on book ID or use placeholder 
  const image = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : 'https://via.placeholder.com/150';

  // function add book to favorites 
  const addToFavorites = () => {
    // retrieves the favorites dât from the localStorage and converts it from a string back into a JS object 
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = saved.find(item => item.key === book.key);
    if (!exists) {
      saved.push(book); // push to favorites
      localStorage.setItem('favorites', JSON.stringify(saved));
      alert('Added to favorites!');
    } else {
      alert('Already in favorites!');
    }
  };

  return (
    <div className="bg-containerBackground shadow p-4 rounded w-full max-w-xs relative">
      <Link to={`/book${book.key}`}>
        <img src={image} alt={book.title} className="w-full h-60 object-cover" />
        <h2 className="font-semibold mt-2">{book.title}</h2>
        <p className="text-sm text-secondaryText">{book.author_name?.[0]}</p>
      </Link>
      <button
        onClick={addToFavorites}
        className="absolute top-2 right-2 text-red-500 text-xl"
      >
        ❤️
      </button>
    </div>
  );
};

export default BookCard;
