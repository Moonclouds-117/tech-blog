import type { Category } from '../../types';
import styles from './Sidebar.module.css';

interface SidebarProps {
  categories: { key: Category; label: string; count: number }[];
  activeCategory: Category | null;
  allTags: string[];
  activeTag: string | null;
  onCategoryChange: (category: Category | null) => void;
  onTagChange: (tag: string | null) => void;
}

export default function Sidebar({
  categories,
  activeCategory,
  allTags,
  activeTag,
  onCategoryChange,
  onTagChange,
}: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.title}>分类</h3>
        <ul className={styles.list}>
          <li>
            <button
              className={`${styles.item} ${activeCategory === null ? styles.active : ''}`}
              onClick={() => onCategoryChange(null)}
            >
              全部
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.key}>
              <button
                className={`${styles.item} ${activeCategory === cat.key ? styles.active : ''}`}
                onClick={() => onCategoryChange(cat.key)}
              >
                {cat.label}
                <span className={styles.count}>{cat.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>标签</h3>
        <div className={styles.tags}>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.tag} ${activeTag === tag ? styles.tagActive : ''}`}
              onClick={() => onTagChange(activeTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
