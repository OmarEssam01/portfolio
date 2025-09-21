'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        setForm({ name: '', email: '', subject: '', message: '' });
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
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <form onSubmit={handleSubmit} className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about anything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="col-span-2">
          <div className="grid gap-8 md:grid-cols-2">
            <Input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="mt-8">
            <Input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required />
          </div>
          <div className="mt-8">
            <TextArea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
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
    </>
  );
};

export default ContactSection;
