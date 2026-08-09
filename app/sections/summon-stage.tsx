import Image from "next/image";
import { HERO_CHARACTER } from "../hero-character";
import { asset } from "../site-links";

/**
 * First view. Glucoseman is shown in his finished form from the very first
 * frame — the summon rate lives in the meter below, never on the character.
 */
export function SummonStage({ summonDisplay }: { summonDisplay: string }) {
  return (
    <header className="summon-stage">
      <p className="entry-badge">ゆるキャラグランプリ（ゆるバース）2026 出場中</p>

      <h1 className="stage-title">
        グルコースマンを、<br />
        12万票で<br />
        完全召喚する。
      </h1>

      <p className="entry-meta">ENTRY No.111 ／ 兵庫県・姫路の種</p>

      <div className="hero-character">
        <Image
          src={asset(HERO_CHARACTER.src)}
          alt={HERO_CHARACTER.alt}
          width={HERO_CHARACTER.width}
          height={HERO_CHARACTER.height}
          priority
          unoptimized
        />
      </div>

      <a className="hero-scroll" href="#meter">
        現在の召喚率 <strong>{summonDisplay}<span>%</span></strong>
        <b aria-hidden="true">↓</b>
      </a>
    </header>
  );
}
