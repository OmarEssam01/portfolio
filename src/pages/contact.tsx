import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';

type Props = {};

const Contact = (props: Props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' }); // reset
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Reach out to me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>Cairo, Egypt</p>
              <p className="mt-4">+201158058295</p>
              <p>omaressam01@gmail.com</p>
            </div>
          </div>

          <div className="col-span-2">
            <div className="grid gap-8 md:grid-cols-2">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e: any) => handleChange('name', e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e: any) => handleChange('email', e.target.value)}
                required
              />
            </div>

            <div className="mt-8">
              <Input
                placeholder="Subject"
                value={form.subject}
                onChange={(e: any) => handleChange('subject', e.target.value)}
                required
              />
            </div>

            <div className="mt-8">
              <TextArea
                placeholder="Message"
                value={form.message}
                onChange={(e: any) => handleChange('message', e.target.value)}
                required
              />
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                disabled={loading}
                className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && <p className="mt-3 text-green-600">✅ Message sent successfully!</p>}
              {status === 'error' && <p className="mt-3 text-red-600">❌ Something went wrong. Please try again.</p>}
            </div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default Contact;
