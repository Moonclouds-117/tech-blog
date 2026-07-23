export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: Category;
  tags: string[];
  coverImage: string;
  author: string;
  publishDate: string;
  readingTime: number;
}

export type Category = '前端' | '后端' | '工具' | '随笔';

export interface CategoryInfo {
  key: Category;
  label: string;
  count: number;
}
