import { Post } from './types';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js, React, and TypeScript.',
    content: '<p>Next.js is a powerful React framework that makes building web applications easier and more efficient.</p><h2>Key Features</h2><ul><li>Server-Side Rendering</li><li>Static Site Generation</li><li>API Routes</li></ul>',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    author: {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    publishedAt: '2023-06-15T10:00:00Z',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: '2',
    title: 'Mastering TypeScript for React Development',
    excerpt: 'Discover how TypeScript can improve your React development experience with static typing and better tooling.',
    content: '<p>TypeScript has become an essential tool for many React developers.</p><h2>Benefits</h2><ul><li>Static type checking</li><li>Better IDE support</li><li>Improved code documentation</li></ul>',
    coverImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    author: {
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    publishedAt: '2023-07-22T14:30:00Z',
    tags: ['TypeScript', 'React', 'JavaScript']
  },
  {
    id: '3',
    title: 'Building Responsive UIs with Tailwind CSS',
    excerpt: 'Learn how to create beautiful, responsive user interfaces quickly using Tailwind CSS utility classes.',
    content: '<p>Tailwind CSS has revolutionized the way developers approach styling in web applications.</p><h2>Advantages</h2><ul><li>Utility-first approach</li><li>Consistent design system</li><li>Responsive design utilities</li></ul>',
    coverImage: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    publishedAt: '2023-08-05T09:15:00Z',
    tags: ['Tailwind CSS', 'CSS', 'Responsive Design']
  },
  {
    id: '4',
    title: 'State Management in React with Context API',
    excerpt: 'Explore how to manage application state effectively using React\'s built-in Context API.',
    content: '<p>State management is a crucial aspect of React applications.</p><h2>When to Use Context API</h2><ul><li>Theme data</li><li>User authentication</li><li>Localization preferences</li></ul>',
    coverImage: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    author: {
      name: 'Sarah Williams',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    publishedAt: '2023-09-12T16:45:00Z',
    tags: ['React', 'Context API', 'State Management']
  },
  {
    id: '5',
    title: 'Optimizing Performance in Next.js Applications',
    excerpt: 'Learn advanced techniques to improve the performance of your Next.js applications.',
    content: '<p>Performance optimization is crucial for providing a great user experience.</p><h2>Optimization Techniques</h2><ul><li>Image optimization</li><li>Code splitting</li><li>Static generation</li></ul>',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80',
    author: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg'
    },
    publishedAt: '2023-10-08T11:20:00Z',
    tags: ['Next.js', 'Performance', 'Optimization']
  },
  {
    id: '6',
    title: 'Building Accessible Web Applications',
    excerpt: 'Learn how to create web applications that are accessible to all users, including those with disabilities.',
    content: '<p>Web accessibility is about creating websites that can be used by everyone.</p><h2>Key Principles</h2><ul><li>Perceivable</li><li>Operable</li><li>Understandable</li><li>Robust</li></ul>',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    publishedAt: '2023-11-15T13:40:00Z',
    tags: ['Accessibility', 'Web Development', 'ARIA']
  }
];