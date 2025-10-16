import { blogService } from '@/lib/blogService';
import PostList from '@/components/PostList';
import ClientSearch from '@/components/ClientSearch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Latest Articles',
  description: 'Discover the latest articles and insights on Nova Blog',
};

export default async function Home() {
  // Fetch posts server-side
  const posts = await blogService.getAllPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Nova Blog</h1>
      
      {/* Client-side search component */}
      <ClientSearch initialPosts={posts} />
    </main>
  );
}
