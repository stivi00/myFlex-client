import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import { Container } from 'react-bootstrap';

import './index.scss';

const MyFlixApplication = () => {
    return (
        <Container style={{ width: '100%' }}>
            <MainView className='my-flix' />
        </Container>
    );
};

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<MyFlixApplication />);
