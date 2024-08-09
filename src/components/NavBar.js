import React from 'react';
import { Link  , useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, Menu, MenuItem, Fade } from '@mui/material';

export default function NavBar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isActive = (path) => location.pathname === path ? 'bg-gray-700 text-white rounded p-1' : '';
  return (
    <div className="shadow-lg">
    <div className="bg-gradient-to-r from-gray-500 to-indigo-300 h-20 flex justify-between items-center p-3 md:h-24">
        <div className="ml-5 text-white font-bold text-2xl tracking-wide">
            <Link to="/" className="hover:text-gray-300 transition duration-300">
                Habit Tracker
            </Link>
        </div>
        <div className="flex space-x-6 md:space-x-10">
            <Link to="/" className={`text-white text-lg hover:text-gray-300 transition duration-300 ${isActive('/')}`}>
                Habit
            </Link>
            <Link to="/Weekly" className={`text-white text-lg hover:text-gray-300 transition duration-300 ${isActive('/Weekly')}`}>
                Weekly
            </Link>
        </div>
        <div className="flex items-center md:m-0 mb-4 ">
            <FontAwesomeIcon icon={faBell} className="text-white text-xl cursor-pointer ml-5 md:mr-5 hover:text-gray-300 transition duration-300" />
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="text-white"
            >
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/Signup" className="text-gray-800">Create</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/Login" className="text-gray-800">Login</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/Profile" className="text-gray-800">Profile</Link>
                </MenuItem>
            </Menu>
        </div>
    </div>
</div>

  );
}
