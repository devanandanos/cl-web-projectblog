'use client';

import { useState } from 'react';
import { Post } from '@/lib/types';
import SearchBar from './SearchBar';
import PostList from './PostList';
import { blogService } from '@/lib/blogService';

interface ClientSearchProps {
  initialPosts: Post[];
}

export default function ClientSearch({ initialPosts }: ClientSearchProps) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  
  const handleSearch = async (query: string) => {
    const results = await blogService.searchPosts(query, initialPosts);
    setFilteredPosts(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-8">
        <PostList posts={filteredPosts} />
      </div>
    </div>
  );
}