// /expenses/add

import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';

import ModalRoute from '~/components/util/ModalRoute';
import ExpenseForm from '~/components/expenses/ExpenseForm';

import { addExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';
import { requireUserSession } from '~/data/auth.server';

export default function AddExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate('..');
  }

  return (
    <ModalRoute onClose={closeHandler}>
      <ExpenseForm />
    </ModalRoute>
  );
}

export async function action({ request }) {
  const userId = await requireUserSession(request);

  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData, userId);
  return redirect('/expenses');
}
