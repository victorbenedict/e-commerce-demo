import BestSellers from '@/components/dashboard/BestSellers';
import LifetimeSales from '@/components/dashboard/LifetimeSales';
import { SaleStatistics } from '@/components/dashboard/SaleStatistics';

export default function Dashboard() {
  return (
    <>
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
    </>
  );
}
