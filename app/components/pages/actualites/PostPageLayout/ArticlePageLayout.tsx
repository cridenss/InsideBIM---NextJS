import {articles, type ArticleKey} from '@/data/articles/articles'
import ReactMarkdown from "react-markdown"

interface ArticlePageLayoutProps {
    articleKey: ArticleKey
}

export default function ArticlePageLayout({articleKey}: ArticlePageLayoutProps) {
    const article = articles[articleKey]

    return(
        <main className="article-page">
            <section className="article-page__banner">
                <h2>{article.title}</h2>
            </section>
            <section className="article-page__content">
                <ReactMarkdown>{article.content}</ReactMarkdown>
            </section>
        </main>
    )
}