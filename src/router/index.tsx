import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const Home = lazy(() => import('../pages/Home/Home'));
const Article = lazy(() => import('../pages/Article/Article'));
const Archive = lazy(() => import('../pages/Archive/Archive'));
const About = lazy(() => import('../pages/About/About'));

export function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
