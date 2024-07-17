import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const MenuButton = ({ children, ...props }: Props) => {
    return (
        <button
            className="px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
            {...props}
        >
            {children}
        </button>
    );
};
