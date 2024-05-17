/**
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

import styles from '@/styles/lista.module.css';
import { useUsers } from '@/hooks/useUsers';
import Head from 'next/head';

export default function Lista() {
	const { data: users } = useUsers();

	return (
		<>
			<Head>
				<title>Página da lista</title>
				<meta name="description" content="Esta é a página da lista" />
			</Head>

			<div className={styles.container}>
				<div className={styles.content}>
					<h2>Lista de usuários</h2>

					<div data-list-container>
						{users?.map(user => (
							<div key={user.id} data-list-item>{`ID ${user.id} - ${user.name} (${user.email})`}</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
