import React from 'react';

const SelectedBooks = (props) => {
    let books = props.book;
    // books.map(book => )
    return (
        <div>
            <h2>{props.book}</h2>
        </div>
    );
};

export default SelectedBooks;