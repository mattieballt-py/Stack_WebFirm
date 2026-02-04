import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional().or(z.literal('')),
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  serviceType: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  timeline: z.string().min(1, 'Please select a timeline'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form data:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      content: 'hello@websitelondon.co.uk',
      link: 'mailto:hello@websitelondon.co.uk',
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      content: '+44 20 1234 5678',
      link: 'tel:+442012345678',
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      content: 'London, United Kingdom',
      link: null,
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      content: 'Mon-Fri: 9am-6pm',
      link: null,
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most websites are delivered in 2-3 weeks. E-commerce sites may take 3-4 weeks.',
    },
    {
      question: 'What do you need from me?',
      answer: 'Logo, brand colors, content, and images. We can help with any missing pieces.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! We offer flexible payment plans for projects over £2,000.',
    },
    {
      question: 'Will I be able to update the website myself?',
      answer: 'Absolutely! We provide training and use easy-to-update platforms.',
    },
  ];

  return (
    <>
      <SEO
        title="Contact Stack Websites London | Get Your Free Quote Today"
        description="Ready to get online? Contact Stack Websites London for a free quote. Fast, professional web design for London small businesses. Call +44 20 1234 5678."
        canonical="https://websitelondon.co.uk/contact"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">
              Let's Build Your <span className="text-gradient">Website</span>
            </h1>
            <p className="text-body mb-8">
              Get a free quote within 24 hours. No pressure, no obligation - just honest advice for your London business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card"
              >
                <h2 className="heading-sm mb-6">Get Your Free Quote</h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-800">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold">Success! We'll be in touch within 24 hours.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className={`input-field ${errors.name ? 'input-error' : ''}`}
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className={`input-field ${errors.email ? 'input-error' : ''}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Business Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className={`input-field ${errors.phone ? 'input-error' : ''}`}
                        placeholder="+44 20 1234 5678"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <input
                        {...register('businessName')}
                        type="text"
                        id="businessName"
                        className={`input-field ${errors.businessName ? 'input-error' : ''}`}
                        placeholder="Your Business Ltd"
                      />
                      {errors.businessName && (
                        <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Type & Budget Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        {...register('serviceType')}
                        id="serviceType"
                        className={`input-field ${errors.serviceType ? 'input-error' : ''}`}
                      >
                        <option value="">Select a service</option>
                        <option value="web-design">Custom Web Design</option>
                        <option value="ecommerce">E-commerce Website</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="maintenance">Website Maintenance</option>
                        <option value="branding">Branding & Logo</option>
                        <option value="custom">Custom Development</option>
                      </select>
                      {errors.serviceType && (
                        <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range *
                      </label>
                      <select
                        {...register('budget')}
                        id="budget"
                        className={`input-field ${errors.budget ? 'input-error' : ''}`}
                      >
                        <option value="">Select budget</option>
                        <option value="1000-2000">£1,000 - £2,000</option>
                        <option value="2000-3500">£2,000 - £3,500</option>
                        <option value="3500-5000">£3,500 - £5,000</option>
                        <option value="5000+">£5,000+</option>
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      When do you need it? *
                    </label>
                    <select
                      {...register('timeline')}
                      id="timeline"
                      className={`input-field ${errors.timeline ? 'input-error' : ''}`}
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">ASAP (1-2 weeks)</option>
                      <option value="soon">Soon (2-4 weeks)</option>
                      <option value="flexible">Flexible (1-2 months)</option>
                      <option value="planning">Just planning</option>
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={5}
                      className={`input-field ${errors.message ? 'input-error' : ''}`}
                      placeholder="Tell us about your business and what you're looking for..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours. No spam, we promise.
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sm text-primary-600 hover:text-primary-700"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <div className="text-sm text-gray-600">{info.content}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card bg-primary-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Response Guarantee</h3>
                <p className="text-sm text-gray-700 mb-4">
                  We respond to all quotes within 24 hours, usually much faster. Most clients get their proposal the same day.
                </p>
                <div className="flex items-center space-x-2 text-sm text-primary-700">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">24-hour response time</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Common Questions</h2>
            <p className="text-body max-w-2xl mx-auto">
              Quick answers to questions we hear most often.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
