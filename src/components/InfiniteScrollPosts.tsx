import React, { useState, useEffect } from 'react';

const InfiniteScrollPosts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMorePosts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`);
      const newPosts = await response.json();
      setTimeout(() => {
        if (newPosts.length === 0) {
          setHasMore(false);
        } else {
          setPosts((prevPosts) => [...prevPosts, ...newPosts]);
          setPage((prevPage) => prevPage + 1);
        }
        setLoading(false);
      }, Math.random() * 1000 + 3000);
    } catch (error) {
      console.error('خطا در بارگذاری پست‌ها:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMorePosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 &&
        !loading && hasMore
      ) {
        loadMorePosts();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="infinite-scroll-container">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-content">{post.body}</p>
        </div>
      ))}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
      {!hasMore && !loading && (
        <div className="end-message">
          پایان پست‌ها
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollPosts;