import './App.css';
import { useState } from 'react';
import TrainingsList from './components/TrainingsList';
import DataForm from './components/DataForm';

const startData = [
  { id: 'start-01', date: '2022-05-14', distance: '13.2' },
  { id: 'start-02', date: '2022-05-15', distance: '14.3' },
  { id: 'start-03', date: '2022-05-16', distance: '15.4' },
];

function App() {
  const [form, setForm] = useState({ date: '', distance: '' });

  const [records, setRecords] = useState(startData);

  const addRecord = (id, date, distance) => {
    let copyRecords = [...records];

    for (let item of copyRecords) {
      if (item.date === date) {
        item.distance = Number(item.distance) + Number(distance);
        setRecords(copyRecords);
        return;
      }
    }

    const newRecord = { id, date, distance };
    setRecords((prevRecords) => [...prevRecords, newRecord]);
  };

  const editRecord = (id, date, distance) => {
    deleteRecord(id);
    setForm({ date: date, distance: distance });
  };

  const deleteRecord = (id) => {
    setRecords((prevRecords) =>
      prevRecords.filter((record) => record.id !== id)
    );
  };

  return (
    <div className='mx-auto mt-5' style={{ width: '800px' }}>
      <DataForm form={form} setForm={setForm} addRecord={addRecord} />
      <TrainingsList
        records={records}
        deleteRecord={deleteRecord}
        editRecord={editRecord}
      />
    </div>
  );
}

export default App;
