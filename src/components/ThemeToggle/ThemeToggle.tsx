import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`切换到${theme === 'light' ? '暗色' : '亮色'}主题`}
      title={`切换到${theme === 'light' ? '暗色' : '亮色'}主题`}
    >
      <span className={`${styles.icon} ${theme === 'light' ? styles.sun : styles.moon}`}>
        {theme === 'light' ? '☀' : '☾'}
      </span>
    </button>
  );
}
