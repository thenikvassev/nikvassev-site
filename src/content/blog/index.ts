import type { ComponentType } from "react";

import { PostBody as linkedinBody } from "./the-reason-your-linkedin-isn-t-growing-has-nothing-to-do-with-your-content";
import { PostBody as foundationBody } from "./the-missing-foundation-that-s-killing-your-marketing";
import { PostBody as briefingBody } from "./how-to-build-a-daily-briefing-system-with-ai";
import { PostBody as brandAlignedBody } from "./why-brand-aligned-marketing-wins";
import { PostBody as aeoBody } from "./how-to-rank-on-ai-search-in-2026-the-aeo-playbook-for-founders";

export const postBodies: Record<string, ComponentType> = {
  "the-reason-your-linkedin-isn-t-growing-has-nothing-to-do-with-your-content": linkedinBody,
  "the-missing-foundation-that-s-killing-your-marketing": foundationBody,
  "how-to-build-a-daily-briefing-system-with-ai": briefingBody,
  "why-brand-aligned-marketing-wins": brandAlignedBody,
  "how-to-rank-on-ai-search-in-2026-the-aeo-playbook-for-founders": aeoBody,
};

