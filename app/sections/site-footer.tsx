import { RANKING_URL, SOCIAL_LINKS, VOTE_URL } from "../site-links";
import { VoteCall } from "./vote-call";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="closing-card">
        <h2>12万票で、完全召喚。</h2>
        <p>あなたの1票が、グルコースマンのパーツをひとつずつ呼び出します。</p>
        <VoteCall compact />
      </div>

      {SOCIAL_LINKS.length > 0 && (
        <ul className="social-links">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.url}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}

      <nav className="footer-links" aria-label="公式サイト">
        <a href={VOTE_URL}>◉ グルコースマンの投票ページへ ↗</a>
        <a href={RANKING_URL}>◉ ゆるキャラグランプリ2026 公式ランキング ↗</a>
      </nav>
    </footer>
  );
}
