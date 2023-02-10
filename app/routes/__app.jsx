import { Outlet } from '@remix-run/react';

import ExpensesHeader from '~/components/navigation/ExpensesHeader';
import { getUserFromSession } from '~/data/auth.server';
import expensesStyles from '~/styles/expenses.css';

export default function ExpensesAppLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}

export function loader({ request }) {
  return getUserFromSession(request);
}

export function links() {
  return [{ rel: 'stylesheet', href: expensesStyles }];
}
