/**
 * Modal
 *
 * - O modal fecha ao clicar em qualquer elemento, resolva o problema
 */

import { useState } from 'react';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserCreate } from '@/types/user';
import { useCreateUser } from '@/hooks/useUsers';
import toast from 'react-hot-toast';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const { mutate: createUser } = useCreateUser();
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IUserCreate>();
	const onSubmit: SubmitHandler<IUserCreate> = (data) => {
		handleCreateUser(data);
	};

	function handleCreateUser(data: IUserCreate) {
		createUser(data, {
			onSuccess: () => {
				handleModalConfirm()
				toast.success('Usuário criado com sucesso!')
				reset()
			},
			onError: () => {
				toast.error('Erro ao criar usuário!')
			}
		});
	}

	function handleModalConfirm() {
		setModalIsOpen(false);
	}

	function handleModalClose() {
		setModalIsOpen(false);
	}

	function renderModalContent() {
		return (
			<div data-modal-content className={styles['modal-form']}>
				<form>
					<input
						{...register('name', { required: 'Nome é obrigatório' })}
						type="text"
						placeholder="Nome"
					/>
					{errors.name && <p className={styles.error}>{errors.name.message}</p>}

					<input
						{...register('email', {
							required: 'E-mail é obrigatório',
							pattern: {
								value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
								message: 'E-mail inválido'
							}
						})}
						type="text"
						placeholder="E-mail"
					/>
					{errors.email && <p className={styles.error}>{errors.email.message}</p>}
				</form>
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>Página do modal</title>
				<meta name="description" content="Esta é a página do modal" />
			</Head>

			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal
				</button>
			</main>

			<Modal
				isOpen={modalIsOpen}
				title="Criar novo usuário"
				onClose={handleModalClose}
				key={'enter'}
				onConfirm={handleSubmit(onSubmit)}
				footer={{ confirmText: 'Criar usuário' }}
			>
				{renderModalContent()}
			</Modal>
		</>
	);
}
