import s from './Header.module.css'
import {Cart} from '../Cart/Cart.tsx';
import {useTheme} from 'next-themes';

export const Header = () => {
    const {theme, setTheme} = useTheme()
    return (
        <div className={s.headerWrapper}>
            <div className={s.container}>
                <h3>logotype</h3>
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
                <Cart/>
                {/*<ModalRadix/>*/}
            </div>
        </div>
    )
}