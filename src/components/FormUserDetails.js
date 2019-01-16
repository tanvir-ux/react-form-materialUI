import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';


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

 

export class FormUserDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };  
  render(){  
  const { classes,values,handleChange } = this.props;
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
      <TextField
      className={classes.textFieldFirst}
      placeholder="Enter Your First Name"
      label="First Name"
      onChange={handleChange('firstName')}
      defaultValue={values.firstName}
      fullWidth
      />
      <br />
      <TextField
      className={classes.textField}
      placeholder="Enter Your Last Name"
      label="Last Name"
      onChange={handleChange('lastName')}
      defaultValue={values.lastName}
      fullWidth
      />
      <br />
      <TextField
      className={classes.textField}
      placeholder="Enter Your Email"
      label="Email"
      onChange={handleChange('email')}
      defaultValue={values.firstName}
      fullWidth
      />
      <br />
      <TextField
      className={classes.textField}
      placeholder="Enter Your Password"
      label="Password"
      onChange={handleChange('password')}
      defaultValue={values.password}
      fullWidth
      />
      <br />      
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

 FormUserDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  

export default withStyles(styles) (FormUserDetails)
