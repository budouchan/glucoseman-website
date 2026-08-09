/**
 * The summon board.
 *
 * "Summoning" is driven by votes, not by how far the physical costume has been
 * sewn. The target is split into seven equal vote bands, and each band summons
 * one part of Glucoseman. This keeps the board aligned with the campaign idea
 * that people and the character grow together.
 *
 * Future extension: a part can carry the supporters who backed it. Add the
 * field to `SummonPart` and resolve it in `getSummonParts` — no component
 * outside `sections/summon-board.tsx` reads these shapes.
 */

export const SUMMON_PART_COUNT = 7;

const PART_NAMES = ["右足", "左足", "右脚", "左脚", "からだ", "あたま", "手"] as const;

export type SummonPartStatus = "summoned" | "summoning" | "locked";

export type SummonPart = {
  id: string;
  name: string;
  /** 1-based position on the board. */
  order: number;
  /** Votes required before this part is fully summoned. */
  threshold: number;
  status: SummonPartStatus;
  /** Votes still needed for this part. Zero once it is summoned. */
  remaining: number;
};

export function getSummonParts(currentPoint: number, targetPoint: number): SummonPart[] {
  return PART_NAMES.map((name, index) => {
    const order = index + 1;
    const threshold = Math.ceil((targetPoint * order) / SUMMON_PART_COUNT);
    const opensAt = Math.ceil((targetPoint * index) / SUMMON_PART_COUNT);
    const status: SummonPartStatus =
      currentPoint >= threshold ? "summoned" : currentPoint >= opensAt ? "summoning" : "locked";

    return { id: `part-${order}`, name, order, threshold, status, remaining: Math.max(threshold - currentPoint, 0) };
  });
}

export const findSummoningPart = (parts: SummonPart[]) => parts.find((part) => part.status === "summoning");
