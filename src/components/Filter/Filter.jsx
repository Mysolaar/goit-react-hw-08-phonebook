import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/filterSlice.js';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  return (
    <>
      <TextField
        sx={{ width: 400 }}
        id="filled-basic"
        label="☏ Search"
        variant="filled"
        type="text"
        value={filterValue}
        onChange={e => {
          const action = filterContact(e.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};