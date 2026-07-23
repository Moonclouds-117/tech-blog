import { useTheme } from './hooks/useTheme';
import { AppRouter } from './router';
import Header from './components/Header/Header';
import styles from './App.module.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.app}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className={styles.main}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
