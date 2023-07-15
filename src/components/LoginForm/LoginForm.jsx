import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from '../LoginForm/LoginForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit}
      autoComplete='off'>
      <label className={css.label}>
        <p className={css.labelName}>Email</p>
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue='Email'
        />
      </label>
      <label className={css.label}>
        <p className={css.labelName}>Password</p>
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue='Password'
        />
      </label>
      <div className={css.loginBtn}>
        <Button variant='contained'>Log In</Button>
      </div>
    </form>
  );
};
