import { PenLine } from 'lucide-react';
import Card from '../components/Card.jsx';
import IconBadge from '../components/IconBadge.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Blog() {
  return (
    <>
      <SectionTitle>Blog</SectionTitle>
      <Card className="grid min-h-[360px] place-items-center text-center">
        <div>
          <IconBadge icon={PenLine} className="mx-auto h-16 w-16 rounded-3xl" />
          <h3 className="mt-6 text-3xl font-bold text-white">Coming Soon</h3>
        </div>
      </Card>
    </>
  );
}
