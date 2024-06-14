import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>{locale === "id" ? "Silahkan Masuk Untuk Melanjutkan" : "Please Login To Continue..."}</h2>
      <LoginInput login={onLogin} />
      <p>
        {locale === "id" ? "Belum Punya Akun?" : "Create an Account?"} <Link to="/register">{locale === "id" ? "Daftar di sini." : "Register Here"}</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
