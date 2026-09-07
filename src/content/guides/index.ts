import type { ComponentType } from "react";
import { GuideBody as aiAgentsBody } from "./ai-agents";
import { GuideBody as distributionEngineBody } from "./distribution-engine";

export const guideBodies: Record<string, ComponentType> = {
  "how-to-build-your-ai-agent-workforce": aiAgentsBody,
  "distribution-engine": distributionEngineBody,
};
