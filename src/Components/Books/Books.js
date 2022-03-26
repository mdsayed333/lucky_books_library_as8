import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Books = (props) => {
    const {name, img, price} = props.books;

    return (
        <div className='col '>
            <div className="card h-100 p-2">
                <img className="card-img-top" src={img}  alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">Books Name: {name}</h5>
                    <p className="card-text">Price: ${price}</p>
                </div>
                <button onClick={() => props.selectedBook(name)} className='btn btn-outline-primary'>
                        <span className='pe-2'>ADD TO CART</span>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
            </div>
        </div>
    );
};

export default Books;