import React, {useState} from 'react'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'
import ensolvers from '../../ensolvers.jpeg'
import useStyles from './styles.js'
import Form from '../Form/Form'

const Navbar = () => {

    const [showForm, setShowForm] = useState(false)

    const classes = useStyles();

    return(
        <div>
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
            <Typography className={classes.heading} variant='h4' align='center'>Ensolvers Notes</Typography>
            <img className={classes.image} src={ensolvers} alt='menu' height='60'/>
            </div>
            <Toolbar className={classes.toolbar}>
                {showForm ? (
                <Button color='secondary' variant='contained' onClick={()=>setShowForm(!showForm)}>Cancel</Button>
                ) : (
                <Button color='primary' variant='contained' onClick={()=>setShowForm(!showForm)}>Create Note</Button>
                )}
            </Toolbar>
        </AppBar>

        {showForm && <Form/>}
        </div>
    )    
}

export default Navbar