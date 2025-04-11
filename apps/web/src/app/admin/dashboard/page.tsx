import BestSellers from './BestSellers';
import LifetimeSales from './LifetimeSales';
import { SaleStatistics } from './SaleStatistics';

export default function Dashboard() {
  return (
    <div className="max-w-5xl w-full h-full mx-auto pt-10 space-y-4 px-6">
      <h3 className="text-3xl font-bold">Dashboard</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <SaleStatistics />
          <BestSellers />
        </div>
        <div>
          <LifetimeSales />
        </div>
      </div>
    </div>
  );
}
