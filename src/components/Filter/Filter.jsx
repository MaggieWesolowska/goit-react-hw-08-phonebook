import propTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';
import TextField from '@mui/material/TextField';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(
      setFilter({
        filter: value,
      })
    );
  };
  return (
    <div>
      <label className={css.formLabel}>
        Find contacts by name
      </label>
      {/* <input
        className={css.filterInput}
        type='text'
        name='filter'
        placeholder='Enter filter'
        value={filter}
        onChange={handleChange}
      /> */}
      <TextField
        className={css.filterInput}
        type='text'
        name='filter'
        placeholder='Enter search'
        value={filter}
        onChange={handleChange}
        id='filled-basic'
        label=''
        variant='filled'
      />
    </div>
  );
};

Filter.propTypes = {
  filter: propTypes.string,
};
