import { getCampaignData } from "./campaign-data";
import { getSummonParts } from "./summon-parts";
import { AboutGlucoseman } from "./sections/about-glucoseman";
import { HowToVote } from "./sections/how-to-vote";
import { SiteFooter } from "./sections/site-footer";
import { StickyVote } from "./sections/sticky-vote";
import { Story } from "./sections/story";
import { SummonBoard } from "./sections/summon-board";
import { SummonMeter } from "./sections/summon-meter";
import { SummonStage } from "./sections/summon-stage";
import { VoteCall } from "./sections/vote-call";

export default async function Home() {
  const campaign = await getCampaignData();
  // Summon rate is the official vote count against the 120,000 target. It
  // measures how far the challenge has come, not how finished the costume is.
  const summonRate = Math.min((campaign.currentPoint / campaign.targetPoint) * 100, 100);
  const summonDisplay = summonRate.toFixed(1);
  const parts = getSummonParts(campaign.currentPoint, campaign.targetPoint);

  return (
    <main className="site-shell">
      <div className="campaign-grain" aria-hidden="true" />

      <SummonStage summonDisplay={summonDisplay} />

      <SummonMeter campaign={campaign} summonRate={summonRate} summonDisplay={summonDisplay} />

      <section className="section vote-block" aria-label="投票する">
        <VoteCall />
        <p>投票は1日1回。毎日投票できます。</p>
        <small>投票には「ゆるナビ」への無料登録（初回のみ）が必要です。</small>
      </section>

      <SummonBoard parts={parts} />

      <AboutGlucoseman />

      <HowToVote />

      <Story />

      <SiteFooter />

      <StickyVote />
    </main>
  );
}
