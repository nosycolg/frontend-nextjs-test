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

import styles from '@/styles/formulario.module.css';
import { IUserCreate } from '@/types/user';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function Form() {
	const { register, handleSubmit, formState: { errors } } = useForm<IUserCreate>();
	const onSubmit: SubmitHandler<IUserCreate> = (data) => {
		createUser(data);
	};

	async function createUser(data: IUserCreate) {
		try {
			await fetch('/api/users/create', {
				method: 'POST',
				headers: { "Content-Type": "application/json;charset=utf-8" },
				body: JSON.stringify(data)
			});
		} catch (error) {
			console.error(error);
		}
	}

	return (
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
	);
}
