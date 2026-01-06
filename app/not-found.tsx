import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold font-serif text-foreground mb-4">
          404
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

