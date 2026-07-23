import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import styles from './Archive.module.css';

export default function Archive() {
  const years = [...new Set(articles.map((a) => a.publishDate.slice(0, 4)))].sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div className={styles.archive}>
      <h1 className={styles.title}>文章归档</h1>
      <p className={styles.subtitle}>共 {articles.length} 篇文章</p>

      <div className={styles.timeline}>
        {years.map((year) => (
          <div key={year} className={styles.yearGroup}>
            <div className={styles.yearLabel}>{year}</div>
            {articles
              .filter((a) => a.publishDate.startsWith(year))
              .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
              .map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className={styles.archiveItem}
                >
                  <span className={styles.archiveDate}>{article.publishDate}</span>
                  <span className={styles.archiveTitle}>{article.title}</span>
                  <span className={styles.archiveCategory}>
                    {article.category}
                  </span>
                </Link>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
