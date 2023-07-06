import Head from 'next/head';
import axios from "axios";
import react, { useState } from "react";


//Import styles
import styles from '../styles/Home.module.css';
//Import Completed Table component
import Book from './components/Book';
import SearchIcon from '@mui/icons-material/Search';



//Home Component
export default function Home() {
  //Initialize useState for searching for the book
  const [searchText, setSearchText] = useState("");

  //Initialize useState for displaying the info of 3 books at a time
  const [bookInformation, setBookInformation] = useState([]);


  //Handle search changes for the search text appropiately
  const handleSearchChanges = (event) => {
    //Prevent default submission
    setSearchText(event.target.value)
  }


  //Function for searching for books
  const searchBookNames = (event) => {  
    //Handle your event key in the case the user presses the "Enter" key after typing the title of a book
    //Implement promise for the API request
    if (searchText.length > 0 || event.key === "Enter") {
      
      // Access the API accordingly and extract the search query
      //Set maximum search results to be 3
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchText + '&key=AIzaSyCarM77qxYExovNaJpaebZhG6RXdZV6A8Y' + '&maxResults=3')
      .then(res => 
        setBookInformation(res.data.items))
      .catch(err => 
        console.log(err)
      )
    }

}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        {/* Insert search bar below */}
        {/* Use MaterialUI for the search bar icon and to make the search bar */}
        <div className={styles.search}>
          <input type="text" placeholder="Start looking for your next book!" value= {searchText} onKeyDown = {searchBookNames} onChange={handleSearchChanges}/>
          <button><i className="fas fa-search"></i><SearchIcon /></button>
        </div>
        
        {/* Insert table component below */}
        <div>
          {
            //Customize the book information we need appropriately and import this from another component 
            <Book item = { bookInformation } />
          }
        </div>

        
        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .search {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .search input {
          outline: 0;
          border: 0;
          width: 600px;
          height: 50px;
        }
        
        .search button {
          outline: none;
          border: none;
          height: 35px;
          padding: 0 0.5 rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

