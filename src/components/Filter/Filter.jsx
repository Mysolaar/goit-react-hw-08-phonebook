import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filter';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
        <label className={css.label}>Find contacts by name
            <input
                className={css.input}
                type="text"
                onChange={e => {
                const action = filterContact(e.target.value);
                dispatch(action);
                }}
            />
        </label>
    </>
  );
};

export default Filter;