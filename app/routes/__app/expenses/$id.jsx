// /expenses/<some-id> => /expenses/expense-1, /expenses/e-1

import Modal from '~/components/util/Modal';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import { useNavigate } from '@remix-run/react';

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}
