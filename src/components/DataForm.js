import PropTypes from 'prop-types';
import nextId from 'react-id-generator';

function DataForm(props) {
  const { form, setForm, addRecord } = props;

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.date === '' || form.distance === '') {
      return;
    }

    const regex = /^\d+(\.\d\d)?$/;
    const regexDistance = regex.test(form.distance);
    if (!regexDistance) {
      return;
    }

    addRecord(nextId(), form.date, form.distance);
    setForm({ date: '', distance: '' });
  };

  const onValueChange = (e) => {
    setForm((prevForm) => {
      return { ...prevForm, [e.target.name]: e.target.value };
    });
  };

  return (
    <div
      className='mp-3 p-3'
      style={{
        backgroundColor: 'gray',
        borderRadius: '4px',
        boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.15)',
        color: '#fff',
      }}
    >
      <form className='d-flex' style={{ width: '600px' }} onSubmit={onSubmit}>
        <div className='mb-3 mx-3' style={{ width: '200px' }}>
          <label className='d-block form-label text-center'>
            Дата (ДД.ММ.ГГ)
          </label>
          <input
            className='form-control'
            type='date'
            name='date'
            value={form.date}
            onChange={onValueChange}
          />
        </div>

        <div className='mb-3 mx-3' style={{ width: '200px' }}>
          <label className='d-block form-label text-center'>Пройдено, км</label>
          <input
            className='form-control'
            type='text'
            name='distance'
            placeholder='хх.хх'
            value={form.distance}
            onChange={onValueChange}
          />
        </div>

        <button
          type='submit'
          className='btn btn-secondary mx-3'
          style={{ width: '100px', height: '42px', marginTop: '30px' }}
        >
          OK!
        </button>
      </form>
    </div>
  );
}
DataForm.propTypes = {
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  addRecord: PropTypes.func.isRequired,
};

export default DataForm;
