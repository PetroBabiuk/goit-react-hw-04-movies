import { useHistory } from 'react-router-dom';


const ButtonGoBack = () => {
    const history = useHistory();

    return (
            <button onClick={() => history.goBack()}>Go Back</button>
    )
};

export default ButtonGoBack;