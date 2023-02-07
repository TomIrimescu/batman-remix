import { Form, Link, useFetcher, useSubmit } from '@remix-run/react';
import { useState } from 'react';

import ModalConfirm from '~/components/util/ModalConfirm';

function ExpenseListItem({ id, title, amount }) {
  const [show, setShow] = useState(false);

  // const submit = useSubmit(); // submit is the programmatic equivalent of
  // <Form method='delete' action={`/expenses/${id}`}>

  // function deleteExpenseItemHandler() {
  // submit(null, {
  //   method: 'delete',
  //   action: `/expenses/${id}`,
  // });

  // const proceed = confirm('Are you sure? Do you want to delete this item?');
  // if (!proceed) {
  //   return;
  // }

  const fetcher = useFetcher();

  function deleteExpenseItemHandler() {
    fetcher.submit(null, {
      method: 'delete',
      action: `/expenses/${id}`,
    });
  }

  if (fetcher.state !== 'idle') {
    return (
      <article className='expense-item locked'>
        <p>Deleting...</p>
      </article>
    );
  }

  return (
    <>
      <ModalConfirm
        title={title}
        fetcher={deleteExpenseItemHandler}
        id={id}
        onClose={() => setShow(false)}
        show={show}
      >
        Do you want to delete this expense?
      </ModalConfirm>
      <article className='expense-item'>
        <div>
          <h2 className='expense-title'>{title}</h2>
          <p className='expense-amount'>${amount.toFixed(2)}</p>
        </div>
        <menu className='expense-actions'>
          <button onClick={() => setShow(true)}>Delete</button>
          {/* <Form method='delete' action={`/expenses/${id}`}>
          <button>Delete</button>
        </Form> */}
          <Link to={id}>Edit</Link>
        </menu>
      </article>
    </>
  );
}

export default ExpenseListItem;
