import styles from './style.module.css';

type ConfirmationMessageProps = {
    message: string;
};

export const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({ message }) => {
    return (
        <div className={styles.container}>
            <span data-content>{message}</span>
        </div>
    );
};
