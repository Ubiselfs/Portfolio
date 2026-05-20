import {
  BriefcaseBusiness,
  Code2,
  Figma,
  Github,
  GraduationCap,
  Instagram,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  MonitorSmartphone,
  Palette,
  PenTool,
  Phone,
  ShoppingCart,
  Smartphone,
  Store,
} from 'lucide-react';

export const data = {
  navigation: ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'],

  profile: {
    // Update profile and contact details here.
    name: 'Peter Helou',
    title: 'UI/UX Website & Mobile App Developer',
    subtitle: 'Computer Science Student',
    location: 'Lebanon',
    email: 'peterhelou58@gmail.com',
    phone: '79 180 346',
    socials: [
      // Replace href values with your real social links.
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/peter-helou/', icon: Linkedin },
      { label: 'GitHub', href: 'https://github.com/Ubiselfs', icon: Github },
      { label: 'Instagram', href: 'https://www.instagram.com/peterhelou58/', icon: Instagram },
    ],
  },

  aboutParagraphs: [
    "I'm a Computer Science student passionate about web and mobile app development, and I'm currently looking for internship opportunities where I can gain real-world experience and continue growing as a developer.",
    "I've been working with Flutter, JavaScript, and web development, and I completed a Flutter e-commerce app as part of my learning and practice. Through this project, I gained hands-on experience building app screens, working through app flow, and understanding how a real mobile application comes together. I completed the main customer-facing side of a Flutter e-commerce app, which helped me understand how mobile applications are structured and built from idea to working product.",
    "Besides coding, I also enjoy design. I have experience in graphic design, and I like creating app interfaces in Figma. UI/UX interests me because I enjoy thinking about how an app should look, feel, and work for users. I also have experience managing WordPress e-commerce and a strong interest in e-commerce ecosystems.",
    "I'm motivated to keep improving in both development and design. I'm excited to learn from experienced teams, contribute to real projects, and become better at building complete web and mobile applications.",
  ],

  services: [
    { title: 'Website Development', text: 'Modern responsive websites built with clean structure and polished user experiences.', icon: Code2 },
    { title: 'Mobile App Development', text: 'Mobile app screens, flows, and interfaces with a focus on usability and clarity.', icon: Smartphone },
    { title: 'UI/UX Design', text: 'Thoughtful interface planning for products that feel intuitive and professional.', icon: LayoutTemplate },
    { title: 'Figma Interface Design', text: 'App and website interface concepts prepared with practical design thinking.', icon: Figma },
    { title: 'WordPress E-commerce Management', text: 'Product updates, availability management, order support, and store maintenance.', icon: Store },
    { title: 'Graphic Design', text: 'Marketing visuals, catalogs, flyers, and brand materials for digital and print use.', icon: Palette },
  ],

  skills: [
    'Flutter',
    'JavaScript',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Figma',
    'Graphic Design',
    'WordPress',
  ],

  experience: {
    company: 'All in Trading SARL',
    location: 'Baabda',
    dates: '22 July 2024 - 1 July 2025',
    roles: [
      {
        title: 'Customer Service & Data Entry Clerk',
        icon: MessageSquareText,
        bullets: [
          'Replied daily to dozens of customer support messages across digital channels, providing timely and effective assistance.',
          "Assisted customers throughout their purchase journey, including guiding them to the retailer's doorstep when needed.",
          'Collected and reported customer feedback to improve services and overall customer satisfaction.',
          'Managed website e-commerce maintenance: updated product availability, processed online orders, and added new products with accurate data entry.',
          'Entered thousands of product items into a newly adopted company system from the ground up, ensuring accurate setup and a smooth transition during the system change.',
        ],
      },
      {
        title: 'Junior Marketing Officer',
        icon: Megaphone,
        bullets: [
          'Managed website e-commerce maintenance, including product availability, online orders, and new product uploads.',
          'Designed and delivered professional PowerPoint presentations to train sales teams on multiple brands.',
          'Worked as part of the social marketing team, supporting online campaigns to boost brand visibility and customer engagement.',
        ],
      },
      {
        title: 'Graphic Design',
        icon: PenTool,
        bullets: [
          'Created marketing materials including catalogs, business cards, promotional sales flyers, and wholesale advertising content.',
          'Implemented daily promotional campaigns and developed catalogs for top pet brands.',
          'Operated a plotter and vinyl cutter, quickly mastering the equipment and producing high-quality printed materials for the company and its clients.',
          'Coached several new employees, helping them adapt quickly to company processes and tools.',
        ],
      },
    ],
  },

  education: [
    {
      school: 'Arab Open University',
      location: 'Antelias',
      dates: 'February 2023 - Present',
      degree: "Bachelor's Degree in Computer Science",
    },
    {
      school: 'College des Apotres',
      location: 'Jounieh',
      dates: 'October 2017 - June 2022',
      degree: 'Baccalaureat Francais General',
    },
  ],

  // Add real projects here when they are ready.
  projects: [
    {
      title: 'Grocerly E-commerce Mobile App',
      description: 'Flutter e-commerce mobile application project. Details will be added later.',
      tag: 'Flutter',
      icon: ShoppingCart,
    },
    {
      title: 'Grocerly UI/UX in Figma',
      description: 'Figma interface design for the Grocerly e-commerce mobile app. Details will be added later.',
      tag: 'Figma',
      icon: Figma,
    },
  ],

  // Add blog posts here later when you are ready to publish.
  blogPosts: [],

  contactItems: [
    { label: 'Email', value: 'peterhelou58@gmail.com', icon: Mail },
    { label: 'Phone', value: '79 180 346', icon: Phone },
    { label: 'Location', value: 'Lebanon', icon: MapPin },
    { label: 'Availability', value: 'Open to internships', icon: BriefcaseBusiness },
  ],

  resumeSkills: [
    { title: 'Development', icon: Code2, items: ['Flutter', 'JavaScript', 'Web Development', 'Mobile App Development'] },
    { title: 'Design', icon: Palette, items: ['UI/UX Design', 'Figma', 'Graphic Design'] },
  ],
};
