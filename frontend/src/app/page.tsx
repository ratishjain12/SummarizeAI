import { FeatureSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { getHomePageData } from "@/data/loaders";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.feature-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData;
  console.log(blocks);
  if (!blocks) return <p>No sections found</p>;
  return <main>{blocks.map(blockRenderer)}</main>;
}
