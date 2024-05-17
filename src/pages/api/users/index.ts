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
import { ApiMethod } from '@/decorators/method';
import { faker } from '@faker-js/faker/locale/pt_BR';

export default ApiMethod('GET')(async (req: NextApiRequest, res: NextApiResponse) => {
	const users: Array<IUser> = [
		{ id: faker.string.uuid(), name: 'Junior', email: 'junior@junior.com' },
		{ id: faker.string.uuid(), name: 'Pleno', email: 'pleno@pleno.com' },
		{ id: faker.string.uuid(), name: 'Senior', email: 'senior@senior.com' }
	];
	return res.status(200).json(users);
});
