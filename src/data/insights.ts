export type InsightCategory = 'Panduan Import' | 'Berita Logistik' | 'Tips Bisnis';

export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: InsightCategory;
  date: string; // ISO date string
  image: string;
  content: string; // HTML or Markdown string for the dummy content
}

export const insightCategories: InsightCategory[] = [
  'Panduan Import',
  'Berita Logistik',
  'Tips Bisnis'
];

export const insights: InsightArticle[] = [];

export const getArticleBySlug = (slug: string): InsightArticle | undefined => {
  return insights.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: InsightCategory): InsightArticle[] => {
  return insights.filter(article => article.category === category);
};
