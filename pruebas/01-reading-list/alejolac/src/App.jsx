import { useState, useEffect } from 'react'
import './App.css'
import books from '../../books.json'
import Select from "./components/select.jsx"
import Range from "./components/range.jsx"

function App() {
  const [book, setBook] = useState(books.library)
  const [bookLibrary, setBookLibrary] = useState(books.library)
  const [bookFavorite, setBookFavorite] = useState([])
  const [selectedOption, setSelectedOption] = useState(1);

  useEffect(() => {

  }, [])

  const changeGenre = newGenre => {
    if (newGenre == "Todos") return setBookLibrary(book)
    setBookLibrary(book.filter((books) => books.book.genre === newGenre))
  }
  const handleChange = (event) => {
    setSelectedOption(parseInt(event.target.value, 10)); // Actualizamos el estado cuando cambia la opción
  };
  const handleFavorite = (book, type) => {
    if (type) {
      if (bookFavorite.length > 0) {
        if (!bookFavorite.includes(book.book)) {
          setBookFavorite(bookFavorite.concat(book.book));
        } else alert("repetido")
      } else {
        setBookFavorite([book.book])
      }
    } else {
      console.log("llega");
      const newArr = bookFavorite.filter((item) => item !== book)
      setBookFavorite(newArr)
    }
  }

  function styleBook (book) {
    for (let item of bookFavorite) {
      if (item.title == book.book.title) return 'book book-marked'  
    } 
    return 'book'
  }


  return (
    <main>
      <div className='div-main'>
        <h1>Libreria Front</h1>
        <p>{bookLibrary.length} Libros disponibles</p>
        <div className='filters'>
          <Range />
          <Select book={book} change={changeGenre} />
        </div>
      </div>
      <div className='books'>
        <div className='list-books'>
          {book.length > 0 && (
            bookLibrary.map((books, index) => {
              return (
                <div className={styleBook(books)} onClick={() => handleFavorite(books, true)}>
                  <img className='portada' key={books.book.title} src={books.book.cover} alt="coverBook" />
                </div>
              )
            }
            )
          )
          }
        </div>
        <div className='list-favorites-container'>
          <h1>Libros de Lectura</h1>
          <div className='list-favorites'>
            {bookFavorite.length > 0 && (
              bookFavorite.map((books, index) => {
                return (
                  <div className='list-favorites-book book' onClick={() => handleFavorite(books, false)}>
                    <img className='portada' key={books.title} src={books.cover} alt="coverBook" />
                    <div className="cross-overlay">
                      <i className="fa-solid fa-x"></i>
                    </div>
                  </div>
                )
              }
              )
            )
            }
          </div>
        </div>

      </div>
    </main>
  )

}



export default App
