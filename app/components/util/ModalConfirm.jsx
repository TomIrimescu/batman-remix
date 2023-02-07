export const ModalConfirm = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className='modal-confirm' onClick={props.onClose}>
      <div
        className='modal-confirm-content'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-confirm-header'>
          <h4 className='modal-confirm-title'>{props.title}</h4>
        </div>
        <div className='modal-confirm-body'>{props.children}</div>
        <div className='modal-confirm-footer'>
          <button onClick={props.fetcher} className='cta'>
            Yes
          </button>
          <button onClick={props.onClose} className='cta'>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
