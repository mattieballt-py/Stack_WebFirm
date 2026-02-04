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
  ChevronDownIcon,
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
  const [openFaq, setOpenFaq] = useState(null);

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
      question: 'Why choose Stack Websites over other London web designers?',
      answer: 'We specialise exclusively in small London businesses. Unlike large agencies that take months and charge £10k+, we deliver professional websites in 2-3 weeks at a fixed £1,999 price. You\'ll work directly with our team (no account managers), get same-day responses, and we understand the unique challenges of running a small business in London. Plus, 98% of our clients come back for more work - our retention speaks for itself.',
    },
    {
      question: 'What if I don\'t have content, photos, or a logo ready?',
      answer: 'No problem at all - most of our clients don\'t! We can write your content, source professional stock photos, or connect you with affordable local photographers. Need a logo? We can design one or recommend trusted local designers. We\'ve launched hundreds of sites and know exactly how to help you get everything sorted quickly. The key is getting started - we\'ll guide you through every step.',
    },
    {
      question: 'How quickly can my London business get online?',
      answer: 'Most London businesses are live within 2-3 weeks from our first call. We understand that every day without a website is lost revenue. Our streamlined process means you could have a discovery call this week, approve designs next week, and be live before the end of the month. We also offer rush delivery for urgent launches - just ask.',
    },
    {
      question: 'What happens after my website launches?',
      answer: 'We don\'t disappear after launch! Every website includes 30 days of free support to handle any tweaks, questions, or issues. After that, we offer affordable monthly maintenance packages (from £150/month) covering updates, backups, security, and priority support. Many clients also return to us for SEO, additional features, or help growing their online presence. We\'re here for the long haul.',
    },
    {
      question: 'Do you only work with London businesses?',
      answer: 'Yes - London is our focus. We understand the local market, competition, and what London customers expect. We can meet you in person for coffee, visit your business, and truly understand your local customer base. This local expertise is why our clients see better results than working with overseas or non-London agencies.',
    },
    {
      question: 'How do I know you\'re legitimate and won\'t disappear with my money?',
      answer: 'Great question! We\'ve been serving London businesses since 2020 with over 100 successful projects. We work on a milestone payment system - you only pay as work is completed, never upfront. You can verify our portfolio, read our Google reviews, and we\'re happy to provide references from similar businesses. We\'re a registered UK company with a real London address and phone number. Your investment is safe with us.',
    },
    {
      question: 'Can you help my business show up on Google?',
      answer: 'Absolutely. Every website we build includes foundational SEO setup to help you rank locally. We optimize for London-specific searches, set up your Google Business Profile, and ensure your site is technically sound for search engines. For clients wanting to dominate their local market, we offer ongoing SEO services from £500/month, focusing on getting you to the top of Google for "your service + London" searches.',
    },
    {
      question: 'What if I need changes after seeing the first design?',
      answer: 'Revisions are completely normal and expected! Our packages include multiple revision rounds because we want you to love your site. We work closely with you to refine the design until it\'s exactly right. The goal is your complete satisfaction - we won\'t launch until you\'re thrilled with the result. Most clients are happy after 1-2 revision rounds, but we\'re flexible.',
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
                      className={`w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.businessName ? 'border-red-500' : ''}`}
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
                      className={`w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.name ? 'border-red-500' : ''}`}
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
                        className={`w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.email ? 'border-red-500' : ''}`}
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
                        className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                      className={`w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.frustration ? 'border-red-500' : ''}`}
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
                      className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="text-primary-600 hover:text-primary-700 font-medium"
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
            <h2 className="heading-lg mb-4">Everything London Businesses Ask Us</h2>
            <p className="text-body max-w-2xl mx-auto">
              Honest answers about pricing, process, and what makes us different. Still have questions? Just ask.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-6 w-6 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA after FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 p-8 bg-primary-50 rounded-xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              We're happy to chat! Book a free 15-minute call or send us a message above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+442012345678"
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Call: +44 20 1234 5678
              </a>
              <a
                href="mailto:hello@websitelondon.co.uk"
                className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
