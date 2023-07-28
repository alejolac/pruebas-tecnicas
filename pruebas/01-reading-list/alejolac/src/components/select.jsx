import { useState } from 'react'

function Genre({book, change}) {
    const [select, setSelect] = useState("Todos")
    const arr = numGenres(book)

    const handleSelect = (e) => {
        setSelect(e.target.value)
        change(e.target.value)
    }

    return (
        <div>
            <label htmlFor="miSelect">Selecciona una opción:</label>
            <select value={select} id="miSelect" onChange={handleSelect}>
                {
                    arr.map((opcion, index) => (
                        <option key={index} value={opcion}>
                            {opcion}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

function numGenres(books) {
    const genres = new Set();
    genres.add("Todos")
    for (const book of books) {
        genres.add(book.book.genre);
    }
    return Array.from(genres);
}

export default Genre