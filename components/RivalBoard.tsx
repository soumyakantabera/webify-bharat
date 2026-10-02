import { getRival } from "@/lib/rivals";

export function RivalBoard({ slug }: { slug: string }) {
  const data = getRival(slug);
  if (!data) return null;

  return (
    <div className="rival-board">
      <div className="rival-ladders">
        {data.rivals.map((rival) => (
          <article className="rival-co" key={rival.name}>
            <header>
              <span className="rival-stamp">Their stages</span>
              <h3>{rival.name}</h3>
              <p>{rival.blurb}</p>
            </header>
            <ol>
              {rival.stages.map((stage, index) => (
                <li key={stage.name} style={{ animationDelay: `${0.05 + index * 0.08}s` }}>
                  <span className="rival-step">{index + 1}</span>
                  <div>
                    <strong>{stage.name}</strong>
                    <span>{stage.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
      <article className="rival-you">
        <span className="rival-stamp you">Why we are better</span>
        <h3>{data.youTitle}</h3>
        <p className="rival-you-line">{data.youLine}</p>
        <ul>
          {data.wins.map((win) => (
            <li key={win.label}>
              <strong>{win.label}</strong>
              <span>{win.detail}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
