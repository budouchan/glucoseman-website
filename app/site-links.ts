/**
 * Single place for outbound destinations and asset prefixing.
 *
 * Future sections (supporter walls, doll registries) should add their links
 * here instead of hardcoding URLs inside components.
 */

export const VOTE_URL = "https://yurugp.jp/characters/4524";
export const RANKING_URL = "https://yurugp.jp/vote/2026";
export const YURUNAVI_URL = "https://yurugp.jp/";

/** GitHub Pages serves the site from a sub path, so assets need the prefix. */
export const ASSET_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${ASSET_PREFIX}${path}`;

/**
 * Official social accounts. Left empty until the real URLs are supplied —
 * the footer renders nothing rather than shipping dead links.
 */
export const SOCIAL_LINKS: { label: string; url: string }[] = [];

export const formatNumber = (value: number) => new Intl.NumberFormat("ja-JP").format(value);
