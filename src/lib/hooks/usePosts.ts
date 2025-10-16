import { useQuery } from '@tanstack/react-query';
import { blogService } from '../blogService';
import { Post } from '../types';

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => blogService.getAllPosts(),
  });
};

export const usePost = (id: string) => {
  return useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => blogService.getPostById(id),
    enabled: !!id,
  });
};