import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BooksList from '../components/index/BooksList';
import { useState, useEffect } from 'react';
import { getBooks } from '../api/bookApi';

export default function Homie() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(_books => setBooks(_books))
  }, [])

  return (
    <div className={styles.home}>
      <BooksList books={books} />
    </div>
  );
}
