import { IUserCreate } from '@/types/user';
import { apiService } from '@/services/api';
import { useMutation, useQuery } from 'react-query';

export function useUsers() {
    return useQuery({
        queryFn: () => apiService.getUsers(),
        queryKey: 'users',
    });
}

export function useCreateUser() {
    return useMutation({
        mutationFn: (data: IUserCreate) => apiService.createUser(data),
        mutationKey: 'users',
    });
}