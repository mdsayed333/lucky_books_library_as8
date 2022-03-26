import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const books = props.selectedBook

    const SetBookName =(props)=>{    //main
        return(
            <div>
                <p>{props.name}</p>
                <p>{props.book}</p>
            </div>
        )
    }
 
    return (
        <div className='cart'>
            <h3>Selected Books</h3>
            <p>{props.name}</p>
            
            {
                books.map((book, index) => <SetBookName book={book} id={index} key={index}></SetBookName>)
            }
           
            <button onClick={()=> props.chooesOne()} className='btn btn-outline-info my-3'>CHOOSE 1 FOR ME</button>
            <button onClick={()=> props.deleteData()} className='btn btn-outline-success'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;