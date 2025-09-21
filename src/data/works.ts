import { Work } from '@/types';

export const works: Work[] = [
  {
  id: 1,
  title: 'Instant – Real-Time Chat & Video Calling App',
  category: 'Web Application',
  thumbnailUrl: '/images/works/digital-marketing-app.png',
  description: `Instant is a responsive web application that enables real-time chat and video calling using Stream.io API. 
  It features a friend system to add, accept, and manage contacts, JWT-protected backend routes for secure access, 
  global state management with Zustand (including theme switching), and a modern UI built with Tailwind CSS and DaisyUI.`,
  publishedAt: '10 September 2025',
  images: [
    '/images/posts/post-06.png',
    '/images/posts/post-01.png',
    '/images/posts/post-thumbnail-3.png'
  ],
  previewUrl: 'https://instant-video-call.netlify.app/', // replace with your live URL if different
  featureList: [
    'Real-time chat and video calling with Stream.io API',
    'Friend system with add, accept, and manage contacts',
    'JWT authentication with secure protectRoute middleware',
    'Global state management with Zustand',
    'Dynamic theme switching across the app',
    'Efficient API handling with Axios',
    'Responsive, modern UI with Tailwind CSS and DaisyUI',
    'Cross-device compatibility and performance optimized',
  ],
  attributes: [
    {
      name: 'Client',
      value: 'Personal Project',
    },
    {
      name: 'Start Date',
      value: '01 August 2025', // adjust to when you started
    },
    {
      name: 'End Date',
      value: '15 August 2025', // adjust to when you finished
    },
    {
      name: 'Category',
      value: 'Web Development',
    },
    {
      name: 'Tech Stack',
      value: 'React, Node.js, Express, Tailwind CSS, DaisyUI, Zustand, Axios, JWT, Stream.io',
    },
    {
      name: 'Current Version',
      value: '1.0.0',
    },
    // {
    //   name: 'License',
    //   value: 'MIT',
    // },
  ],
},


  {
  id: 2,
  title: 'Evenza – Event Booking Platform',
  category: 'Web Application',
  thumbnailUrl: '/images/posts/post-thumbnail-2.png',
  description: `Evenza is a full-stack event booking platform built by a team of 4 developers. 
  It connects admins, organizers, and users, providing tools to manage events, bookings, and payments. 
  I focused on building the Admin Dashboard with Angular and TailwindCSS, creating scalable, reusable 
  components while integrating with a NestJS + MongoDB backend.`,
  publishedAt: '15 April 2025',
  images: [
    '/images/posts/post-thumbnail-6.png',
    '/images/works/project-management-system.png',
    '/images/works/erp-system.png'
  ],
  previewUrl: 'https://evenza-app.netlify.app', // replace with real/demo link if available
  featureList: [
    'Admin Dashboard with Angular & TailwindCSS',
    'Category Management – create and organize event categories',
    'Document Approval System – review and approve uploaded documents',
    'Organizer Wallet – track balances, withdrawals, and transactions',
    'Refund Request Management – approve or refund bookings',
    'Reusable shared components (Header, Sidebar, Data Table, Charts, Filters)',
    'Integration with NestJS APIs and MongoDB database',
    'Collaborative development with Git, feature branching, and code reviews',
    'Responsive, production-like SaaS experience',
  ],
  attributes: [
    {
      name: 'Team Size',
      value: '5 Developers',
    },
    {
      name: 'Role',
      value: 'Frontend & Backend (Admin Dashboard )',
    },
    {
      name: 'Start Date',
      value: 'April 2025', // adjust if needed
    },
    {
      name: 'End Date',
      value: 'May 2025', // adjust if needed
    },
    {
      name: 'Category',
      value: 'Web Development',
    },
    {
      name: 'Tech Stack',
      value: 'Angular, Tailwind CSS, NestJS, MongoDB, Git',
    },
    {
      name: 'Current Version',
      value: '1.0.0',
    },
    {
      name: 'License',
      value: 'Private (Team Project)',
    },
  ],
}

  // {
  //   id: 3,
  //   title: 'Marketplace Website (Ebay Clone)',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/marketplace-website.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },

  // {
  //   id: 4,
  //   title: 'Garments Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/garments-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   title: 'POS System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/point-of-sale.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'Multi Vendor Ecommerce System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/ecommerce.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: 'Digital Ecommerce Website Design',
  //   category: 'UI/UX Design',
  //   thumbnailUrl: '/images/works/ecommerce-website-design.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: 'Digital Marketing App & Website',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/digital-marketing-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: 'Food Delivery System & Ecommerce',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/food-delivery-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   title: 'Project Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/project-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: 'Learning Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/learning-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 12,
  //   title: 'ERP System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/erp-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
];
