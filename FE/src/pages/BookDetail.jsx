import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const { id } = useParams(); // `id` will now just be the ID part, e.g., "OL27482W"
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Ensure the URL structure is correct, using `id` directly after `works/`
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      {book.description && (
        <p className="mb-4">
          {typeof book.description === 'string' ? book.description : book.description.value}
        </p>
      )}
      {book.covers && book.covers.length > 0 && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          alt={book.title}
          className="w-full max-w-xs rounded"
        />
      )}
    </div>
  );
};

export default BookDetail;
