import type { NextConfig } from "next";

// GitHub Pages serves this repo at elianaferreira.github.io/resume/, so
// production builds need a basePath/assetPrefix; local dev stays at "/".
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "");
const basePath = isGithubActions && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
