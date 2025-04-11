import { faker } from '@faker-js/faker';
import { subDays, subWeeks, subMonths, isAfter, parseISO, startOfISOWeek, format } from 'date-fns';

faker.seed(1234);

const now = new Date();
const sixDaysAgo = subDays(now, 6);
const sixWeeksAgo = subWeeks(now, 6);
const sixMonthsAgo = subMonths(now, 6);

type TOrder = {
  orderId: string;
  customer: string;
  date: string;
  amount: string;
  item: string;
};

const orders: TOrder[] = [];

const totalOrders = faker.number.int({ min: 500, max: 600 });
let totalSales = 0;

for (let i = 0; i < totalOrders; i++) {
  const pastDate = faker.date.past({ years: 0.5 });
  const amount = parseFloat(faker.commerce.price());

  totalSales += amount;
  orders.push({
    orderId: faker.string.uuid(),
    customer: faker.person.fullName(),
    date: pastDate.toISOString(),
    amount: amount.toFixed(2),
    item: faker.commerce.productName(),
  } as TOrder);
}

const dailyCount = orders
  .filter((o) => isAfter(parseISO(o.date), sixDaysAgo))
  .reduce(
    (acc, order) => {
      const day = order.date.slice(0, 10);
      acc[day] = (acc[day] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

const weeklyCount = orders
  .filter((o) => isAfter(parseISO(o.date), sixWeeksAgo))
  .reduce(
    (acc, order) => {
      const weekStart = format(startOfISOWeek(new Date(order.date)), 'yyyy-MM-dd');
      acc[weekStart] = (acc[weekStart] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

const monthlyCount = orders
  .filter((o) => isAfter(parseISO(o.date), sixMonthsAgo))
  .reduce(
    (acc, order) => {
      const month = order.date.slice(0, 7);
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

export { orders, dailyCount, weeklyCount, monthlyCount, totalOrders, totalSales };
