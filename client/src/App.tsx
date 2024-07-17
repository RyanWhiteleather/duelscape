import { BrowserRouter } from 'react-router-dom';
import { RouteManager } from './components/RouteManager.tsx';

export default function App() {
    return (
        <BrowserRouter>
            <RouteManager />
        </BrowserRouter>
    );
}
