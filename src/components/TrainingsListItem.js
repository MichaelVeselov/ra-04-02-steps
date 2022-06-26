import PropTypes from 'prop-types';

function TrainingsListItem(props) {
  if (!props) {
    return null;
  }

  const { record, deleteRecord, editRecord } = props;

  return (
    <li className='list-group-item d-flex' style={{ width: '600px' }}>
      <span
        className='mt-2 mx-auto list-group-item-label'
        style={{ width: '200px' }}
      >
        {record.date}
      </span>
      <span
        className=' mt-2 mx-auto list-group-item-label'
        style={{ width: '200px' }}
      >
        {record.distance}
      </span>
      <div className='list-item-btns-block'>
        <button className='btn me-3' onClick={editRecord}>
          {'\u270E'}
        </button>
        <button className='btn me-1' onClick={deleteRecord}>
          {'\u2718'}
        </button>
      </div>
    </li>
  );
}

TrainingsListItem.propTypes = {
  record: PropTypes.object.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  editRecord: PropTypes.func.isRequired,
};

export default TrainingsListItem;
