import React, { useEffect, useState } from 'react';

const Bookshelf = ({
  covers,
  newISBN,
  handleInputChange,
  handleSubmit,
  handleDeleteInputChange,
  handleDeleteSubmit,
  deleteISBN,
}) => {
  const books = covers.map((isbn) => {
    return (
      <a href={`https://isbnsearch.org/isbn/${isbn}`}>
        <img
          className='book'
          key={isbn}
          src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
        ></img>
      </a>
    );
  });

  return (
    <div>
      <div id='bookshelf'>
        <div id='bookshelfBar' className='bookshelfBar'>
          <p className='barLeft'>Our Bookshelf</p>
          <div className='barRight'>
            <p>Add your finished book:</p>
            <form onSubmit={handleSubmit}>
              <input
                className='ISBN'
                type='text'
                placeholder='type the ISBN here'
                value={newISBN}
                onChange={handleInputChange}
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <div id='books'>{books}</div>
        <form id='belowBookshelf' onSubmit={handleDeleteSubmit}>
          <p>To remove a book from the shelf, type the ISBN here:</p>
          <input
            className='deleteISBN'
            type='text'
            placeholder='ISBN to delete'
            value={deleteISBN}
            onChange={handleDeleteInputChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Bookshelf;

/*

  const [covers, setCovers] = useState([
    9780399208539, 9780060256678, 9781852275501,
  ]);
  const [newISBN, setNewISBN] = useState('');

  const books = covers.map((isbn) => {
    return (
      <img
        key={isbn}
        src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
      ></img>
    );
  });

  const handleInputChange = (e) => {
    setNewISBN(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (newISBN) {
      const updatedCovers = [...covers, newISBN];
      setCovers(updatedCovers);
      setNewISBN(''); // Clear the input after submission
    }
  }

  return (
    <div>
      <div id='bookshelf'>
        <div id='bookshelfBar' className='bookshelfBar'>
          <p className='barLeft'>Our Bookshelf</p>
          <div className='barRight'>
            <p>Add your finished book:</p>
            <form onSubmit={handleSubmit}>
              <input
                className='ISBN'
                type='text'
                placeholder='type the ISBN here'
                value={newISBN}
                onChange={handleInputChange}
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <div id='books'>{books}</div>
      </div>
    </div>
  );
*/
