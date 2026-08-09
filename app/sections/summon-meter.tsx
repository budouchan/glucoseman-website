import { formatNumber } from "../site-links";
import type { CampaignData } from "../campaign-data";

type Props = {
  campaign: CampaignData;
  summonRate: number;
  summonDisplay: string;
};

/** Live numbers straight from the daily official snapshot. */
export function SummonMeter({ campaign, summonRate, summonDisplay }: Props) {
  const { currentPoint, targetPoint, previousPoint, rank, updatedAt } = campaign;
  const remainingPoint = Math.max(targetPoint - currentPoint, 0);
  const increase = currentPoint - previousPoint;

  return (
    <section className="section meter-section" id="meter" aria-label="現在の召喚率">
      <p className="score-label">現在の召喚率</p>
      <p className="rate">{summonDisplay}<span>%</span></p>

      <p className="point-total">
        <strong>{formatNumber(currentPoint)}</strong> PT
        <i>/</i>
        <b>{formatNumber(targetPoint)} PT</b>
      </p>

      <div
        className="progress-track"
        role="progressbar"
        aria-label="完全召喚までの達成率"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Number(summonDisplay)}
      >
        <span style={{ width: `${summonRate}%` }} />
      </div>

      <p className="remaining">完全召喚まで あと <strong>{formatNumber(remainingPoint)}</strong> PT</p>

      <div className="stat-card">
        <article>
          <span className="stat-icon" aria-hidden="true">♛</span>
          <div>
            <p>現在の順位</p>
            <strong>{rank}<small> 位</small></strong>
          </div>
        </article>
        <article>
          <span className="stat-icon" aria-hidden="true">↗</span>
          <div>
            <p>前回更新比</p>
            <strong>
              {increase >= 0 ? "↑ +" : "↓ "}{formatNumber(increase)}<small> PT</small>
            </strong>
            <em>（前回更新時点比）</em>
          </div>
        </article>
      </div>

      <p className="updated-at">
        最終更新 {updatedAt}
        <span>毎日12:00に公式ランキングを確認しています</span>
      </p>
    </section>
  );
}
