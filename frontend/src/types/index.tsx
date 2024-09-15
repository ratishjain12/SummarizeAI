export interface Image {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string | null;
    };
  };
  id: number;
  url: string;
  alternativeText: string | null;
}

export interface Link {
  id: number;
  url: string;
  text: string;
}

export interface HeroSectionProps {
  id: number;
  __component: string;
  Heading: string;
  Description: string;
  Image: Image;
  link: Link;
}

export interface FeatureProps {
  id: number;
  heading: string;
  subheading: string;
  icon: string;
}

export interface FeatureSectionProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  feature: FeatureProps[];
}
