import Layout from '../components/Layout';
import NewsArticle from '../components/NewsArticle';

type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageUrl?: string;
  featured?: boolean;
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
  },
  {
    id: '2',
    title: 'Tech Giant Unveils Revolutionary AI Assistant',
    excerpt: 'The new AI system promises to transform how we interact with technology in our daily lives.',
    category: 'Technology',
    date: '2023-06-14',
    author: 'John Doe',
    imageUrl: '/images/AI.png',
  },
];

export default function Home() {
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);
  
  return (
    <Layout>
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-200">Breaking News</h2>
        {featuredArticle && (
          <div className="mb-8">
            <NewsArticle {...featuredArticle} />
          </div>
        )}
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Latest Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map(article => (
            <NewsArticle key={article.id} {...article} />
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Politics', 'Technology', 'Business', 'Sports', 'Entertainment', 'Health', 'Science', 'World'].map(category => (
            <div key={category} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">{category}</h3>
              <p className="text-sm text-gray-500 mt-1">Latest updates</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}