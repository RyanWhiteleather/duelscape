import { useNavigate } from 'react-router-dom';
import { HomeButton } from '../Shared/Buttons';

interface MenuHeaderProps {
    children: string;
}

export const MenuHeader = ({ children }: MenuHeaderProps) => {
    const navigate = useNavigate();
    return (
        <div className=" absolute left-0 top-0 bg-gray-700 p-4 rounded-t-[12px] flex items-center justify-between w-full ">
            <HomeButton onClick={() => navigate('/')} />
            <div className="flex-1 text-center">
                <h1 className="text-white sm:text-[2rem] text-center">{children}</h1>
            </div>
        </div>
    );
};
