import { NextApiRequest, NextApiResponse } from 'next';

type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageUrl?: string;
  featured?: boolean;
  aspectRatio?: string; // Add aspect ratio control
};

const articles: Article[] = [
  {
    id: '1',
    title: 'Global Summit Addresses Climate Change Concerns',
    excerpt: 'World leaders gather to discuss urgent measures against rising global temperatures and extreme weather events.',
    category: 'Politics',
    date: '2023-06-15',
    author: 'Jane Smith',
    imageUrl: '/images/global.png',
    featured: true,
    aspectRatio: 'aspect-[16/9]' // Wider aspect ratio for featured
  },
  {
    id: '2',
    title: 'Tech Giant Unveils Revolutionary AI Assistant',
    excerpt: 'The new AI system promises to transform how we interact with technology in our daily lives.',
    category: 'Technology',
    date: '2023-06-14',
    author: 'John Doe',
    imageUrl: '/images/AI.png',
    aspectRatio: 'aspect-[4/3]' // Standard aspect ratio
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(articles);
}