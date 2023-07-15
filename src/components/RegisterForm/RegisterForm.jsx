import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  //   const { isLoading, error } = useSelector(state => state.auth);

  //   const onFinish = values => {
  //     const { name, email, password, confirm } = values;

  //     if (password === confirm) {
  //       dispatch(register({ name, email, password }));
  //       !isLoading && !error && form.resetFields();
  //     }
  //   };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit}
      autoComplete='off'>
      <label className={css.label}>
        <p>Username</p>
        <TextField
          helperText='Please enter your name'
          id='demo-helper-text-misaligned'
          label='Name'
        />
      </label>
      <label className={css.label}>
        <p className={css.labelName}>Email</p>
        <TextField
          helperText='Please enter your email'
          id='demo-helper-text-misaligned'
          label='Email'
        />
      </label>
      <label className={css.label}>
        <p>Password</p>
        <TextField
          helperText='Please enter your password'
          id='demo-helper-text-misaligned'
          label='Password'
        />
      </label>
      <div className={css.loginBtn}>
        <Button variant='contained'>Register</Button>
      </div>
    </form>
  );
};
