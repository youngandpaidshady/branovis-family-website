import familyData from '@/lib/family.json';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = familyData.blog?.find((p: any) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-estate-cream via-white to-estate-cream py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-sm text-muted-gold mb-4">
            {post.category} • {new Date(post.date).toLocaleDateString()}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-heritage-brown mb-6">
            {post.title}
          </h1>
        </div>

        {post.image && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {post.content ? (
            <div
              className="text-soft-black/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-lg text-soft-black/70">{post.excerpt}</p>
          )}
        </div>

        {post.images && post.images.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.images.map((img: string, idx: number) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                <Image src={img} alt={`${post.title} image ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

