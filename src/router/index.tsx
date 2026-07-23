import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const Home = lazy(() => import('../pages/Home/Home'));
const Article = lazy(() => import('../pages/Article/Article'));

export function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Suspense>
  );
}
