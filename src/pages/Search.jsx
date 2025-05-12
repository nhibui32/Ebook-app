import { useState } from 'react';
import BookCard from '../components/BookCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = async () => {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await res.json();
    setResults(data.docs.slice(0, 20));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        className="border p-2 rounded w-full max-w-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={searchBooks}
        className="bg-blue-600 text-white p-2 rounded ml-2"
      >
        Search
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {results.map(book => <BookCard key={book.key} book={book} />)}
      </div>
    </div>
  );
};

export default Search;
