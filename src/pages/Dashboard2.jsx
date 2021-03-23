import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: 'inherit'
    },
    link:{
        textDecoration:'none',
        color:theme.palette.text.primary}
}))


export default function Dashboard2() {
    const classes = useStyles();
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Drawer
                    style={{ width: '220px' }}
                    varient="persistent"
                    anchor="left"
                    open={true}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    
                    <List>
                    <Link to="/" className={classes.link} >
                        <ListItem button>
                            <ListItemIcon>
                                < HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                        </Link>
                        <Link to="/add news" className={classes.link} >
                        <ListItem button>
                            <ListItemIcon>
                                < AddBoxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Add News"} />
                        </ListItem>
                        </Link>
                    </List>


                </Drawer>

            </div>
        </Router>

    )
}