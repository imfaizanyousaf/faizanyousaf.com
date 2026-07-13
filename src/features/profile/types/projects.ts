export type Project = {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  link: string;
  skills: string[];
  description?: string;
  logo?: string;
  isExpanded?: boolean;
  skip_utm?: boolean;
};
