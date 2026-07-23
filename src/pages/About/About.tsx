import styles from './About.module.css';

const techStack = [
  'React 18',
  'TypeScript',
  'Vite',
  'React Router v6',
  'CSS Modules',
  'Axios',
  'IntersectionObserver',
  'GitHub Pages',
];

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>关于本站</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>关于我</h2>
        <p>
          一名热爱技术的前端开发者，专注于 Web 开发与性能优化。这个博客是我记录学习历程、分享技术心得的地方。
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>关于博客</h2>
        <p>
          本博客基于 React + TypeScript 搭建，采用响应式设计，支持亮色/暗色主题切换，适配 PC、平板、移动端三端。所有内容通过 GitHub Pages 托管，CI/CD 自动部署。
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>技术栈</h2>
        <div className={styles.techTags}>
          {techStack.map((t) => (
            <span key={t} className={styles.techTag}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>联系方式</h2>
        <div className={styles.contactItem}>
          <span className={styles.contactLabel}>GitHub</span>
          <span>Moonclouds-117</span>
        </div>
      </div>
    </div>
  );
}
