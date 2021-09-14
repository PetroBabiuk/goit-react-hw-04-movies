import { useHistory, useLocation } from 'react-router-dom';

const ButtonGoBack = () => {
    const location = useLocation();
    const history = useHistory();
    // console.log(location.state.from);

    const onGoBack = () => {
        history.push(location?.state?.from ?? '/movies');
    }

    return (
            <button type="buttun" onClick={onGoBack}>Go Back</button>
    )
};

export default ButtonGoBack;