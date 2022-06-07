import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import SingleNote from './SingleNote/SingleNote'

const Notes = () => {

    const[notesList, setNotesList] = useState([])
    
    useEffect(()=>{
        axios.get("https://ensolvers-notes.herokuapp.com/api/get").then((response)=>{
            console.log(response.data)
            setNotesList(response.data)
        })
    }, [])
    
    return (
           <Grid container alignItems='stretch' spacing={3}>
               {notesList.map((note) => (
                   <SingleNote key={note.id} title = {note.title} content = {note.content}/>
               ))}
           </Grid>
        ) 
}
export default Notes