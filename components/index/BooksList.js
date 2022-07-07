import { useState, useEffect } from "react";

export default function BooksList(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {props.books.map(book => {
                    return (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}