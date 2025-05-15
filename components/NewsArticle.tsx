import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type NewsArticleProps = {
  id: string;
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
  id,
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
    <article className={`rounded-lg overflow-hidden shadow-md bg-white ${featured ? 'border-l-4 border-accent' : ''}`}>
      {imageUrl && (
        <Link href={`/article/${id}`} className="block relative h-48 w-full hover:opacity-90 transition-opacity">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`object-cover ${featured ? 'object-center' : 'object-top'}`}
            sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            priority={featured}
          />
        </Link>
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-accent">{category}</span>
          <span className="text-sm text-gray-700">{new Date(date).toLocaleDateString()}</span>
        </div>
        <h2 className={`font-bold ${featured ? 'text-2xl' : 'text-xl'} mb-2`}>
          <Link href={`/article/${id}`} className="hover:text-accent transition-colors">
            {title}
          </Link>
        </h2>
        <p className="text-gray-800 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">By {author}</span>
          <Link href={`/article/${id}`} className="text-accent hover:underline font-medium">
            Read More
          </Link>
        </div>
        {children}
      </div>
    </article>
  );
}