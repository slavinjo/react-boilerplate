import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    buttonPadding: {    
     margin: '20px',
    },
  });  

const baseButton = (props) => {
    const { classes } = props;
    return (
        <Button  className={classes.buttonPadding} variant="contained" color="primary" onClick={props.onClick}>{props.children}</Button>
    );
}

export default withStyles(styles)(baseButton);