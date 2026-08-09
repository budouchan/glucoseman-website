import { StoryFigure } from "./story-figure";

/**
 * Why the challenge exists. Future extension point: the supporters who backed
 * each part, and the people holding the physical dolls, belong at the end of
 * this section — they are the same story, told with data.
 */
export function Story() {
  return (
    <section className="section story-section" id="story" aria-label="なぜ12万票なのか">
      <h2 className="section-heading story-heading">
        人とキャラクターが<br />一緒に成長する文化を<br />残したい。
      </h2>
      <p className="section-lead">そのために、12万票に挑戦します。</p>

      <h3 className="story-subheading">グルコースマンの原点は、人との出会い</h3>

      <StoryFigure slot="supporters" />

      <p className="section-body">
        人前で話すのが苦手だった中学生が、10年間で1万人以上の似顔絵を描いてきました。芸人の夢に挫折したあと、2009年に地域メディア「姫路の種」を立ち上げ、2021年からはデジタルコミュニティと地域コミュニティをつなぐ活動をスタート。
      </p>

      <StoryFigure slot="together" />

      <p className="story-closing">
        のっぽさんとゴン太くん。<br />
        ワクワクさんとゴロリ。<br />
        子どもの頃に憧れたあの関係を、<br />
        令和でもう一度。
      </p>
    </section>
  );
}
