import { useRef, useState, useEffect } from 'react';
import styles from './LazyImage.module.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const element = imgRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`${styles.wrapper} ${className}`}>
      {isVisible ? (
        <>
          {!isLoaded && <div className={styles.placeholder} />}
          <img
            src={src}
            alt={alt}
            className={`${styles.img} ${isLoaded ? styles.loaded : ''}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        </>
      ) : (
        <div className={styles.placeholder} />
      )}
    </div>
  );
}
