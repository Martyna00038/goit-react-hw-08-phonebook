import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  RegisterContainer,
  RegisterWrapper,
  RegisterFormUi,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterAddButton,
} from './RegisterFormStyles';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const registerData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(registerData));
    form.reset();
    console.log(registerData);
  };

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterFormUi onSubmit={handleSubmit} autoComplete="off">
          <RegisterFormLabel>
            Username
            <RegisterFormInput type="text" name="name" />
          </RegisterFormLabel>
          <br />
          <RegisterFormLabel>
            Email
            <RegisterFormInput type="email" name="email" />
          </RegisterFormLabel>
          <br />
          <RegisterFormLabel>
            Password
            <RegisterFormInput type="password" name="password" />
          </RegisterFormLabel>
          <br />
          <RegisterAddButton type="submit">Register</RegisterAddButton>
        </RegisterFormUi>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default RegisterForm;
