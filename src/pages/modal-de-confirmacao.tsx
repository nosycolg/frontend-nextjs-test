/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';
import { ConfirmationMessage } from '@/components/ConfirmationMessage';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('confirmado');
	}

	function handleModalClose() {
		setModalIsOpen(false);
	}

	return (
		<>
			<Head>
				<title>Página de Confirmação</title>
				<meta name="description" content="Esta é a página de confirmação" />
			</Head>

			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			<Modal
				isOpen={modalIsOpen}
				title="Confirmação"
				onClose={handleModalClose}
				onConfirm={handleModalConfirm}>
				<ConfirmationMessage message="Deseja realmente confirmar?" />
			</Modal>
		</>
	);
}
