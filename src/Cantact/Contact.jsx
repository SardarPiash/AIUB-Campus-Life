import React from 'react';
import InquieryInput from './InquieryInput';

export default function Contact() {
  return (
    <div className="bg-gray-100 border border-black rounded-md border-opacity-15">
      <main className="container mx-auto my-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <InquieryInput />
      </main>
    </div>
  );
}
