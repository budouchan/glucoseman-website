import { VOTE_URL } from "../site-links";

/** The yellow call to action. `compact` is used for the closing repeat. */
export function VoteCall({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? "vote-cta vote-cta-secondary" : "vote-cta"} href={VOTE_URL}>
      <span className="fire" aria-hidden="true">🔥</span>
      <strong>今日の1票を投じる！</strong>
      <b aria-hidden="true">›</b>
    </a>
  );
}
