import { BrowserRouter } from 'react-router-dom';
import { RouteManager } from './components/Menus/RouteManager.tsx';

export default function App() {
    return (
        <BrowserRouter>
            <RouteManager />
        </BrowserRouter>
    );
}
