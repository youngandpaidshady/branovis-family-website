import familyData from '@/lib/family.json';
import Image from 'next/image';

export default function GalleryPage() {
  const members = familyData.members || [];
  const allImages: string[] = [];

  // Collect all member photos
  members.forEach((member: any) => {
    if (member.photo && !member.photo.startsWith('/gallery/')) {
      allImages.push(member.photo);
    }
  });

  // Collect business images
  const businesses = familyData.businesses || [];
  businesses.forEach((business: any) => {
    if (business.images && Array.isArray(business.images)) {
      allImages.push(...business.images.slice(0, 2));
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-estate-cream via-white to-estate-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif text-heritage-brown text-center mb-4">
          Gallery
        </h1>
        <p className="text-lg text-soft-black/70 text-center max-w-2xl mx-auto mb-12">
          Moments and memories from the Branovis family.
        </p>

        {allImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((image, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg border border-estate-border"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-soft-black/70">Gallery images coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

