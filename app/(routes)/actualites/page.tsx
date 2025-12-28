import PostCard from "@/components/pages/actualites/PostCard/PostCard";
import { articles } from "@/data/articles/articles";

export default function Actualites() {
  return (
    <main className="articles-page">
      <section className="articles-page__banner">
        <h2>Les actus BIM</h2>
        <p>Description</p>
      </section>

      <section className="articles-page__grid">
        {Object.values(articles).map((article) => (
          <PostCard
            key={article.id}
            imageSrc={article.image}
            title={article.title}
            excerpt={article.excerpt}
            slug={article.slug}
          />
        ))}
      </section>
    </main>
  );
}