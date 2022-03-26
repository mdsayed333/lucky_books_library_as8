import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import './LuckyBooks.css';

const LuckyBooks = () => {
    const [books, setBooks] = useState([]);

    const [cart, setCart] = useState([]);
    
    const [name, setName] = useState([]);

    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const selectBook = (name)=>{
       
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
        if(selectBook.length <= 4){

            setCart(selectBook);
        }
    }

 


    const chooesOne = () =>{
        let selectedCart = [];
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        console.log(randomNumber);
        const selected =  cart;
        console.log(selected);
        selectedCart = selected[randomNumber]
        console.log(selectedCart);
        setName(selectedCart);
        setCart([]);

    }

    const deleteData = () =>{
        setCart([]);
        setName([]);
    }
    return (
        
            <div className='container'>
                <div className='row'>
                    <h1 className='text-primary text-center mt-3 fst-italic'>Lucky Books Library</h1>
                    <h3 className='text-center mb-4 fst-italic'>Choose 4 Books</h3>
                    <div className='col-12 col-lg-9'>

                            {/* products section start here */}
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

                        {/* cart section start here  */}
                    <div className=' col-12 col-lg-3 bg-light pt-5 px-3 rounded '>
                        {
                            <Cart
                                name={name}
                                selectedBook={cart}
                                deleteData={deleteData}
                                chooesOne={chooesOne}
                            ></Cart>
                        }
                    </div>
                </div>

                        {/* question answer section start here */}
                <div>
                        <QuestionAnswer></QuestionAnswer>
                </div>
            </div>
    );
};

export default LuckyBooks;