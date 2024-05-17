/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { ToastMessage } from '@/components/ToastMessage';
import { useMessages } from '@/context/messages';
import { faker } from '@faker-js/faker/locale/pt_BR';
import Head from 'next/head';

export default function ContextApi() {
	const { messages, addMessage } = useMessages();

	function handleSuccessButtonClick() {
		addMessage({
			id: faker.string.uuid(),
			message: 'Mensagem de sucesso',
			type: 'success',
		});
	}

	function handleErrorButtonClick() {
		addMessage({
			id: faker.string.uuid(),
			message: 'Mensagem de erro',
			type: 'error',
		});
	}

	return (
		<>
			<Head>
				<title>Página do context API</title>
				<meta name="description" content="Esta é a página do context API" />
			</Head>

			<div className={styles.container}>
				<button type="button" onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>

			<div className={styles['toast-container']}>
				{messages.map((message) => (
					<ToastMessage key={message.id} content={message} />
				))}
			</div>
		</>
	);
}
