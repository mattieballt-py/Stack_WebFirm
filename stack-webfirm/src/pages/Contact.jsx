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
  businessName: z.string().min(2, 'Business name is required'),
  name: z.string().min(2, 'Your name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().or(z.literal('')),
  frustration: z.string().min(1, 'Please select an option'),
  currentSite: z.string().optional().or(z.literal('')),
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
              Get Your £1,999 Website
            </h1>
            <p className="text-body mb-8">
              Fixed price. No surprises. Reply in 2 hours. For London small businesses only.
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

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4 p-6 bg-white rounded-xl">
                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Business Name
                    </label>
                    <input
                      {...register('businessName')}
                      type="text"
                      id="businessName"
                      placeholder="Joe's Coffee (Shoreditch)"
                      className={`w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${errors.businessName ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
                    )}
                  </div>

                  {/* Your Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      placeholder="Joe Smith"
                      className={`w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${errors.name ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        placeholder="joe@joescoffee.co.uk"
                        className={`w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${errors.email ? 'border-red-500' : ''}`}
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        placeholder="020 7946 0123"
                        className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Frustration Dropdown */}
                  <div>
                    <label htmlFor="frustration" className="block text-sm font-medium text-slate-700 mb-1">
                      What's your biggest website frustration right now?
                    </label>
                    <select
                      {...register('frustration')}
                      id="frustration"
                      className={`w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${errors.frustration ? 'border-red-500' : ''}`}
                      required
                    >
                      <option value="">Select one...</option>
                      <option value="no-google">"No one finds us on Google"</option>
                      <option value="mobile">"Site looks dated on mobile"</option>
                      <option value="bookings">"No online bookings/enquiries"</option>
                      <option value="broken">"Took weeks to build, still broken"</option>
                      <option value="ai">"Want AI chat/booking but don't know how"</option>
                      <option value="other">Other (we'll call you)</option>
                    </select>
                    {errors.frustration && (
                      <p className="mt-1 text-sm text-red-600">{errors.frustration.message}</p>
                    )}
                  </div>

                  {/* Current Site */}
                  <div>
                    <label htmlFor="currentSite" className="block text-sm font-medium text-slate-700 mb-1">
                      Current site (or "none yet")
                    </label>
                    <input
                      {...register('currentSite')}
                      type="text"
                      id="currentSite"
                      placeholder="www.joescoffee.co.uk or type 'none'"
                      className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get My Custom Quote (2 mins)'}
                  </button>

                  {/* Trust Signals */}
                  <p className="text-xs text-slate-500 text-center">
                    ✅ London businesses only | Fixed price | Reply within 2hrs
                  </p>

                  {/* Email Alternative */}
                  <p className="text-sm text-slate-600 text-center pt-2 border-t border-slate-200">
                    or email{' '}
                    <a
                      href="mailto:hello@websitelondon.co.uk"
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      hello@websitelondon.co.uk
                    </a>
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
