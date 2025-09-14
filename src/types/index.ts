export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'classic' | 'specialty' | 'vegan';
  size: 'small' | 'medium' | 'large';
  ingredients: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pizza' | 'appetizer' | 'dessert' | 'drink';
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  icon?: React.ReactNode;
  image?: string;
  githubLink?: string;
  liveLink?: string;
  demoLink?: string;
  link?: string;
  isLoading?: boolean;
  category?: 'ai-ml' | 'web-dev' | 'mobile' | 'data-science';
  status?: 'completed' | 'in-progress' | 'planned';
}

export interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  demoLink?: string;
  liveLink?: string;
  githubLink?: string;
  icon?: React.ReactNode;
}

export interface ProjectsSectionProps {
  limit?: number;
  showViewAll?: boolean;
  category?: string;
}