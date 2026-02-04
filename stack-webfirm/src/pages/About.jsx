import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import {
  HeartIcon,
  BoltIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: BoltIcon,
      title: 'Speed & Quality',
      description: 'Fast delivery without cutting corners. We deliver exceptional websites in weeks, not months.',
    },
    {
      icon: HeartIcon,
      title: 'Client-First',
      description: 'Your success is our success. We build long-term relationships with every London business we work with.',
    },
    {
      icon: SparklesIcon,
      title: 'Modern & Fresh',
      description: 'We stay ahead of design trends and technology so your website never looks outdated.',
    },
    {
      icon: CheckBadgeIcon,
      title: 'Transparent & Honest',
      description: 'No hidden fees, no surprises. Clear pricing, realistic timelines, and honest communication.',
    },
  ];

  const team = [
    {
      name: 'Alex Carter',
      role: 'Founder & Lead Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format',
      bio: '10+ years designing websites for London businesses. Passionate about helping small businesses compete online.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format',
      bio: 'Full-stack developer specializing in fast, secure websites. Previously worked at Google.',
    },
    {
      name: 'James Wilson',
      role: 'SEO Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format',
      bio: 'SEO expert helping London businesses rank on Google. Over 50 first-page rankings achieved.',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Started Stack Websites',
      description: 'Founded with a mission to help London small businesses get online affordably.',
    },
    {
      year: '2021',
      title: '50 Websites Launched',
      description: 'Helped over 50 London businesses establish their online presence.',
    },
    {
      year: '2022',
      title: 'Award Recognition',
      description: 'Named "Best Small Business Web Designer" by London Business Awards.',
    },
    {
      year: '2023',
      title: '100+ Happy Clients',
      description: 'Crossed the 100-client milestone with a 4.9/5 average rating.',
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Pioneered AI-powered features for small business websites in London.',
    },
  ];

  const stats = [
    { value: '100+', label: 'Websites Built' },
    { value: '5 Years', label: 'In Business' },
    { value: '4.9/5', label: 'Client Rating' },
    { value: '98%', label: 'Client Retention' },
  ];

  return (
    <>
      <SEO
        title="About Stack Websites London | Your London Web Design Team"
        description="Meet the team behind Stack Websites London. We're passionate about helping small London businesses succeed online with modern, fast websites."
        canonical="https://websitelondon.co.uk/about"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-xl mb-6">
                We're Stack Websites <span className="border-2 border-navy-900 rounded-lg px-3 py-1 inline-block">London</span>
              </h1>
              <p className="text-body mb-6">
                A team of designers, developers, and digital marketers on a mission to help London small businesses thrive online.
              </p>
              <p className="text-body mb-8">
                We know what it's like to run a small business in London. The competition is fierce, costs are high, and you need results fast.
                That's why we specialize in creating beautiful, effective websites that don't break the bank or take forever to launch.
              </p>
              <Button to="/contact" size="lg">
                Work With Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format"
                alt="Stack Websites London team"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-lg mb-6">Our Mission</h2>
            <p className="text-body mb-6">
              To make professional web design accessible to every small business in London.
              We believe that a great website shouldn't cost £10,000 or take 6 months to build.
            </p>
            <p className="text-body">
              By combining modern technology, streamlined processes, and genuine care for our clients,
              we deliver websites that look amazing and drive real business results.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Our Journey</h2>
            <p className="text-body max-w-2xl mx-auto">
              From a one-person startup to London's trusted web design partner for small businesses.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary-200"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600"></div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Meet The Team</h2>
            <p className="text-body max-w-2xl mx-auto">
              A small, dedicated team of professionals who love what they do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-sm text-primary-600 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Why London Businesses Choose Us</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">We Understand London Business</h3>
                    <p className="text-gray-600 text-sm">Born and based in London, we understand the unique challenges of running a business here.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fast Turnaround</h3>
                    <p className="text-gray-600 text-sm">Launch-ready websites in 2-3 weeks, not months. We respect your time and business needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600 text-sm">Fixed prices, no surprises. You know exactly what you're paying from day one.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ongoing Support</h3>
                    <p className="text-gray-600 text-sm">We don't disappear after launch. We're here to help your business grow.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format"
                alt="Working together"
                className="rounded-2xl"
              />
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
            <h2 className="heading-lg mb-6">Let's Work Together</h2>
            <p className="text-lg mb-8 text-primary-50">
              Ready to take your London business online? Let's chat about your project.
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

export default About;
