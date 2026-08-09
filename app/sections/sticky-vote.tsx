import { VOTE_URL } from "../site-links";

/**
 * Always-reachable vote button. Kept CSS-only so it survives the static
 * GitHub Pages export without any client-side JavaScript.
 */
export function StickyVote() {
  return (
    <div className="sticky-vote">
      <a href={VOTE_URL}>
        <span className="fire" aria-hidden="true">🔥</span>
        <strong>今日の1票を投じる！</strong>
        <b aria-hidden="true">›</b>
      </a>
    </div>
  );
}
