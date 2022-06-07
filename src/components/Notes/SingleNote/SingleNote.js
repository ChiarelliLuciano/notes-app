import React, {useState} from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles.js';
import axios from 'axios';

const SingleNote = ({title, content}) => {
    const classes = useStyles();
    const[newNote, setNewNote] = useState([])
    const [showForm, setShowForm] = useState(false)

    const deleteNote = (title) => {
        if (window.confirm("Are you sure you want to delete this Note?")) {
        axios.delete(`https://ensolvers-notes.herokuapp.com/api/delete/${title}`)   
        }
    }
    
    const updateNote = (title) => {
        axios.put("https://ensolvers-notes.herokuapp.com/api/update", {
            title: title,
            content: newNote
        })
        setNewNote("")
    }

    return(
        <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card className={classes.card}>
                    <Typography gutterBottom variant="h5" component="h2">{title}</Typography> 
                    <CardContent> 
                        <Typography variant="body1" component="p">{content}</Typography>
                    </CardContent>
                    <button onClick={()=> {deleteNote(title)}}><DeleteIcon/></button>
                    <button onClick={()=>setShowForm(!showForm)}><EditIcon/></button>
                {showForm && 
                    <div>
                        <input type="text" id="update" onChange={(e)=>{
                            setNewNote(e.target.value)
                            }}/>
                        <button onClick={()=>{updateNote(title)}}>Update</button>
                    </div>
                }
            </Card>
        </Grid>    
    )
}

export default SingleNote