import Categories from '@/components/front/Categories';
import Featured from '@/components/front/Featured';
import { SearchForm } from '@/components/SearchForm';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center">
      <SearchForm />
      <Categories />
      <Featured />
    </div>
  );
}
