import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import ClientGrid from '../components/sections/ClientGrid';
import {
  RocketLaunchIcon,
  SparklesIcon,
  BoltIcon,
  CheckCircleIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

const Home = () => {
  const services = [
    {
      icon: RocketLaunchIcon,
      title: 'Fast Delivery',
      description: 'Launch-ready websites in 2-3 weeks, not months.',
    },
    {
      icon: SparklesIcon,
      title: 'Modern Design',
      description: 'Beautiful, on-brand designs that make you stand out.',
    },
    {
      icon: BoltIcon,
      title: 'Lightning Fast',
      description: 'Optimized for speed and Core Web Vitals.',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile First',
      description: 'Perfect on every device, every screen size.',
    },
    {
      icon: ChartBarIcon,
      title: 'SEO Ready',
      description: 'Built to rank on Google from day one.',
    },
    {
      icon: CheckCircleIcon,
      title: 'AI Powered',
      description: 'Smart automation for forms, chat, and more.',
    },
  ];

  const portfolioItems = [
    {
      title: 'Café Mocha',
      category: 'Coffee Shop',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format',
      description: 'Modern café website with online ordering',
    },
    {
      title: 'Smith Plumbing',
      category: 'Trades',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format',
      description: 'Professional service site with booking',
    },
    {
      title: 'Bella Boutique',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format',
      description: 'E-commerce store with 200+ products',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'The Daily Grind Café',
      location: 'Shoreditch',
      content: 'Stack Websites transformed our online presence. We launched in 10 days and saw a 40% increase in orders within the first month.',
      rating: 5,
    },
    {
      name: 'Mike Thompson',
      business: 'Thompson & Sons Electrical',
      location: 'Camden',
      content: 'Professional, fast, and exactly what we needed. Our customers love the new booking system. Best investment we made this year.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      business: 'Verde Yoga Studio',
      location: 'Notting Hill',
      content: 'Beautiful design and so easy to update. The team understood our brand perfectly. Highly recommend for small London businesses!',
      rating: 5,
    },
  ];

  const stats = [
    { value: '50+', label: 'London Businesses' },
    { value: '7 Days', label: 'Launch Time' },
    { value: '£1,999', label: 'Fixed Price' },
    { value: '2 Hours', label: 'Reply Time' },
  ];

  const clients = [
    { name: 'AI Society', svg: 'ai-society.svg' },
    { name: 'Imperial College London', svg: 'imperial.svg' },
    { name: 'KTH Royal Institute', svg: 'kth.svg' },
    { name: 'Institution of Mechanical Engineers', svg: 'insitution-mechanical-engineering.svg' },
    { name: 'Royal Academy of Engineering', svg: 'royal-academy-of-engineering.svg' },
    { name: 'Red Bull Racing F1', svg: 'red-bull-racing-f1-seeklogo 1.svg' },
    { name: 'Pathfinder Medical', svg: 'pathfinder-medical.svg' },
    { name: 'FibonacciHQ', svg: 'fibsail_white.svg' },
  ];

  return (
    <>
      <SEO />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Modern Website for London Businesses
              </h1>

              {/* Benefits Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Mobile-first design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700">SEO for local Google rankings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Fast hosting included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700">Launch in 7 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700">London support</span>
                </div>
              </div>

              

              {/* CTA Button */}
              <div className="mb-6">
                <Button to="/contact" size="lg" className="text-lg">
                  Get My Website →
                </Button>
              </div>

              {/* Trust Signal */}
              <p className="text-sm text-slate-600">
                50+ London businesses | Fixed price, no surprises | Reply within 2hrs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format"
                  alt="Modern web design"
                  className="rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-primary rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Grid */}
      <ClientGrid clients={clients} />

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Why London Businesses Choose Us</h2>
            <p className="text-body max-w-2xl mx-auto">
              We specialize in helping small London businesses get online quickly with websites that actually work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="heading-sm mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button to="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Recent London Projects</h2>
            <p className="text-body max-w-2xl mx-auto">
              See how we've helped other small businesses in London succeed online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-primary-600 font-semibold">{item.category}</div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button to="/portfolio" variant="outline" size="lg">
              View Full Portfolio
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">What London Businesses Say</h2>
            <p className="text-body max-w-2xl mx-auto">
              Real reviews from real London small business owners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                  <div className="text-sm text-primary-600">{testimonial.location}, London</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-lg mb-6">Ready to Get Online?</h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              Let's build a website that brings customers to your London business.
              Free quote, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="secondary" size="lg">
                Get Your Free Quote
              </Button>
              <Button
                href="tel:+442012345678"
                variant="ghost"
                size="lg"
                className="!text-white !border-white hover:!bg-white/10"
              >
                Call Us: +44 20 1234 5678
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
