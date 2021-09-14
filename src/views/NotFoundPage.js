import { useHistory } from 'react-router-dom';

function NotFoundPage() {
    const history = useHistory();

    history.push('/');

    return <h1>404 Page not found :(</h1>
}

export default NotFoundPage;