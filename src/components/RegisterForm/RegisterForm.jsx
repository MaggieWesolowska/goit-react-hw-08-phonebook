import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

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

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#673ab7',
    '&:hover': {
      backgroundColor: '#673ab7',
      boxShadow: '2px 6px 6px rgba(0, 0, 0, 0.4)',
    },
  }));

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit}
      autoComplete='off'>
      <div className={css.registerInput}>
        <p className={css.label}>Username</p>
        <TextField
          className={css.inputReg}
          helperText='Choose name you want to use'
          label='Name'
          name='name'
          type='name'
        />
      </div>
      <div className={css.registerInput}>
        <p className={css.label}>Email</p>
        <TextField
          className={css.inputReg}
          helperText='Enter valid email'
          label='Email'
          name='email'
          type='email'
        />
      </div>
      <div className={css.registerInput}>
        <p className={css.label}>Password</p>
        <TextField
          className={css.inputReg}
          helperText='Choose strong password!'
          label='Password'
          name='password'
          type='password'
        />
      </div>
      <div className={css.registerInput}>
        <p className={css.label}>Confirm Password</p>
        <TextField
          className={css.inputReg}
          helperText='Confirm your password choice'
          label='Confirm Password'
          name='confirm'
          type='password'
        />
      </div>
      <div className={css.loginBtn}>
        <ColorButton
          type='submit'
          variant='contained'
          size='large'>
          Register
        </ColorButton>
      </div>
    </form>
  );
};
