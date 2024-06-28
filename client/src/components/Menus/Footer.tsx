import { FaGithub, FaRegQuestionCircle } from 'react-icons/fa';

export const Footer = () => {
    return (
        <>
            <a
                href="https://github.com/RyanWhiteleather/duelscape"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4"
                title="GitHub"
            >
                <FaGithub size={25} color="white" />
            </a>
            <a
                href="/"
                title={'How To Play'}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4"
            >
                <FaRegQuestionCircle size={25} color="white" />
            </a>
        </>
    );
};
