import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme =>({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    textFieldFirst: {
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5
    },
    textField: {
        
       marginLeft: 5,
       marginRight: 5
      },
  });

 

export class Confirm extends Component {

  continue = e => {
    e.preventDefault();
    // now send form data to backend and process with rest api

    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };  

  render(){  
  const { classes,values:{ firstName, lastName, email, phone, city, country } } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" title="Mehvozsoft">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
           Mehvozsoft
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
      
      <List>
            <ListItem  >
                <ListItemText primary={firstName}  /> 
            </ListItem>

            <ListItem>
                <ListItemText primary={lastName} /> 
            </ListItem>

            <ListItem>
                <ListItemText primary={email} /> 
            </ListItem >

            <ListItem  >
                <ListItemText primary={phone}  /> 
            </ListItem>

            <ListItem>
                <ListItemText primary={city} /> 
            </ListItem>

            <ListItem>
                <ListItemText primary={country} /> 
            </ListItem >
            
      </List>
          
      <br />     
      <Button
        variant="contained"
        color="default" 
        className={classes.button}
        onClick={this.back}
         >
      Back
      </Button> 
      <Button
        variant="contained"
        color="primary" 
        className={classes.button}
        onClick={this.continue}
         >
      Continue
      </Button>

    </div>
  );
 }
}

 Confirm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  

export default withStyles(styles) (Confirm)
