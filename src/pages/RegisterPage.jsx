import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
import LocaleContext from '../contexts/LocaleContext';

function RegisterPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <section className="register-page">
      <h2>{locale === 'id' ? 'Jangan Gunakan Data Pribadi' : 'Don\'t Use Your Personal Data'}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {locale === 'id' ? 'Balik Ke' : 'Back To'}
        <Link to="/">Login</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
