export interface PageMapItem {
  name: string;
  route: string;
  locale?: string;
  timestamp?: number;
  frontMatter?: Record<string, any>;
  meta?: Record<string, any>;
  active?: boolean;
}

export interface Item extends PageMapItem {
  title: string;
  type: string;
  children?: Item[];
  hidden?: boolean;
}

export interface PageItem extends PageMapItem {
  title: string;
  type: string;
  children?: PageItem[];
}
