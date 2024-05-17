import { ICity } from '@/types/city';
import { IUser, IUserCreate } from '@/types/user.d';

export const apiService = new class ApiService {
    async getUsers(): Promise<IUser[]> {
        const res = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.status != 200) {
            throw new Error('Um erro foi retornado');
        }

        const users = await res.json();
        return users;
    }

    async createUser(data: IUserCreate) {
        const res = await fetch('/api/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (res.status != 200) {
            throw new Error('Um erro foi retornado');
        }
    }
}