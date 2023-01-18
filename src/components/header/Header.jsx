import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchTerm, searchTermSelector } from '../../features/post/postSlice';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { toggleShowMenu } from '../../features/rendering/renderingSlice';

const Header = () => {
  
  const searchTerm = useSelector(searchTermSelector);
  const [term, setTerm ] = useState(searchTerm);
  const dispatch = useDispatch();
  const form = useRef();
  const [hover, setHover] = useState(false);
  const menuBtn = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    dispatch(setSearchTerm(term));
  };

  const handleChange = (e) => {
    setTerm(e.currentTarget.value);
  }

  const toggleHover = () => {
    setHover(!hover);
  }

  const menuStyle = {
    width: 30,
    height: 30,
    color: (hover) ? 'darkgray' : 'lightgray',
    margin: '1rem',
    cursor: 'pointer'
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <FontAwesomeIcon icon={brands('reddit')} style={{width: 40, height: 40, color: 'dark'}} /> 
          <Link to="/" className="link"><h2>Reddit</h2></Link>
        </div>
        <form onSubmit={handleSubmit} ref={form}>
          <input type="text" placeholder="Search Reddit" onChange={handleChange} name="search" className="search" />
        </form>
        <p id="divisor"></p>
        <FontAwesomeIcon id="btn-menu" icon={solid('bars')} style={menuStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={() => dispatch(toggleShowMenu())} /> 
      </nav>
    </>
  );
};

export default Header;
