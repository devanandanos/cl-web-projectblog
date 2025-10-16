'use client';

import { useState } from 'react';
import { Post } from '@/lib/types';
import SearchBar from './SearchBar';
import PostList from './PostList';
import { blogService } from '@/lib/blogService';

interface SearchBarWrapperProps {
  initialPosts: Post[];
}

export default function SearchBarWrapper({ initialPosts }: SearchBarWrapperProps) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  
  const handleSearch = async (query: string) => {
    const results = await blogService.searchPosts(query, initialPosts);
    setFilteredPosts(results);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <PostList posts={filteredPosts} />
    </>
  );
}