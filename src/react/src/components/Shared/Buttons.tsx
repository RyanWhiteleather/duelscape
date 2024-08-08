import { HiHome, HiOutlineChevronLeft } from 'react-icons/hi';

interface BackButtonProps {
    onClick?: () => void | undefined;
}

export const BackButton = ({ onClick }: BackButtonProps) => (
    <HiOutlineChevronLeft size={25} color="white" className="absolute  text-white cursor-pointer" onClick={onClick} />
);

export const HomeButton = ({ onClick }: BackButtonProps) => (
    <HiHome size={30} color="white" className="absolute  text-white cursor-pointer" onClick={onClick} />
);
