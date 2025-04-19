import {ReactNode} from 'react';

type Props = {
    children: ReactNode
    onClick?: () => void
    title?: string
    type?: 'button' | 'submit' | 'reset'
};
export const Button = ( { children, onClick, type, title } : Props) => {
    return (
        <button onClick={onClick} title={title} type={type}  >
            {children}
        </button>
    );
};