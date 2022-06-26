import PropTypes from 'prop-types';
import TrainingsListItem from './TrainingsListItem';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

function TrainingsList(props) {
  const { records, deleteRecord, editRecord } = props;

  if (!records.length) {
    return null;
  }

  const sortedRecords = records.sort((a, b) => moment(b.date) - moment(a.date));

  const elements = sortedRecords.map((record) => {
    const { id, date, distance } = record;
    return (
      <TrainingsListItem
        key={id}
        record={record}
        deleteRecord={() => {
          deleteRecord(id);
        }}
        editRecord={() => {
          editRecord(id, date, distance);
        }}
      />
    );
  });

  return <ul className='list-unstyled list-group-item'>{elements}</ul>;
}

TrainingsList.propTypes = {
  records: PropTypes.array.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  editRecord: PropTypes.func.isRequired,
};

export default TrainingsList;
