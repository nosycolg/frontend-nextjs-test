import { IToastMessage } from '@/types/toast-message';
import { useMessages } from '@/contexts/messages';
import styles from './style.module.css';

type ToastMessageProps = {
	content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ content: data }) => {
	const { removeMessage } = useMessages();

	const handleRemove = () => {
		removeMessage(data.id);
	};

	return (
		<div className={styles.container} data-toast-type={data.type} data-toast-id={data.id}>
			<span data-content>{data.message}</span>
			<span data-close onClick={handleRemove}>╳</span>
		</div>
	);
};
