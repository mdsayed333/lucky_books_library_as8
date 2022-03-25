import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './LuckyBooks.css';

const LuckyBooks = () => {
    const [books, setBooks] = useState([])

    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])




    


    // const selectBook = (name)=>{
    //     console.log(name);
    //     let selectBook = [];
    //     const exists = cart.find(book => book === name);
    //     if(!exists){
    //         const newBook = [...cart, name];
    //         selectBook = newBook;
    //     }
    //     else{
    //         const rest = cart.filter(book => book !== name);
    //         selectBook = [...rest, exists];
    //     }
    //     setCart(selectBook);
    //     // setId(id);
    // }




    const selectBook = (book,name)=>{

        console.log(book);
        let selectBook = [];
        const exists = cart.find(book => book === name);
        if(!exists){
            const newBook = [...cart, name];
            selectBook = newBook;
        }
        else{
            const rest = cart.filter(book => book !== name);
            selectBook = [...rest, exists];
        }
        setCart(selectBook, book);
        // setId(id);
    }




    console.log(cart);

    // const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9nd8ULhNW-25u4LTmNkgjXJKK1EKeO4nVA&usqp=CAU"
    return (
        
            <div className='container'>
                <div className='row'>
                    <h1 className='text-primary text-center mt-3 fst-italic'>Lucky Books Library</h1>
                    <h3 className='text-center mb-4 fst-italic'>Choose 4 Books</h3>
                    <div className='col-9'>

                        <div className='row row-cols-1 row-cols-md-3 g-4 '>
                        {
                            books.map(book =><Books 
                                key={book.id}
                                books={book}
                                selectedBook={selectBook}
                            ></Books>)
                        }
                        </div>
                    </div>
                    <div className='col-3 bg-light pt-5 px-3 rounded '>
                        {
                            <Cart
                                key={cart.id}
                                selectedBook={cart}
                            ></Cart>
                        }
                    </div>
                </div>
            </div>
    );
};

export default LuckyBooks;