import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the different weekly plans available at Sam Fresh?',
    answer: '',
  },
  {
    question: 'What vegetables are included in each plan?',
    answer: '',
  },
  {
    question: 'Can I choose the vegetables in my delivery?',
    answer: '',
  },
  {
    question: 'What if I need a custom vegetable plan?',
    answer: '',
  },
  {
    question: 'How does delivery cost fitting work?',
    answer: '',
  },
];

export function FAQ() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ's</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <button
              key={faq.question}
              className="w-full p-4 bg-gray-100 rounded-lg flex items-center justify-between hover:bg-gray-200 transition-colors"
            >
              <span className="font-medium text-left">{faq.question}</span>
              <ChevronDown size={20} />
            </button>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-green-600 text-white rounded-full">
            More FAQ's
          </button>
        </div>
      </div>
    </section>
  );
}