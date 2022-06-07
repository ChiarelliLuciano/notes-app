import React, {useState} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles'
import axios from 'axios'

const Form = () => {
    const classes = useStyles();

    const [noteTitle, setTitle] = useState('')
    const [noteContent, setContent] = useState('')

    const submitNote = () => {
        axios.post("https://ensolvers-notes.herokuapp.com/api/insert", {title: noteTitle, content: noteContent}).then(()=>{
            alert("successful insert");
        })
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} >
            <Typography variant='h6'>Create Note</Typography>
                <TextField name='title' variant='outlined' label='Title' fullWidth onChange={(e)=>{setTitle(e.target.value)}}/> 
                <TextField name='content' variant='outlined' minRows={5} cols='50' multiline fullWidth placeholder='Note...' onChange={(e)=>{setContent(e.target.value)}}/>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth onClick={submitNote}>Save</Button>
            </form>
        </Paper>
    )
}

export default Form