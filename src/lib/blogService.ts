import { Post } from './types';
import { mockPosts } from './mockData';

export const blogService = {
  // Get all posts
  async getAllPosts(): Promise<Post[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPosts;
  },

  // Get a single post by ID
  async getPostById(id: string): Promise<Post> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    const post = mockPosts.find(post => post.id === id);
    
    if (!post) {
      throw new Error(`Post with ID ${id} not found`);
    }
    
    return post;
  },

  // Search posts by title (client-side filtering)
  async searchPosts(query: string, posts: Post[]): Promise<Post[]> {
    if (!query.trim()) return posts;
    
    const lowerCaseQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowerCaseQuery) || 
      post.excerpt.toLowerCase().includes(lowerCaseQuery)
    );
  }
};