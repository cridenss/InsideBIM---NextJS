import PostCard from "@/components/pages/actualites/PostCard/PostCard";
import Banner from "@/components/shared/Banner/Banner";
import { articles } from "@/data/articles/articles";

export default function Actualites() {
  return (
    <main className="articles-page">
      <section className="articles-page__banner">
        <Banner
          title="Les actus BIM"
          description="Découvrez nos actualités BIM, un espace pour partager connaissances, inspirations et innovations."
        />
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