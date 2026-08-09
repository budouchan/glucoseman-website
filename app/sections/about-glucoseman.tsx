import { StoryFigure } from "./story-figure";

/**
 * Activity keywords. They are plain text today; when the NFT, Roblox, music
 * and doll pages exist, turn each entry into a link without touching layout.
 */
const ACTIVITIES = ["NFT", "Robloxゲーム", "AI楽曲", "リアル人形", "個展のパーツ作品", "着ぐるみ制作"];

export function AboutGlucoseman() {
  return (
    <section className="section" id="about" aria-label="グルコースマンとは">
      <h2 className="section-heading">グルコースマンとは</h2>

      <p className="lead-copy">
        自治体でもない。<br />
        企業でもない。<br />
        ひとりの男から始まった。
      </p>
      <p className="section-body">地域とデジタルコミュニティが育てるゆるキャラです。</p>

      <StoryFigure slot="entryPoster" />

      <p className="section-body">
        NFTから生まれ、デジタルから地域へ。まだバラバラな人や活動を、ひとつのキャラクターを中心につないでいく実験です。
      </p>

      <ul className="activity-tags">
        {ACTIVITIES.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>

      <p className="section-body">
        挑戦が始まった日、グルコースマンにはまだ足しかありませんでした。ひとりでは完成できません。一緒に育ててください。
      </p>

      <StoryFigure slot="firstParts" />
    </section>
  );
}
