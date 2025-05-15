import { ReactNode } from 'react';

type NewsArticleProps = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageUrl?: string;
  featured?: boolean;
  children?: ReactNode;
};

export default function NewsArticle({
  title,
  excerpt,
  category,
  date,
  author,
  imageUrl,
  featured = false,
  children,
}: NewsArticleProps) {
  return (
    <article className={`rounded-lg overflow-hidden shadow-md ${featured ? 'border-l-4 border-accent' : ''}`}>
      {imageUrl && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-accent">{category}</span>
          <span className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</span>
        </div>
        <h2 className={`font-bold ${featured ? 'text-2xl' : 'text-xl'} mb-2`}>{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">By {author}</span>
          <button className="text-accent hover:underline font-medium">Read More</button>
        </div>
        {children}
      </div>
    </article>
  );
}