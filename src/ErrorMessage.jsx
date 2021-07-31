import transferErrorMessage from './errorMessages';
import './errorMessage.css';

const ErrorMessage = function ({ errorMessage }) {
    const warning = transferErrorMessage(errorMessage);
    return (
        <div className="error-message">{warning}</div>
    )
}

export default ErrorMessage;

