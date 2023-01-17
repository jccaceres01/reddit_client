import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchTerm, searchTermSelector } from '../../features/post/postSlice';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  
  const searchTerm = useSelector(searchTermSelector);
  const [term, setTerm ] = useState(searchTerm);
  const dispatch = useDispatch();
  const form = useRef('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    dispatch(setSearchTerm(term));
  };

  const handleChange = (e) => {
    setTerm(e.currentTarget.value);
  }

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
        <p></p>
      </nav>
    </>
  );
};

export default Header;
