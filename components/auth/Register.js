/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import ButtonLoader from '../layout/ButtonLoader';
import { clearErrors, registerUser } from '../../redux/actions/userActions';

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
  });

  const { first_name, last_name, email, username, password } = user;

  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('/img/default_avatar.jpg');

  const { success, error, loading } = useSelector((state) => state.register);

  useEffect(() => {
    if (success) {
      toast.success(success);
      setTimeout(() => {
        router.push('/login');
      }, 5500);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, success, error]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      first_name,
      last_name,
      email,
      username,
      password,
      avatar,
    };

    dispatch(registerUser(userData));
  };

  const onChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          setAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="auth-background">
      <div className="container container-fluid">
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form className="shadow-lg reg" onSubmit={submitHandler}>
              <h1
                className="mb-3"
                style={{ textAlign: 'center', marginTop: '-0.6rem' }}
              >
                SIGN UP
              </h1>

              <div className="form-group" style={{ display: 'inline' }}>
                <label htmlFor="first_name_field">First Name</label>
                <input
                  type="text"
                  id="first_name_field"
                  className="form-control"
                  name="first_name"
                  value={first_name}
                  onChange={onChange}
                />
                <label htmlFor="last_name_field">Last Name</label>
                <input
                  type="text"
                  id="last_name_field"
                  className="form-control"
                  name="last_name"
                  value={last_name}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                  type="text"
                  id="email_field"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username_field">Username</label>
                <input
                  type="text"
                  id="username_field"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                  type="password"
                  id="password_field"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="avatar_upload">Avatar</label>
                <div className="d-flex align-items-center">
                  <div>
                    <figure className="avatar mr-3 item-rtl">
                      <img
                        src={avatarPreview}
                        className="rounded-circle"
                        alt="image"
                        height={'60px'}
                        width={'60px'}
                      />
                    </figure>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      name="avatar"
                      className="custom-file-input"
                      id="customFile"
                      accept="images/*"
                      onChange={onChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Avatar
                    </label>
                  </div>
                </div>
              </div>

              <button
                id="login_button"
                type="submit"
                className="btn btn-block py-3"
                disabled={loading ? true : false}
              >
                {loading ? <ButtonLoader /> : 'Sign up'}
              </button>
              <span className="float-left mt-2">
                Already have an account?
                <Link href="/login" class="float-right mt-3">
                  Sign in
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
