import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>{'</>'}</span>
          <span className={styles.logoText}>TechBlog</span>
        </a>
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>首页</a>
          <a href="/" className={styles.navLink}>归档</a>
          <a href="/" className={styles.navLink}>关于</a>
        </nav>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
