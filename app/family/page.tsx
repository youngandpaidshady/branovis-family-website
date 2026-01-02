import familyData from '@/lib/family.json';

export default function FamilyPage() {
  const businesses = familyData.businesses || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-estate-cream via-white to-estate-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif text-heritage-brown text-center mb-4">
          Our Businesses
        </h1>
        <p className="text-lg text-soft-black/70 text-center max-w-2xl mx-auto mb-12">
          Three generations of excellence in construction, real estate, and humanitarian work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businesses.map((business: any) => (
            <div
              key={business.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-estate-border"
            >
              <div className="p-6">
                <h2 className="text-2xl font-serif text-heritage-brown mb-2">{business.name}</h2>
                <p className="text-soft-black/70 mb-4">{business.description}</p>
                <div className="text-sm text-muted-gold mb-4">
                  {business.industry} • Founded {business.yearFounded}
                </div>
                {business.services && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-heritage-brown mb-2">Services:</h3>
                    <ul className="list-disc list-inside text-sm text-soft-black/70 space-y-1">
                      {business.services.slice(0, 4).map((service: string, idx: number) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

