import { useHistory } from 'react-router-dom';

const ButtonGoBack = () => {
    const history = useHistory();

    const onGoBack = () => {
        history.push(history.location?.state?.from ?? '/');
    }

    return (
            <button type="button" onClick={onGoBack}>Go Back</button>
    )
};

export default ButtonGoBack;