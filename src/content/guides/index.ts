import type { ComponentType } from "react";
import { GuideBody as aiAgentsBody } from "./ai-agents";
import { GuideBody as brandStrategyBody } from "./build-an-iconic-brand";
import { GuideBody as distributionEngineBody } from "./distribution-engine";

export const guideBodies: Record<string, ComponentType> = {
  "how-to-build-your-ai-agent-workforce": aiAgentsBody,
  "build-a-distribution-engine-the-ultimate-marketing-guide-for-founders":
    distributionEngineBody,
  "build-an-iconic-brand-the-brand-strategy-guide-for-founders":
    brandStrategyBody,
};
