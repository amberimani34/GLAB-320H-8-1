import { Link } from 'react-router';

function Nav (props) {
    return (
        <div className='nav'>
            <Link to='/'>
            <div>CRYPTO PRICES</div>
            </Link>
            <Link to='/currencies'>
            <div>CURRENCIES</div>
            </Link>

        </div>
    )
}
export default Nav;