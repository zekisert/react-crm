import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { blue, common } from '@material-ui/core/colors';
import AppUserMenu from './AppUserMenu';
import AppDrawerMenu from './AppDrawerMenu'

const blue600 = blue['900'];
const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    //   [theme.breakpoints.up('sm')]: {
    //     display: 'none',
    //   },
    // },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: 'rgba(227, 231, 232, 0.63)',
      overflow: 'auto',
    },
    user: {
      fontSize: 22,
      color: common.white,
    },
    menuItem: {
      color: blue600,
      fontWeight: 500,
      paddingTop: '0.2em',
      paddingBottom: '0.2em',
      fontSize: 16,
    },
  })
);

interface Props {
  navDrawerOpen: boolean;
  username: string;
  onLogoutClick: () => void;
  handleDrawerToggle: () => void;
  isSmallScreem: boolean;
  drawerStyle: {};
  children?:TODO
}

export default function AppNavDrawer(props: Props) {
  const styles = useStyles();

  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  const { username, navDrawerOpen, isSmallScreem, 
    onLogoutClick,
    handleDrawerToggle, drawerStyle } = props;

  console.log(navDrawerOpen);


  const drawer = (
    <>
      <AppUserMenu username={username} onLogoutClick={onLogoutClick}  />
      <AppDrawerMenu />
      {/* <div>
        {data.menus.map((menu, index) => (
          <MenuItem key={index}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <Link to={menu.link}>
              <Typography variant="h6" component="h6" className={styles.menuItem}>
                {menu.text}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </div> */}
    </>
  );

  return (
    <div className={styles.root}>
      <nav
        style={drawerStyle}
        aria-label="app navigation"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {!isSmallScreem ? (
          <Drawer
            variant="persistent"
            anchor="left"
            open={navDrawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: styles.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            classes={{
              paper: styles.drawerPaper,
            }}
            variant="temporary"
            onClose={handleDrawerToggle}
            open={navDrawerOpen}
          >
            {drawer}
          </Drawer>
        )}
      </nav>
    </div>
  );
}
