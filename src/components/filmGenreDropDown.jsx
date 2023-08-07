import {useState} from "react";

function FilmGenreDropDown() {

    const [genre, setGenre] = useState ("");


  return (
    <>
        <select value={genre} onChange = {(event) => {setGenre(event.target.value)}} >
            <option value="Film Genre...">Film Genre...</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Horror">Horror</option>
            <option value="Animation">Animation</option>
            <option value="Documentary">Documentary</option>
        </select>
    </>
  )
}

export default FilmGenreDropDown;