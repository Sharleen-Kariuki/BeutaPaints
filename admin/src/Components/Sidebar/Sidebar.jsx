import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
        <div className='sidebarItem'>
          <FontAwesomeIcon icon={faPlus} className='sidebarIcon' />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
        <div className='sidebarItem'>
          <FontAwesomeIcon icon={faList} className='sidebarIcon' />
          <p>Product List</p>
        </div>
      </Link>


    </div>
  );
};

export default Sidebar;