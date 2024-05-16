/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser } from '@/types/user.d';

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const users: Array<IUser> = [
				{ id: 1, name: 'Junior', email: 'usuario1@example.com' },
				{ id: 2, name: 'Pleno', email: 'usuario2@example.com' },
				{ id: 3, name: 'Senior', email: 'usuario2@example.com' }
			];
			return res.status(200).json(users);
		} catch {
			return res.status(400);
		}
	} else {
		return res.status(500);
	}
};
