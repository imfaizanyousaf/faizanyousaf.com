import { Suspense } from "react";

import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import { Panel, PanelHeader, PanelTitle } from "../panel";

const GITHUB_USERNAME = "imfaizanyousaf";
const GITHUB_PROFILE_URL = "https://github.com/imfaizanyousaf";

export function GitHubContributionsSection() {
  return (
    <Panel id="github-contributions" className="py-8">
      <Suspense fallback={<GitHubContributionsFallback />}>
        <GitHubContributions
          contributions={getCachedContributions(GITHUB_USERNAME)}
          githubProfileUrl={GITHUB_PROFILE_URL}
        />
      </Suspense>
    </Panel>
  );
}
