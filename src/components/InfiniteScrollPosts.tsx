import React, { useState, useEffect } from "react";

// کامپوننت اصلی برای نمایش پست‌ها با اسکرول بی‌نهایت
const InfiniteScrollPosts: React.FC = () => {
  /* -----------------------------------------
     states
     -----------------------------------------*/
  // آرایهٔ پست‌هایی که تا این لحظه لود شده‌اند
  const [posts, setPosts] = useState<any[]>([]);
  // شمارهٔ صفحه‌ای که قرار است از API واکشی شود
  const [page, setPage] = useState<number>(1);
  // آیا هم‌اکنون در حال درخواست داده هستیم؟ جهت نمایش اسپینر و جلوگیری از درخواست موازی
  const [loading, setLoading] = useState<boolean>(false);
  // آیا هنوز داده‌ای برای بارگذاری باقی مانده است؟
  const [hasMore, setHasMore] = useState<boolean>(true);

  /* -----------------------------------------
     تابع بارگذاری پست‌های بعدی
     -----------------------------------------*/
  const loadMorePosts = async () => {
    // اگر در حال لود هستیم یا داده‌ای باقی نمانده، تابع زودتر خارج شود
    if (loading || !hasMore) return;

    setLoading(true); // شروع لود: اسپینر فعال می‌شود
    try {
      // فراخوانی API؛ از پارامترهای _page و _limit برای صفحه‌بندی استفاده می‌کنیم
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`
      );
      const newPosts = await response.json();

      /*
        setTimeout برای شبیه‌سازی تأخیر شبکه (۳ الی ۴ ثانیه)؛
        Math.random() * 1000 یک ثانیه رندوم اضافه می‌کند تا حس واقعی‌تر شود.
      */
      setTimeout(() => {
        if (newPosts.length === 0) {
          // اگر آرایه خالی بود یعنی دیتای جدید وجود ندارد
          setHasMore(false);
        } else {
          // الحاق پست‌های جدید به قبلی‌ها
          setPosts((prevPosts) => [...prevPosts, ...newPosts]);
          // افزایش شمارهٔ صفحه برای درخواست بعدی
          setPage((prevPage) => prevPage + 1);
        }
        setLoading(false); // پایان لود: اسپینر خاموش می‌شود
      }, Math.random() * 1000 + 3000);
    } catch (error) {
      console.error("خطا در بارگذاری پست‌ها:", error);
      setLoading(false);
    }
  };

  /* -----------------------------------------
     useEffect اول: بارگذاری اولیهٔ صفحهٔ اول
     -----------------------------------------*/
  useEffect(() => {
    loadMorePosts(); // هنگام مونت شدن کامپوننت اولین صفحه را می‌گیریم
  }, []);

  /* -----------------------------------------
     useEffect دوم: مانیتور کردن اسکرول کاربر
     -----------------------------------------*/
  useEffect(() => {
    const handleScroll = () => {
      /*
        window.innerHeight : ارتفاع قابل‌مشاهدهٔ پنجرهٔ مرورگر
        document.documentElement.scrollTop : فاصله‌ای که از بالای صفحه اسکرول شده است
        document.documentElement.offsetHeight : کل ارتفاع محتوای صفحه (چه دیده شود چه نه)

        اگر جمع ارتفاع پنجره + مقدار اسکرول شده >= (کل ارتفاع محتوا - 100px)
        یعنی کاربر تقریباً به انتهای صفحه رسیده است؛ آنگاه loadMorePosts صدا زده می‌شود.
      */
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loading &&
        hasMore
      ) {
        loadMorePosts();
      }
    };

    // اضافه کردن لیسنر اسکرول به window
    window.addEventListener("scroll", handleScroll);
    // تمیزکاری: حذف لیسنر هنگام آن‌ماونت یا تغییر وابستگی‌ها
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]); // وابسته به loading و hasMore تا شرایط جدید را لحاظ کند

  /* -----------------------------------------
     JSX خروجی
     -----------------------------------------*/
  return (
    <div className="infinite-scroll-container">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-content">{post.body}</p>
        </div>
      ))}

      {/* نمایشش اسپینر هنگام لود */}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}

      {/* پیام پایان داده‌ها */}
      {!hasMore && !loading && <div className="end-message">پایان پست‌ها</div>}
    </div>
  );
};

export default InfiniteScrollPosts;
