import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'dog training', name: 'Dog Training' },
    { id: 'sports', name: 'Sports' },
    { id: 'personal brands', name: 'Personal Brands' },
    { id: 'engineering', name: 'Engineering & Technical' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Café Mocha',
      category: 'dog training',
      location: 'Shoreditch',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&q=75&fm=webp',
      description: 'Modern coffee shop website with online ordering system and menu showcase.',
      features: ['Online Ordering', 'Menu Management', 'Mobile Responsive', 'SEO Optimized'],
      link: '#',
      results: {
        metric1: '40% increase in online orders',
        metric2: 'Launched in 10 days',
      },
    },
    {
      id: 2,
      title: 'Smith Plumbing Services',
      category: 'sports',
      location: 'Camden',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&q=75&fm=webp',
      description: 'Professional service website with booking system and emergency contact.',
      features: ['Online Booking', 'Service Areas Map', 'Emergency Hotline', 'Customer Reviews'],
      link: '#',
      results: {
        metric1: '3x more quote requests',
        metric2: '50+ 5-star reviews',
      },
    },
    {
      id: 3,
      title: 'Bella Boutique',
      category: 'retail',
      location: 'Notting Hill',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&q=75&fm=webp',
      description: 'E-commerce fashion store with 200+ products and secure checkout.',
      features: ['E-commerce Platform', 'Inventory Management', 'Payment Integration', 'Customer Accounts'],
      link: '#',
      results: {
        metric1: '£50k sales in first month',
        metric2: '200+ products online',
      },
    },
    {
      id: 4,
      title: 'Verde Yoga Studio',
      category: 'professional',
      location: 'Greenwich',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&auto=format&q=75&fm=webp',
      description: 'Wellness studio site with class schedules and membership signup.',
      features: ['Class Booking', 'Membership Portal', 'Event Calendar', 'Blog'],
      link: '#',
      results: {
        metric1: '80% online bookings',
        metric2: '100+ new members',
      },
    },
    {
      id: 5,
      title: 'The Gourmet Kitchen',
      category: 'restaurant',
      location: 'Chelsea',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&q=75&fm=webp',
      description: 'Fine dining restaurant with table reservations and event booking.',
      features: ['Table Reservations', 'Menu Showcase', 'Private Events', 'Gallery'],
      link: '#',
      results: {
        metric1: '90% table occupancy',
        metric2: '5-star Google rating',
      },
    },
    {
      id: 6,
      title: 'TechFix London',
      category: 'trades',
      location: 'Islington',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&q=75&fm=webp',
      description: 'IT support company with service packages and instant quote calculator.',
      features: ['Quote Calculator', 'Service Packages', 'Support Tickets', 'Knowledge Base'],
      link: '#',
      results: {
        metric1: '120+ new clients',
        metric2: '4.9/5 rating',
      },
    },
    {
      id: 7,
      title: 'Urban Threads',
      category: 'retail',
      location: 'Covent Garden',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&q=75&fm=webp',
      description: 'Streetwear brand with custom product filters and wishlist feature.',
      features: ['Product Filters', 'Wishlist', 'Size Guide', 'Brand Story'],
      link: '#',
      results: {
        metric1: '£75k monthly revenue',
        metric2: '2,000+ customers',
      },
    },
    {
      id: 8,
      title: 'Harper & Associates',
      category: 'professional',
      location: 'City of London',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&q=75&fm=webp',
      description: 'Law firm website with case studies and consultation booking.',
      features: ['Case Studies', 'Team Profiles', 'Consultation Booking', 'Resource Library'],
      link: '#',
      results: {
        metric1: '60% more consultations',
        metric2: 'Industry recognition',
      },
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <>
      <SEO
        title="Portfolio - London Website Design Projects | Stack Websites"
        description="View our portfolio of websites for London small businesses. From cafés to trades, see real results from real London businesses."
        canonical="https://websitelondon.co.uk/portfolio"
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
              Our London <span className="border-2 border-navy-900 rounded-lg px-3 py-1 inline-block">Projects</span>
            </h1>
            <p className="text-body mb-8">
              Real websites for real London businesses. See how we've helped cafés, shops, trades, and services succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 sticky top-20 z-40 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 -mx-8 -mt-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    width="800"
                    height="533"
                    loading="lazy"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                    {project.location}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-sm mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-700 mb-1">Result 1</div>
                      <div className="font-semibold text-gray-900">{project.results.metric1}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-700 mb-1">Result 2</div>
                      <div className="font-semibold text-gray-900">{project.results.metric2}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Results That Speak</h2>
            <p className="text-body max-w-2xl mx-auto">
              Our websites don't just look good - they deliver real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">£2M+</div>
              <div className="text-gray-600">Client Revenue</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Retention</div>
            </motion.div>
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
            <h2 className="heading-lg mb-6">Want Results Like These?</h2>
            <p className="text-lg mb-8 text-primary-50">
              Let's discuss your project and create a website that grows your London business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="secondary" size="lg">
                Start Your Project
              </Button>
              <Button to="/services" variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white/10">
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
