import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
    return (
        <header>
            <FontAwesomeIcon icon={["fal", "book"]} />
            <h1>New York Times Best-Selling Books</h1>
        </header>
    )
}
export default Header;