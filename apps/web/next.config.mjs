// @ts-check
import withVercelToolbar from "@vercel/toolbar/plugins/next";
const nextConfig = {
  transpilePackages: ["ui"],
};
export default withVercelToolbar()(nextConfig);
