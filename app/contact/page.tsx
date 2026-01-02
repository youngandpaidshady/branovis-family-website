'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to an API
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-estate-cream via-white to-estate-cream py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif text-heritage-brown text-center mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-soft-black/70 text-center max-w-2xl mx-auto mb-12">
          Get in touch with the Branovis family.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-heritage-brown mt-1" />
              <div>
                <h3 className="font-semibold text-heritage-brown mb-1">Email</h3>
                <a
                  href="mailto:contact@branovisfamily.cz"
                  className="text-soft-black/70 hover:text-heritage-brown"
                >
                  contact@branovisfamily.cz
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-heritage-brown mt-1" />
              <div>
                <h3 className="font-semibold text-heritage-brown mb-1">Phone</h3>
                <p className="text-soft-black/70">Available upon request</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-heritage-brown mt-1" />
              <div>
                <h3 className="font-semibold text-heritage-brown mb-1">Location</h3>
                <p className="text-soft-black/70">Prague, Czech Republic</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-estate-border">
            <h2 className="text-2xl font-serif text-heritage-brown mb-4">Send a Message</h2>
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-heritage-brown font-semibold">Thank you for your message!</p>
                <p className="text-soft-black/70 text-sm mt-2">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-soft-black mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-estate-border rounded-lg focus:ring-2 focus:ring-heritage-brown focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-soft-black mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-estate-border rounded-lg focus:ring-2 focus:ring-heritage-brown focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-soft-black mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-estate-border rounded-lg focus:ring-2 focus:ring-heritage-brown focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-heritage-brown text-white px-6 py-3 rounded-lg hover:bg-heritage-brown/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

