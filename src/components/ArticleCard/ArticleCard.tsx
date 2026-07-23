import { Link } from 'react-router-dom';
import type { Article } from '../../types';
import LazyImage from '../LazyImage/LazyImage';
import TagList from '../TagList/TagList';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className={styles.card}>
      <Link to={`/article/${article.id}`} className={styles.coverLink}>
        <LazyImage
          src={article.coverImage}
          alt={article.title}
          className={styles.cover}
        />
      </Link>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{article.category}</span>
          <span className={styles.date}>{article.publishDate}</span>
        </div>
        <Link to={`/article/${article.id}`} className={styles.titleLink}>
          <h2 className={styles.title}>{article.title}</h2>
        </Link>
        <p className={styles.summary}>{article.summary}</p>
        <div className={styles.footer}>
          <TagList tags={article.tags} />
          <span className={styles.readingTime}>{article.readingTime} 分钟阅读</span>
        </div>
      </div>
    </article>
  );
}
