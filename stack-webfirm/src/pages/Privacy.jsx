import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const Privacy = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you contact us or request a quote, we may collect personal information including your name, email address, phone number, business name, and details about your project requirements.',
        },
        {
          subtitle: 'Website Analytics',
          text: 'We use analytics tools to collect information about how visitors use our website, including pages visited, time spent on pages, and navigation patterns. This data is aggregated and anonymized.',
        },
        {
          subtitle: 'Cookies',
          text: 'Our website uses cookies to improve your browsing experience. Please see our Cookie Policy for more details about the cookies we use.',
        },
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          text: 'We use the information we collect to:',
        },
        {
          text: '• Respond to your inquiries and provide quotes for our web design services',
        },
        {
          text: '• Communicate with you about your project throughout the design and development process',
        },
        {
          text: '• Send you updates about your website, including maintenance notifications',
        },
        {
          text: '• Improve our website and services based on usage analytics',
        },
        {
          text: '• Send marketing communications (only if you have opted in to receive them)',
        },
      ],
    },
    {
      title: '3. Information Sharing',
      content: [
        {
          text: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
        },
        {
          text: '• With trusted service providers who assist us in operating our website and conducting our business (e.g., hosting providers, email services)',
        },
        {
          text: '• When required by law or to protect our rights and safety',
        },
        {
          text: '• With your explicit consent',
        },
      ],
    },
    {
      title: '4. Data Security',
      content: [
        {
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:',
        },
        {
          text: '• SSL encryption for data transmission',
        },
        {
          text: '• Secure data storage with access controls',
        },
        {
          text: '• Regular security assessments and updates',
        },
        {
          text: '• Staff training on data protection practices',
        },
      ],
    },
    {
      title: '5. Your Rights',
      content: [
        {
          text: 'Under UK data protection laws, you have the right to:',
        },
        {
          text: '• Access the personal information we hold about you',
        },
        {
          text: '• Request correction of inaccurate or incomplete information',
        },
        {
          text: '• Request deletion of your personal information',
        },
        {
          text: '• Object to processing of your personal information',
        },
        {
          text: '• Request restriction of processing',
        },
        {
          text: '• Data portability',
        },
        {
          text: '• Withdraw consent at any time',
        },
      ],
    },
    {
      title: '6. Data Retention',
      content: [
        {
          text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. Client project information is typically retained for 7 years for business and legal purposes.',
        },
      ],
    },
    {
      title: '7. Third-Party Services',
      content: [
        {
          text: 'Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.',
        },
      ],
    },
    {
      title: '8. Updates to This Policy',
      content: [
        {
          text: 'We may update this privacy policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The updated policy will be posted on this page with a revised "Last Updated" date.',
        },
      ],
    },
    {
      title: '9. Contact Us',
      content: [
        {
          text: 'If you have any questions about this privacy policy or wish to exercise your data protection rights, please contact us:',
        },
        {
          text: 'Email: hello@websitelondon.co.uk',
        },
        {
          text: 'Phone: +44 20 1234 5678',
        },
        {
          text: 'Address: London, United Kingdom',
        },
      ],
    },
  ];

  const lastUpdated = 'February 4, 2026';

  return (
    <>
      <SEO
        title="Privacy Policy | Stack Websites London"
        description="Learn how Stack Websites London collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        canonical="https://websitelondon.co.uk/privacy"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">Privacy Policy</h1>
            <p className="text-body mb-4">
              At Stack Websites London, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-600">Last Updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                <p className="text-gray-700 mb-0">
                  Stack Websites London ("we," "our," or "us") is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you visit our website or use our services.
                </p>
              </div>

              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-10"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  {section.content.map((item, idx) => (
                    <div key={idx} className="mb-4">
                      {item.subtitle && (
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.subtitle}</h3>
                      )}
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.text}</p>
                    </div>
                  ))}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 p-6 bg-gray-50 rounded-lg"
              >
                <p className="text-gray-700 mb-0">
                  By using our website and services, you acknowledge that you have read and understood this
                  Privacy Policy and agree to its terms.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
