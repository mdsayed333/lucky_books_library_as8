import React from 'react';
import SelectedBooks from '../SelectedBooks/SelectedBooks';
import './Cart.css';

const Cart = (props) => {
    const books = props.selectedBook
    console.log(books);

    const randomSelect = (random)=>{
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        console.log(randomNumber);
    }

    // const SetBookName =(props)=>{    //main
    //     return(
    //         <div>
    //             <p>{props.book}</p>
    //         </div>
    //     )
    // }

    // const setBookName =(props)=>{
    //     return(
    //         <div>
    //             <p>{props.book}</p>
    //         </div>
    //     )
    // }
    return (
        <div className='cart'>
            <h3>Selected Books</h3>
            {
                // <p>{props.book} </p>
                // books.map(book => setBookName(book))
                // books.map(book => <SetBookName book={book} key={props.id}></SetBookName>)
            }
            {
                <SelectedBooks key={books.id} book={books.name}></SelectedBooks>
            }
            <button onClick={()=> randomSelect()} className='btn btn-outline-info my-3'>CHOOSE 1 FOR ME</button>
            <button className='btn btn-outline-success'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;