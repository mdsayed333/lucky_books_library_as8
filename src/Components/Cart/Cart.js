import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const books = props.selectedBook
    // console.log(books);

    const SetBookName =(props)=>{
        return(
            <div>
                <p>{props.book}</p>
                {/* <p>{props}</p> */}
            </div>
        )
    }
    return (
        <div className='cart'>
            <h3>Selected Books</h3>
            {
                // books.map(book => {<p>{props}</p>  })
                books.map(book => <SetBookName book={book} key={props.id}></SetBookName>)
            }
            {/* <p>{books}</p> */}
            <button className='btn btn-outline-info my-3'>CHOOSE 1 FOR ME</button>
            <button className='btn btn-outline-success'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;