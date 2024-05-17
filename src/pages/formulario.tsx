/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import { useCreateUser } from '@/hooks/useUsers';
import styles from '@/styles/formulario.module.css';
import { IUserCreate } from '@/types/user';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function Form() {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IUserCreate>();
	const { mutate: createUser } = useCreateUser();
	const onSubmit: SubmitHandler<IUserCreate> = (data) => {
		handleCreateUser(data);
	};

	function handleCreateUser(data: IUserCreate) {
		createUser(data, {
			onSuccess: () => {
				toast.success('Usuário criado com sucesso!')
				reset()
			},
			onError: () => {
				toast.error('Erro ao criar usuário!')
			}
		});
	}

	return (
		<>
			<Head>
				<title>Página do formulário</title>
				<meta name="description" content="Esta é a página do formulário" />
			</Head>

			<div className={styles.container}>
				<div className={styles.content}>
					<form onSubmit={handleSubmit(onSubmit)}>
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

						<button type="submit" data-type="confirm">
							Enviar
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
