import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/lib/types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={post.coverImage}
          alt={`Cover image for ${post.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">{post.author.name}</span>
        </div>
        <Link href={`/blog/${post.id}`} className="block">
          <h2 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}