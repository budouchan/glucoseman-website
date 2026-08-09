import { formatNumber } from "../site-links";
import { findSummoningPart, SUMMON_PART_COUNT, type SummonPart } from "../summon-parts";

const STATE_MARK: Record<SummonPart["status"], string> = {
  summoned: "✓",
  summoning: "🔥",
  locked: "🔒",
};

const STATE_LABEL: Record<SummonPart["status"], string> = {
  summoned: "召喚済み",
  summoning: "召喚中",
  locked: "未召喚",
};

/**
 * Seven vote bands, seven parts. Future extension point: each tile can link to
 * the supporters behind that part once that data exists.
 */
export function SummonBoard({ parts }: { parts: SummonPart[] }) {
  const summoning = findSummoningPart(parts);
  const summonedCount = parts.filter((part) => part.status === "summoned").length;

  return (
    <section className="section" id="parts" aria-label="召喚の7段階">
      <h2 className="section-heading">召喚の7段階</h2>
      <p className="section-lead">
        12万票を7つに分けています。票が集まるごとに、グルコースマンのパーツがひとつずつ召喚されます。
      </p>

      <ol className="parts-board">
        {parts.map((part) => (
          <li key={part.id} className={`part-tile part-${part.status}`}>
            <span className="part-state" aria-hidden="true">{STATE_MARK[part.status]}</span>
            <span className="part-name">{part.name}</span>
            <span className="visually-hidden">{STATE_LABEL[part.status]}</span>
          </li>
        ))}
      </ol>

      <p className="parts-status">
        {summoning ? (
          <>
            いま召喚中：<strong>{summoning.name}</strong>
            <span>あと {formatNumber(summoning.remaining)} PT で召喚</span>
          </>
        ) : (
          <>
            <strong>完全召喚を達成しました</strong>
            <span>7つのパーツがすべて揃いました</span>
          </>
        )}
      </p>

      <p className="parts-count">
        召喚済み {summonedCount} ／ {SUMMON_PART_COUNT} パーツ
      </p>
    </section>
  );
}
