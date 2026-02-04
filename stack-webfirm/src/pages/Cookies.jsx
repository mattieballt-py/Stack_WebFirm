import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const Cookies = () => {
  const cookieTypes = [
    {
      type: 'Strictly Necessary Cookies',
      description: 'These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
      examples: [
        'Session cookies for maintaining your browsing session',
        'Security cookies for protecting against fraudulent activity',
        'Load balancing cookies for distributing traffic efficiently',
      ],
      duration: 'Session or up to 1 year',
      canDisable: false,
    },
    {
      type: 'Analytics and Performance Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.',
      examples: [
        'Google Analytics cookies for tracking page views and user behavior',
        'Performance monitoring cookies',
        'Error tracking cookies for identifying technical issues',
      ],
      duration: 'Up to 2 years',
      canDisable: true,
    },
    {
      type: 'Functionality Cookies',
      description: 'These cookies enable the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.',
      examples: [
        'Language preference cookies',
        'Region/location preference cookies',
        'User interface customization cookies',
      ],
      duration: 'Up to 1 year',
      canDisable: true,
    },
    {
      type: 'Marketing and Advertising Cookies',
      description: 'These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites.',
      examples: [
        'Social media platform cookies (Twitter, LinkedIn, Instagram)',
        'Advertising network cookies',
        'Remarketing cookies',
      ],
      duration: 'Up to 2 years',
      canDisable: true,
    },
  ];

  const sections = [
    {
      title: '1. What Are Cookies?',
      content: [
        {
          text: 'Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.',
        },
        {
          text: 'Cookies allow websites to remember your actions and preferences over time, so you don\'t have to keep re-entering them whenever you return to the site or browse from one page to another.',
        },
      ],
    },
    {
      title: '2. How We Use Cookies',
      content: [
        {
          text: 'Stack Websites London uses cookies to:',
        },
        {
          text: '• Ensure our website functions properly and securely',
        },
        {
          text: '• Analyze how visitors use our website to improve user experience',
        },
        {
          text: '• Remember your preferences and settings',
        },
        {
          text: '• Deliver relevant marketing content',
        },
        {
          text: '• Understand which marketing campaigns are most effective',
        },
      ],
    },
  ];

  const managementSection = {
    title: '4. Managing Cookies',
    content: [
      {
        subtitle: 'Browser Settings',
        text: 'Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience, as some features may not function properly.',
      },
      {
        subtitle: 'How to Manage Cookies:',
        text: '• Google Chrome: Settings > Privacy and security > Cookies and other site data\n• Mozilla Firefox: Options > Privacy & Security > Cookies and Site Data\n• Safari: Preferences > Privacy > Cookies and website data\n• Microsoft Edge: Settings > Cookies and site permissions',
      },
      {
        subtitle: 'Opt-Out Options',
        text: 'You can opt out of analytics cookies by installing browser plugins or extensions designed to block tracking. For Google Analytics specifically, you can install the Google Analytics Opt-out Browser Add-on.',
      },
    ],
  };

  const lastUpdated = 'February 4, 2026';

  return (
    <>
      <SEO
        title="Cookie Policy | Stack Websites London"
        description="Learn about how Stack Websites London uses cookies and how you can manage your cookie preferences."
        canonical="https://websitelondon.co.uk/cookies"
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
            <h1 className="heading-xl mb-6">Cookie Policy</h1>
            <p className="text-body mb-4">
              This policy explains how Stack Websites London uses cookies and similar technologies on our website.
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
              <div className="mb-12 p-6 bg-primary-50 border-l-4 border-primary-600 rounded-r-lg">
                <p className="text-gray-700 mb-0">
                  By continuing to use our website, you consent to our use of cookies as described in this policy.
                  You can manage your cookie preferences at any time through your browser settings.
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

              {/* Cookie Types Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Types of Cookies We Use</h2>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <motion.div
                      key={cookie.type}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{cookie.type}</h3>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            cookie.canDisable
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {cookie.canDisable ? 'Optional' : 'Required'}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{cookie.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Examples:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-semibold mr-2">Duration:</span>
                        <span>{cookie.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Management Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{managementSection.title}</h2>
                {managementSection.content.map((item, idx) => (
                  <div key={idx} className="mb-4">
                    {item.subtitle && (
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.subtitle}</h3>
                    )}
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.text}</p>
                  </div>
                ))}
              </motion.div>

              {/* Third-Party Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Some cookies on our website are set by third-party services we use, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Google Analytics - for website traffic analysis</li>
                  <li>Social media platforms (Twitter, LinkedIn, Instagram) - for social sharing functionality</li>
                  <li>Content delivery networks - for faster page loading</li>
                </ul>
                <p className="text-gray-700">
                  These third parties have their own privacy and cookie policies, and we have no control over their cookies.
                  We encourage you to review their policies for more information.
                </p>
              </motion.div>

              {/* Updates Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Updates to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal,
                  operational, or regulatory reasons. We encourage you to review this page periodically for any updates.
                </p>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="text-gray-700 space-y-1">
                  <p>Email: hello@websitelondon.co.uk</p>
                  <p>Phone: +44 20 1234 5678</p>
                  <p>Address: London, United Kingdom</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 p-6 bg-gray-50 rounded-lg"
              >
                <p className="text-gray-700 mb-0">
                  By using our website, you acknowledge that you have read and understood this Cookie Policy
                  and consent to our use of cookies as described.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cookies;
