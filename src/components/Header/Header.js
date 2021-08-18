import logo from '../../assets/images/logo.png';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

function Header({ onSearchSubmit }) {
  return (
    <div className="header">
        <div className="brand">
            <img src={logo} alt="logo" className="logo" />
            <h3 className="header-title">Thirukkural</h3>
        </div>
        <SearchForm onSearchSubmit={onSearchSubmit} />
    </div>
  );
}

export default Header;
