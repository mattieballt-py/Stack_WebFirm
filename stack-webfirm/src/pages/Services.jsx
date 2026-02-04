import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      id: 'web-design',
      icon: PaintBrushIcon,
      title: 'Custom Web Design',
      description: 'Beautiful, modern websites designed specifically for your London business.',
      features: [
        'Mobile-first responsive design',
        'On-brand custom styling',
        'Fast loading times',
        'User-friendly interface',
        'Professional imagery',
        'Contact forms & CTAs',
      ],
      pricing: 'From £1,500',
      timeline: '2-3 weeks',
      ideal: 'Cafés, restaurants, trades, services',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCartIcon,
      title: 'E-commerce Websites',
      description: 'Sell online with a powerful, easy-to-manage online store.',
      features: [
        'Product catalog & inventory',
        'Secure payment processing',
        'Shopping cart & checkout',
        'Order management system',
        'Customer accounts',
        'Mobile shopping experience',
      ],
      pricing: 'From £2,500',
      timeline: '3-4 weeks',
      ideal: 'Boutiques, retailers, product businesses',
    },
    
    {
      id: 'development',
      icon: CodeBracketIcon,
      title: 'Custom Development',
      description: 'Bespoke features and integrations for unique needs.',
      features: [
        'Custom functionality',
        'API integrations',
        'Booking systems',
        'Member areas',
        'Custom dashboards',
        'Third-party connections',
      ],
      pricing: 'From £2,000',
      timeline: '3-6 weeks',
      ideal: 'Businesses with specific needs',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery Call',
      description: 'We learn about your business, goals, and requirements in a free 30-minute call.',
    },
    {
      step: '2',
      title: 'Proposal & Quote',
      description: 'Within 24 hours, you receive a detailed proposal with fixed pricing and timeline.',
    },
    {
      step: '3',
      title: 'Design & Build',
      description: 'Our team designs and builds your website, keeping you updated every step.',
    },
    {
      step: '4',
      title: 'Review & Revise',
      description: 'You review the site and request any changes. We offer unlimited revisions.',
    },
    {
      step: '5',
      title: 'Launch & Support',
      description: 'We launch your site and provide training and ongoing support.',
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '£1,500',
      description: 'Perfect for small businesses just getting started online',
      features: [
        'Up to 5 pages',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'Social media links',
        '2 rounds of revisions',
        '30 days support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '£2,500',
      description: 'Our most popular package for established businesses',
      features: [
        'Up to 10 pages',
        'Advanced design',
        'Contact & custom forms',
        'Full SEO optimization',
        'Blog setup',
        'Google Analytics',
        'Unlimited revisions',
        '90 days support',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'E-commerce',
      price: '£3,500',
      description: 'Complete online store for selling products',
      features: [
        'Up to 100 products',
        'Payment integration',
        'Inventory management',
        'Customer accounts',
        'Advanced SEO',
        'Email marketing setup',
        'Unlimited revisions',
        '90 days support',
      ],
      cta: 'Start Selling',
      popular: false,
    },
  ];

  return (
    <>
      <SEO
        title="Web Design Services London | Stack Websites - Pricing & Packages"
        description="Professional web design services for London businesses. Custom websites, e-commerce, SEO, and maintenance from £1,500. Fast delivery, quality guaranteed."
        canonical="https://websitelondon.co.uk/services"
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
              Web Design Services for London <span className="border-2 border-navy-900 rounded-lg px-3 py-1 inline-block">Businesses</span>
            </h1>
            <p className="text-body mb-8">
              From simple brochure sites to full e-commerce stores, we offer everything London small businesses need to succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card border border-gray-200"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="heading-sm mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-t border-gray-200">
                    <span className="text-sm text-gray-700">Pricing</span>
                    <span className="text-sm font-semibold text-gray-900">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-200">
                    <span className="text-sm text-gray-700">Timeline</span>
                    <span className="text-sm font-semibold text-gray-900">{service.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-b border-gray-200">
                    <span className="text-sm text-gray-700">Ideal for</span>
                    <span className="text-sm font-semibold text-gray-900 text-right">{service.ideal}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-sm text-gray-600">
                        <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button to="/contact" variant="primary" className="w-full">
                  Get a Quote
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Simple, Transparent Pricing</h2>
            <p className="text-body max-w-2xl mx-auto">
              Choose the package that fits your needs. All packages include hosting setup and training.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card relative ${pkg.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="heading-sm mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2 text-sm text-gray-600">
                      <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  to="/contact"
                  variant={pkg.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {pkg.cta}
                </Button>
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
            <p className="text-gray-600 mb-4">Need something custom? We can help.</p>
            <Button to="/contact" variant="outline">
              Request Custom Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">How It Works</h2>
            <p className="text-body max-w-2xl mx-auto">
              Our streamlined process gets you online fast without compromising on quality.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 text-primary-50">
              Get a free quote and see how we can help your London business grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="secondary" size="lg">
                Get Your Free Quote
              </Button>
              <Button to="/portfolio" variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white/10">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
