import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard'

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://openlibrary.org/search.json?q=the+lord+of+the+rings`)
      .then(res => res.json())
      .then(data => setBooks(data.docs.slice(0, 20)));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {books.map(book => <BookCard key={book.key} book={book} />)}
    </div>
  );
};

export default Home;
