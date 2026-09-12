import type { ComponentType } from "react";

import { PostBody as geoVsSeoBody } from "./geo-vs-seo-misses-the-real-gap";
import { PostBody as humanizerBody } from "./how-to-make-ai-writing-sound-human-skill-included";
import { PostBody as aiSearchRewardsBody } from "./what-ai-search-actually-rewards";
import { PostBody as linkedinBody } from "./the-reason-your-linkedin-isn-t-growing-has-nothing-to-do-with-your-content";
import { PostBody as foundationBody } from "./the-missing-foundation-that-s-killing-your-marketing";
import { PostBody as briefingBody } from "./how-to-build-a-daily-briefing-system-with-ai";
import { PostBody as brandAlignedBody } from "./why-brand-aligned-marketing-wins";
import { PostBody as aeoBody } from "./how-to-rank-on-ai-search-in-2026-the-aeo-playbook-for-founders";

export const postBodies: Record<string, ComponentType> = {
  "geo-vs-seo-misses-the-real-gap": geoVsSeoBody,
  "how-to-make-ai-writing-sound-human-skill-included": humanizerBody,
  "what-ai-search-actually-rewards": aiSearchRewardsBody,
  "the-reason-your-linkedin-isn-t-growing-has-nothing-to-do-with-your-content": linkedinBody,
  "the-missing-foundation-that-s-killing-your-marketing": foundationBody,
  "how-to-build-a-daily-briefing-system-with-ai": briefingBody,
  "why-brand-aligned-marketing-wins": brandAlignedBody,
  "how-to-rank-on-ai-search-in-2026-the-aeo-playbook-for-founders": aeoBody,
};

