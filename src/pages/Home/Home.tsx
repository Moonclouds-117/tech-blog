import { useState, useMemo } from 'react';
import { articles as allArticles } from '../../data/articles';
import type { Category } from '../../types';
import Sidebar from '../../components/Sidebar/Sidebar';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import styles from './Home.module.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const categories = useMemo(() => {
    const map: Record<Category, number> = {
      前端: 0,
      后端: 0,
      工具: 0,
      随笔: 0,
    };
    allArticles.forEach((a) => {
      map[a.category]++;
    });
    return (Object.entries(map) as [Category, number][]).map(([key, count]) => ({
      key,
      label: key,
      count,
    }));
  }, []);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    allArticles.forEach((a) => a.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filteredArticles = useMemo(() => {
    return allArticles.filter((a) => {
      if (activeCategory && a.category !== activeCategory) return false;
      if (activeTag && !a.tags.includes(activeTag)) return false;
      return true;
    });
  }, [activeCategory, activeTag]);

  return (
    <div className={styles.page}>
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        allTags={allTags}
        activeTag={activeTag}
        onCategoryChange={setActiveCategory}
        onTagChange={setActiveTag}
      />
      <main className={styles.content}>
        <h1 className={styles.heading}>
          {activeCategory || activeTag
            ? `${activeCategory || ''}${activeTag ? ` · ${activeTag}` : ''}`
            : '全部文章'}
          <span className={styles.count}>{filteredArticles.length} 篇</span>
        </h1>
        {filteredArticles.length === 0 ? (
          <div className={styles.empty}>暂无符合条件的文章</div>
        ) : (
          <div className={styles.grid}>
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
