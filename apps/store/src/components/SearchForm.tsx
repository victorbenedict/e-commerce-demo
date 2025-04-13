import { Button } from '@repo/ui/components/base/button';
import { Label } from '@repo/ui/components/base/label';
import { SidebarInput } from '@repo/ui/components/base/sidebar';
import { Search } from 'lucide-react';

export function SearchForm({ ...props }: React.ComponentProps<'form'>) {
  return (
    <form {...props} className="flex justify-center items-center w-[500px] p-4 space-x-1">
      <div className="relative flex-1">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput id="search" className="h-8 pl-7" />
        <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
      </div>
      <Button variant="default" size={'sm'}>
        <Search className="pointer-events-none size-4 select-none" />
      </Button>
    </form>
  );
}
