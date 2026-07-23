import { useParams, Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import LazyImage from '../../components/LazyImage/LazyImage';
import styles from './Article.module.css';

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h2>文章不存在</h2>
        <Link to="/" className={styles.backLink}>返回首页</Link>
      </div>
    );
  }

  const paragraphs = article.content
    .split('\n\n')
    .filter((p) => p.trim());

  return (
    <article className={styles.container}>
      <Link to="/" className={styles.backLink}>&larr; 返回文章列表</Link>
      <div className={styles.hero}>
        <LazyImage
          src={article.coverImage}
          alt={article.title}
          className={styles.heroImage}
        />
      </div>
      <div className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.category}>{article.category}</span>
          <span className={styles.date}>{article.publishDate}</span>
          <span className={styles.author}>{article.author}</span>
          <span className={styles.readingTime}>{article.readingTime} 分钟阅读</span>
        </div>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.tags}>
          {article.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        {paragraphs.map((para, i) => {
          if (para.startsWith('## ')) {
            return <h2 key={i} className={styles.h2}>{para.replace('## ', '')}</h2>;
          }
          if (para.startsWith('### ')) {
            return <h3 key={i} className={styles.h3}>{para.replace('### ', '')}</h3>;
          }
          if (para.startsWith('|')) {
            return <TableBlock key={i} text={para} />;
          }
          if (para.startsWith('```')) {
            return <CodeBlock key={i} text={para} />;
          }
          if (para.startsWith('- ')) {
            return (
              <ul key={i} className={styles.list}>
                {para.split('\n').filter(Boolean).map((li, j) => (
                  <li key={j}>{li.replace(/^- /, '')}</li>
                ))}
              </ul>
            );
          }
          if (/^\d+\.\s/.test(para)) {
            return (
              <ol key={i} className={styles.orderedList}>
                {para.split('\n').filter(Boolean).map((li, j) => (
                  <li key={j}>{li.replace(/^\d+\.\s/, '')}</li>
                ))}
              </ol>
            );
          }
          return <p key={i} className={styles.paragraph}>{para}</p>;
        })}
      </div>
    </article>
  );
}

function TableBlock({ text }: { text: string }) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split('|').filter(Boolean).map((h) => h.trim());
  const rows = lines.slice(2).map((line) =>
    line.split('|').filter(Boolean).map((c) => c.trim())
  );

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ text }: { text: string }) {
  const lines = text.split('\n');
  const lang = lines[0].replace('```', '').trim();
  const code = lines.slice(1, -1).join('\n');

  return (
    <div className={styles.codeWrapper}>
      {lang && <span className={styles.codeLang}>{lang}</span>}
      <pre className={styles.codeBlock}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
