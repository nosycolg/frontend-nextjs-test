import { useRef } from 'react';
import styles from './style.module.css';

type ModalProps = {
	children: React.ReactNode;
	title: string;
	isOpen: boolean;
	onClose?: (type: 'click' | 'esc', target: EventTarget) => void;
	onConfirm?: () => void;
	footer?: {
		hidden?: boolean;
		confirmText?: string;
		cancelText?: string;
	};
};

/* 
	Modal

	- Ao clicar no wrapper do modal, o modal deve ser fechado, porém esta ação deve ser ignorada caso o usuário clique em qualquer elemento dentro do modal
*/

export const Modal: React.FC<ModalProps> = ({ children, title, isOpen, ...props }) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	function handleCloseClick(e: React.MouseEvent) {
		if (e.target == wrapperRef.current || e.target == buttonRef.current || e.target == closeButtonRef.current) {
			props.onClose?.('click', e.target);
		}
	}

	function handleConfirmClick(e: React.MouseEvent) {
		props.onConfirm?.();
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
		if (e.key === 'Escape') props.onClose?.('esc', e.target);

		if (e.key === 'Enter') props.onConfirm?.();
	}

	if (!isOpen) return null;

	return (
		<div ref={wrapperRef} data-modal-wrapper className={styles.wrapper} onClick={handleCloseClick} onKeyDown={handleKeyDown}>
			<div data-modal-container>
				<header data-modal-header>
					<h2>{title}</h2>

					<button ref={closeButtonRef} data-modal-close onClick={handleCloseClick}>
						X
					</button>
				</header>

				{children}

				{!props.footer?.hidden && (
					<div data-modal-footer>
						<button ref={buttonRef} data-modal-cancel onClick={handleCloseClick}>
							{props.footer?.cancelText ?? 'Cancelar'}
						</button>

						<button data-modal-confirm onClick={handleConfirmClick} data-type="confirm">
							{props.footer?.confirmText ?? 'Confirmar'}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
