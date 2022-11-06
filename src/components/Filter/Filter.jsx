import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/PhoneBookRedux/FilterSlice';
import { getFilter } from 'redux/PhoneBookRedux/selector';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeName = event => {
    dispatch(changeFilterAction(event.target.value))
  };

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '20px',
        }}
      >
        Find contacts by name
      </p>
      <label>
        Filter
        <br />
        <input
        value={filter}
          type="text"
          name="filter"
          onChange={onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

