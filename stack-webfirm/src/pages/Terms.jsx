import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        {
          text: 'By accessing and using the Stack Websites London website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.',
        },
      ],
    },
    {
      title: '2. Services Description',
      content: [
        {
          text: 'Stack Websites London provides web design, development, SEO optimization, and related digital services for small and medium-sized businesses. Our services include but are not limited to:',
        },
        {
          text: '• Custom website design and development',
        },
        {
          text: '• E-commerce website creation',
        },
        {
          text: '• Search engine optimization (SEO)',
        },
        {
          text: '• Website maintenance and support',
        },
        {
          text: '• Website hosting and domain management',
        },
      ],
    },
    {
      title: '3. Client Responsibilities',
      content: [
        {
          subtitle: 'Content Provision',
          text: 'Clients are responsible for providing accurate, timely, and complete content, including text, images, logos, and other materials required for their website. Delays in providing content may affect project timelines.',
        },
        {
          subtitle: 'Content Ownership',
          text: 'Clients must ensure they have the legal right to use all content provided to us, including images, text, trademarks, and other intellectual property.',
        },
        {
          subtitle: 'Feedback and Approval',
          text: 'Clients must provide timely feedback and approvals during the design and development process. Extended delays in feedback may result in project delays or additional costs.',
        },
      ],
    },
    {
      title: '4. Payment Terms',
      content: [
        {
          subtitle: 'Pricing',
          text: 'All prices are quoted in British Pounds (GBP) and are inclusive of VAT unless otherwise stated. Quoted prices are valid for 30 days from the date of quotation.',
        },
        {
          subtitle: 'Payment Schedule',
          text: 'Unless otherwise agreed in writing, payment terms are typically:\n• 50% deposit upon project commencement\n• 50% balance upon project completion before final delivery',
        },
        {
          subtitle: 'Late Payments',
          text: 'Late payments may incur interest charges and may result in suspension of services. We reserve the right to take legal action to recover unpaid amounts.',
        },
      ],
    },
    {
      title: '5. Project Timeline',
      content: [
        {
          text: 'We provide estimated timelines for project completion. While we strive to meet these timelines, they are estimates and may be affected by factors including:',
        },
        {
          text: '• Delays in client feedback or content provision',
        },
        {
          text: '• Changes in project scope or requirements',
        },
        {
          text: '• Technical issues or third-party service disruptions',
        },
        {
          text: '• Force majeure events',
        },
      ],
    },
    {
      title: '6. Revisions and Changes',
      content: [
        {
          text: 'Our standard packages include a specified number of revision rounds. Additional revisions beyond those included in your package may incur additional charges.',
        },
        {
          text: 'Significant changes to project scope after work has commenced may require a revised quotation and may affect the project timeline.',
        },
      ],
    },
    {
      title: '7. Intellectual Property',
      content: [
        {
          subtitle: 'Client Ownership',
          text: 'Upon receipt of full payment, clients receive ownership of the final website design and custom code developed specifically for their project.',
        },
        {
          subtitle: 'Third-Party Components',
          text: 'Websites may include third-party plugins, frameworks, libraries, or themes that are subject to their own licenses. Clients must comply with these licenses.',
        },
        {
          subtitle: 'Portfolio Rights',
          text: 'We reserve the right to showcase completed work in our portfolio and marketing materials unless otherwise agreed in writing.',
        },
      ],
    },
    {
      title: '8. Website Hosting and Maintenance',
      content: [
        {
          text: 'Hosting services are subject to separate agreements and payment terms. We strive for 99.9% uptime but cannot guarantee uninterrupted service due to factors beyond our control, including:',
        },
        {
          text: '• Scheduled maintenance',
        },
        {
          text: '• Third-party service provider issues',
        },
        {
          text: '• Cyber attacks or security threats',
        },
        {
          text: '• Force majeure events',
        },
      ],
    },
    {
      title: '9. Warranties and Disclaimers',
      content: [
        {
          subtitle: 'Service Warranty',
          text: 'We warrant that our services will be performed with reasonable skill and care. We will fix any defects in workmanship reported within 30 days of project delivery at no additional charge.',
        },
        {
          subtitle: 'Disclaimer',
          text: 'We make no warranties regarding website performance, search engine rankings, or business results. While we implement SEO best practices, search engine rankings depend on many factors outside our control.',
        },
        {
          subtitle: 'Third-Party Services',
          text: 'We are not responsible for failures or issues caused by third-party services, plugins, or hosting providers.',
        },
      ],
    },
    {
      title: '10. Limitation of Liability',
      content: [
        {
          text: 'To the maximum extent permitted by law, our total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific project giving rise to the claim.',
        },
        {
          text: 'We are not liable for any indirect, consequential, special, or punitive damages, including loss of profits, revenue, data, or business opportunities.',
        },
      ],
    },
    {
      title: '11. Termination',
      content: [
        {
          subtitle: 'Client Termination',
          text: 'Clients may terminate a project at any time by providing written notice. In such cases, clients will be charged for all work completed up to the termination date, and no refunds will be provided for amounts already paid.',
        },
        {
          subtitle: 'Our Termination Rights',
          text: 'We reserve the right to terminate services if:\n• Payment is not received as agreed\n• Client breaches these terms\n• Client behavior is abusive or threatening to our staff\n• Client requests work that is illegal or violates our ethical standards',
        },
      ],
    },
    {
      title: '12. Confidentiality',
      content: [
        {
          text: 'We will keep confidential all non-public information shared by clients during the course of our engagement. However, this does not extend to information that:',
        },
        {
          text: '• Is publicly available',
        },
        {
          text: '• We are required to disclose by law',
        },
        {
          text: '• Was already known to us before disclosure',
        },
      ],
    },
    {
      title: '13. Governing Law',
      content: [
        {
          text: 'These Terms of Service are governed by the laws of England and Wales. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
        },
      ],
    },
    {
      title: '14. Changes to Terms',
      content: [
        {
          text: 'We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the modified terms.',
        },
      ],
    },
    {
      title: '15. Contact Information',
      content: [
        {
          text: 'If you have any questions about these Terms of Service, please contact us:',
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
        title="Terms of Service | Stack Websites London"
        description="Read the terms and conditions for using Stack Websites London's web design and development services."
        canonical="https://websitelondon.co.uk/terms"
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
            <h1 className="heading-xl mb-6">Terms of Service</h1>
            <p className="text-body mb-4">
              These terms govern your use of Stack Websites London's services. Please read them carefully before engaging our services.
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
                  These Terms of Service ("Terms") constitute a legally binding agreement between you
                  ("Client," "you," or "your") and Stack Websites London ("we," "our," or "us") regarding
                  your use of our website and services.
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
                  By engaging our services or using our website, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
