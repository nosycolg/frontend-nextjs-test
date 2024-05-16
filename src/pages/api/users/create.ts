/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser, IUserCreate } from '@/types/user.d';

const users: IUser[] = [];

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		try {
			const data: IUserCreate = req.body;
			const newUser: IUser = {
				id: users.length + 1,
				name: data.name,
				email: data.email
			};

			users.push(newUser);

			return res.status(200).json(newUser);
		} catch (error) {
			return res.status(400);
		}
	} else {
		return res.status(500);
	}
};
