import Card from '@/components/Card';
import { parseExtraLinks } from '@/lib/parseExtraLinks';

export default function HomePage() {
  const tools = parseExtraLinks(process.env.PUBLIC_EXTRA_LINKS);

  return (
    <div className="dashboard-grid">
      {tools.map((tool) => (
        <Card key={`${tool.href}-${tool.title}`} {...tool} />
      ))}
    </div>
  );
}
