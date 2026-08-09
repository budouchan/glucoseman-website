import Image from "next/image";
import { asset } from "../site-links";
import { hasMedia, STORY_MEDIA, type StoryMediaSlot } from "../story-media";

/** Renders a narrative photo, or nothing at all while the slot is unfilled. */
export function StoryFigure({ slot }: { slot: StoryMediaSlot }) {
  const media = STORY_MEDIA[slot];
  if (!hasMedia(media)) return null;

  return (
    <figure className="story-figure">
      <Image src={asset(media.src)} alt={media.alt} width={media.width} height={media.height} unoptimized />
      {(media.caption || media.note) && (
        <figcaption>
          {media.caption}
          {media.note && <span className="story-figure-note">{media.note}</span>}
        </figcaption>
      )}
    </figure>
  );
}
