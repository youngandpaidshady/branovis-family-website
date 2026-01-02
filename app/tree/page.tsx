import familyData from '@/lib/family.json';

export default function TreePage() {
  const members = familyData.members || [];
  const generations = [1, 2, 3];

  return (
    <div className="min-h-screen bg-gradient-to-b from-estate-cream via-white to-estate-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif text-heritage-brown text-center mb-4">
          Family Tree
        </h1>
        <p className="text-lg text-soft-black/70 text-center max-w-2xl mx-auto mb-12">
          Three generations of the Branovis family.
        </p>

        <div className="space-y-12">
          {generations.map((gen) => {
            const genMembers = members.filter((m: any) => m.generation === gen);
            return (
              <div key={gen}>
                <h2 className="text-2xl font-serif text-heritage-brown mb-6">
                  Generation {gen}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {genMembers.map((member: any) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-lg shadow-md p-6 border border-estate-border"
                    >
                      <h3 className="text-xl font-serif text-heritage-brown mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-gold mb-3">
                        {member.birthYear && `Born ${member.birthYear}`}
                      </p>
                      {member.bio && (
                        <p className="text-sm text-soft-black/70 line-clamp-3">{member.bio}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

