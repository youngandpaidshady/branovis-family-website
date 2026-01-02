import familyData from '@/lib/family.json';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const blogPosts = familyData.blog || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-estate-cream via-white to-estate-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif text-heritage-brown text-center mb-4">
          Blog
        </h1>
        <p className="text-lg text-soft-black/70 text-center max-w-2xl mx-auto mb-12">
          News and updates from the Branovis family.
        </p>

        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-estate-border hover:shadow-xl transition-shadow"
              >
                {post.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-sm text-muted-gold mb-2">
                    {post.category} • {new Date(post.date).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-serif text-heritage-brown mb-2">{post.title}</h2>
                  {post.excerpt && (
                    <p className="text-soft-black/70 text-sm line-clamp-3">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-soft-black/70">Blog posts coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

