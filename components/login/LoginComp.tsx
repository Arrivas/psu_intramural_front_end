import { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { getCurrentUser } from '../../auth/Auth';
import toast from 'react-hot-toast';
import FormikField from '../forms/FormikField';
import axios from 'axios';
import links from '../../config/links';

interface LoginCompProps {}

const LoginComp: React.FC<LoginCompProps> = () => {
  const [showPassword, onShowPassword] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<any>('');
  const router = useRouter();
  useEffect(() => {
    // setCurrentUser(getCurrentUser());
    const getUser = getCurrentUser();
    setCurrentUser(getUser);
    if (getUser) router.replace('/');
  }, []);
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = async (values: any) => {
    await axios
      .post(`${links.default}/auth`, {
        email: values.email.trim(),
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        router.replace('/');
      })
      .catch((err) => {
        toast.error(err.response.data.message || '');
        console.log(err.response.data.message || err);
      });
  };
  return (
    <>
      {currentUser ? null : (
        <>
          <div className="flex items-center justify-center relative font-roboto">
            <div className="pt-10 h-[550px] xs:h-screen w-[290px] xs:w-[375px] px-2 xs:px-5">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                <Form>
                  {/* images */}
                  <img
                    className="-z-50 h-[11rem] w-[11rem] object-cover object-center absolute top-0 right-0"
                    src="/images/badminton.png"
                    alt="login image"
                  />
                  <img
                    className="-z-50 h-[10rem] w-[8rem] object-cover object-center fixed bottom-0 right-0"
                    src="/images/basketball.png"
                    alt="login image"
                  />
                  <img
                    className="-z-50 h-[6rem] sm:h-[9rem] w-[6.8rem] sm:w-[10.5rem] object-cover object-center fixed bottom-0 left-0"
                    src="/images/whistle.png"
                    alt="login image"
                  />
                  <img
                    className="-z-50 h-[5.2rem] w-[5rem] object-cover object-center fixed top-0 -left-2"
                    src="/images/volleyball.png"
                    alt="login image"
                  />
                  <div className="mt-20 flex flex-col items-center justify-center text-center">
                    <img
                      className="-z-50 h-[7rem] w-[7rem] object-cover object-center"
                      src="/images/logo.png"
                      alt="login image"
                    />
                    <h1 className="font-bold text-3xl text-gray-900 py-2">
                      Login to your account
                    </h1>
                  </div>
                  <FormikField name="email" placeholder="youremail@email.com" />
                  <FormikField
                    type="password"
                    name="password"
                    placeholder="password"
                    onShowPassword={() =>
                      onShowPassword(showPassword ? false : true)
                    }
                    showPassword={showPassword}
                  />
                  {/* login */}
                  <button
                    type="submit"
                    className="bg-[#0A28D8] mt-2 py-[0.65rem] w-full font-bold text-gray-300 rounded-full"
                  >
                    Login
                  </button>
                  {/* forgot */}
                  <div className="flex gap-5 items-center justify-center w-[100%] mx-auto py-2">
                    <button
                      type="button"
                      className=" text-gray-700 text-[15px]"
                    >
                      forgot password
                    </button>
                    <hr className="w-[10px] h-[1px] border-gray-500 transform rotate-90" />
                    <button
                      type="button"
                      className=" text-gray-700 text-[15px]"
                    >
                      create account
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginComp;
