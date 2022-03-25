import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const LuckyBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    // console.log(books);

    // const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9nd8ULhNW-25u4LTmNkgjXJKK1EKeO4nVA&usqp=CAU"
    return (
        <div className='row'>
            <div className='col-9'>
                <h1 className='text-primary text-center m-5 fst-italic'>Lucky Books Library</h1>

                <div className='row row-cols-1 row-cols-md-3 g-4 '>
                {
                    books.map(book =><Books 
                        key={book.id}
                        books={book}
                    ></Books>)
                }
                </div>
            </div>
            <div className='col-3'>
                <h1>Selected Books</h1>
            </div>
        </div>
    );
};

export default LuckyBooks;