import { getChannelSet } from "@/lib/channels";

export function RentOwnBoard({ slug }: { slug: string }) {
  const data = getChannelSet(slug);
  if (!data) return null;

  return (
    <div className="rival-board">
      <div className="rival-ladders">
        {data.channels.map((rival) => (
          <article className="rival-co" key={rival.name}>
            <header>
              <span className="rival-stamp">How the app charges</span>
              <h3>{rival.name}</h3>
              <p>{rival.blurb}</p>
            </header>
            <div className="rival-stages">
              {rival.stages.map((stage, index) => (
                <div className="rival-stage" key={stage.name}>
                  <span className="rival-step" aria-hidden="true">{index + 1}</span>
                  <div className="rival-copy">
                    <strong>{stage.name}</strong>
                    <span>{stage.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <article className="rival-you">
        <span className="rival-stamp you">Your own channel</span>
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
