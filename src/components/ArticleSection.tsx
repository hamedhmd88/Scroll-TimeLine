
function ArticleSection() {
  const articles = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ]
    },
    {
      id: 2,
      title: "Consectetur Adipiscing Elit",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      content: [
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
        "Explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
      ]
    },
    {
      id: 3,
      title: "Sed Do Eiusmod Tempor",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      content: [
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
        "Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
      ]
    },
    {
      id: 4,
      title: "Ut Labore Et Dolore Magna",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      content: [
        "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
        "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        "Facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem."
      ]
    },
    {
      id: 5,
      title: "Quis Nostrud Exercitation",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop",
      content: [
        "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.",
        "Alias consequatur aut perferendis doloribus asperiores repellat nam libero tempore.",
        "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime."
      ]
    }
  ];

  return (
    <section className="article-section">
      <div className="articles-container">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img 
              src={article.image} 
              alt={article.title}
              className="article-image"
            />
            <div className="article-content">
              {article.content.map((paragraph, index) => (
                <p key={index} className="article-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ArticleSection;