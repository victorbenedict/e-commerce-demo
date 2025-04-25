import CategorySection from '@/components/front/CategorySection';
import FeaturedSection from '@/components/front/FeaturedSection';
import { SearchForm } from '@/components/SearchForm';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center">
      <SearchForm />
      <CategorySection />
      <FeaturedSection />
    </div>
  );
}
