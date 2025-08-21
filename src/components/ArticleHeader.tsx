import React from "react";
import bgImage from "../assets/bg.jpg"; // ایمپورت تصویر محلی از فولدر assets

/*
  ArticleHeader
  والد اصلی با کلاس article-header  ➜ در CSS شما قواعد Grid و ارتفاع 100svh دارد.
  - بخش متن (article-context): توضیح یا تیتر دلخواه داخل این سکشن قرار می‌گیرد.
  - بخش تصویر (header-image): عکسِ زمینهٔ تمام‌عرض/تمام‌ارتفاع از Unsplash.
*/
const ArticleHeader: React.FC = () => {
  return (
    <header className="article-header">
      {/* سکشن متن */}
      <section className="article-context">
        <h1>Your Inspiring and Motivational Title That Captures Attention</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          doloremque rem sequi ipsam, nesciunt odio aliquid? Assumenda neque
          debitis accusantium, sint quidem laborum quam animi ad eos aspernatur
          soluta. Quasi!
        </p>
      </section>

      {/* سکشن تصویر؛ img با کلاس header-image پوشش کامل گرید را خواهد داشت */}
      <img
        className="header-image"
        src={bgImage} // استفاده از تصویر ایمپورت‌شده
        alt="تصویر پس‌زمینه"
      />
    </header>
  );
};

export default ArticleHeader;
