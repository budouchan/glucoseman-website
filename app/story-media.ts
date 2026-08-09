/**
 * Photo slots for the narrative sections.
 *
 * Every slot starts as `null` because the real photographs are not in the
 * repository yet. Sections skip a slot whose `src` is null, so the live site
 * never shows an empty frame or a broken image.
 *
 * To publish a photo:
 *   1. Commit the file under `public/`.
 *   2. Fill in `src`, `width`, `height` and a meaningful `alt` below.
 *      Set `note` when the image is an impression rather than a photograph,
 *      so the caption says so on the page.
 */

export type StoryMedia = {
  src: string | null;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  /** Rendered as a disclaimer. Use for renders or mock-ups. */
  note?: string;
};

export type StoryMediaSlot = "entryPoster" | "firstParts" | "supporters" | "together";

export const STORY_MEDIA: Record<StoryMediaSlot, StoryMedia> = {
  entryPoster: {
    src: null,
    width: 0,
    height: 0,
    alt: "エントリーNo.111 グルコースマンのポスター「もう、後戻りできなくなりました。」",
  },
  firstParts: {
    src: null,
    width: 0,
    height: 0,
    alt: "完成した最初のパーツを掲げるグルコースマンの仕掛け人",
  },
  supporters: {
    src: null,
    width: 0,
    height: 0,
    alt: "似顔絵の目標人数を掲げて集まった人たち",
  },
  together: {
    src: null,
    width: 0,
    height: 0,
    alt: "グルコースマンと仕掛け人が並んで両手を挙げている様子",
  },
};

export const hasMedia = (media: StoryMedia): media is StoryMedia & { src: string } =>
  Boolean(media.src) && media.width > 0 && media.height > 0;
