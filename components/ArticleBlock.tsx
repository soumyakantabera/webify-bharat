import type { Article } from "@/lib/seo-copy";

export function ArticleBlock({
  article,
  define,
}: {
  article: Article;
  define?: boolean;
}) {
  return (
    <section className={`section${define ? " section-soft" : ""}`}>
      <div className="container">
        <article className={`article-block${define ? " seo-define" : ""}`}>
          <div className="eyebrow">
            <span className="dot" /> {article.kicker}
          </div>
          <h2>
            {article.title}
            {article.accent ? (
              <>
                {" "}
                <span>{article.accent}</span>
              </>
            ) : null}
          </h2>
          {article.lead ? <p className="article-lead">{article.lead}</p> : null}
          {article.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          {article.bullets?.length ? (
            <ul>
              {article.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </article>
      </div>
    </section>
  );
}
