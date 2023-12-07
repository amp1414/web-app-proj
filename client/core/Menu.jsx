import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import auth from './../auth/auth-helper';
import { Link, withRouter } from 'react-router-dom';
import CartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import cart from './../cart/cart-helper';

const styles = {
  appBar: {
    backgroundColor: '#333', // Change the background color to your preference
  },
  title: {
    flexGrow: 1,
    fontSize: '1.5rem', // Adjust the font size as needed
  },
  iconButton: {
    marginRight: '10px', // Add margin to the right of the HomeIcon
    color: '#fff', // Set icon color
  },
  linkButton: {
    color: '#fff',
    marginLeft: '10px', // Add some space between buttons
  },
  rightSection: {
    marginLeft: 'auto', // Push the right section to the right
  },
};

const Menu = withRouter(({ history }) => (
  <AppBar position="static" style={styles.appBar}>
    <Toolbar>
      <Link to="/">
        <IconButton aria-label="Home" style={styles.iconButton}>
          <HomeIcon />
        </IconButton>
      </Link>
      <Link to="/shops/all">
        <Button style={styles.linkButton}>All Shops</Button>
      </Link>
      <Link to="/cart">
        <Button style={styles.linkButton}>
          Cart
          <Badge color="secondary" invisible={false} badgeContent={cart.itemTotal()} style={{ marginLeft: '7px' }}>
            <CartIcon />
          </Badge>
        </Button>
      </Link>
      <div style={styles.rightSection}>
        <Typography variant="h6" color="inherit" style={styles.title}>
          MERCHANDISE
        </Typography>
        <span style={{ float: 'right' }}>
          {!auth.isAuthenticated() && (
            <span>
              <Link to="/signup">
                <Button style={styles.linkButton}>Sign up</Button>
              </Link>
              <Link to="/signin">
                <Button style={styles.linkButton}>Sign In</Button>
              </Link>
            </span>
          )}
          {auth.isAuthenticated() && (
            <span>
              {auth.isAuthenticated().user.seller && (
                <Link to="/seller/shops">
                  <Button style={styles.linkButton}>My Shops</Button>
                </Link>
              )}
              <Link to={'/user/' + auth.isAuthenticated().user._id}>
                <Button style={styles.linkButton}>My Profile</Button>
              </Link>
              <Button color="inherit" onClick={() => auth.clearJWT(() => history.push('/'))}>
                Sign out
              </Button>
            </span>
          )}
        </span>
      </div>
    </Toolbar>
  </AppBar>
));

export default Menu;
