import { Form, Formik } from 'formik';
import FormikField from '../forms/FormikField';
import { ChevronLeftIcon } from '@heroicons/react/outline';

interface ResetPassProps {
  setCurrentPage: (val: any) => any;
}

const ResetPass: React.FC<ResetPassProps> = ({setCurrentPage}) => {
  return (
    <>
      <Form>
        <div className="mt-20 flex flex-col justify-center pt-20 text-left">
          <h1 className="font-bold text-3xl text-gray-900 py-2">
            Reset Password
          </h1>
          <p className="text-left">
            Enter the email address assiociated with your account and we'll send
            you a link to reset your password.
          </p>
        </div>
        <FormikField name="email" placeholder="youremail@email.com" />
        {/* login */}
        <button
          type="submit"
          className="bg-[#0A28D8] mt-2 py-[0.65rem] w-full font-bold text-gray-300 rounded-full"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => setCurrentPage('login')}
          className="flex items-center justify-center py-2"
        >
          <ChevronLeftIcon width={20} height={20} />
          go back
        </button>
      </Form>
    </>
  );
};

export default ResetPass;
