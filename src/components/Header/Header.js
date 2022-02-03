import CHeader from './style'
import Logo from "/Users/55919/Documents/teste-mLabs/my-app/src/image/desktop/Logo.png"
import Avatar from "/Users/55919/Documents/teste-mLabs/my-app/src/image/desktop/Avatar-menu.png"


const Header = () => {
    return (
        <CHeader>
            <div className='logo'>
                <img src={Logo} alt="Logo-Mlabs.png"/>
            </div>
            <div className='avatar'>
                <img src={Avatar} alt="Avatar-login.png"/>
            </div>
        </CHeader>
    )
}

export default Header
