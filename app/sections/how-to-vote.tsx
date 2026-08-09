import { ShareButton } from "../share-button";
import { YURUNAVI_URL } from "../site-links";

const STEPS = [
  {
    title: "「ゆるナビ」にアクセス",
    body: "ゆるバース（ゆるキャラグランプリ）の公式サイトを開きます。",
  },
  {
    title: "投票IDを無料登録（初回のみ）",
    body: "メールアドレスを入力して空メールを送信。届いたURLからパスワードを設定するだけで完了です。",
  },
  {
    title: "毎日1回「投票する」をポチッ！",
    body: "ログインして、グルコースマンのページから投票ボタンを押してください。",
  },
];

export function HowToVote() {
  return (
    <section className="section" id="how-to-vote" aria-label="投票のはじめかた">
      <h2 className="section-heading">投票のはじめかた</h2>
      <p className="section-lead">スマホからカンタン。インターネット投票は1日1回できます。</p>

      <ol className="steps">
        {STEPS.map((step, index) => (
          <li key={step.title}>
            <span className="step-no" aria-hidden="true">STEP {index + 1}</span>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="note-strip">
        <span aria-hidden="true">💡</span>
        <span>
          現地での「決選投票」もあります。10月3日・4日は「GMOアリーナさいたま（けやきひろば）」の会場で、さらに応援できます。
        </span>
      </p>

      <p className="section-body">
        <a href={YURUNAVI_URL}>ゆるナビの公式サイトを開く ↗</a>
      </p>

      <div className="support-grid">
        <details className="support-card">
          <summary>
            <span className="support-icon phone" aria-hidden="true">＋</span>
            <span>
              <strong>ホーム画面に<wbr />追加</strong>
              <small>毎日1票で<br />召喚を進めよう！</small>
            </span>
            <b aria-hidden="true">›</b>
          </summary>
          <div className="support-detail">
            <p><b>iPhone：</b>Safariの共有 →「ホーム画面に追加」</p>
            <p><b>Android：</b>Chromeのメニュー →「ホーム画面に追加」</p>
          </div>
        </details>

        <ShareButton />
      </div>
    </section>
  );
}
