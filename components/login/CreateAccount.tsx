import { Form } from 'formik';
import FormikField from '../forms/FormikField';
import { ChevronLeftIcon } from '@heroicons/react/outline';

interface CreateAccountProps {
  onShowPassword: (val: any) => any;
  showPassword: any;
  setCurrentPage: (val: any) => any;
}

const CreateAccount: React.FC<CreateAccountProps> = ({
  onShowPassword,
  showPassword,
  setCurrentPage,
  
}) => {
  return (
    <>
      <Form>
        {/* images */}

        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl text-gray-900 py-2 pt-20">
            Create New Account
          </h1>
        </div>
        <FormikField name="createName" placeholder="name" />
        <FormikField name="createEmail" placeholder="youremail@email.com" />
        <FormikField
          type="password"
          name="createPassword"
          placeholder="password"
          onShowPassword={() => onShowPassword(showPassword ? false : true)}
          showPassword={showPassword}
        />
        <FormikField
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          onShowPassword={() => onShowPassword(showPassword ? false : true)}
          showPassword={showPassword}
        />
        {/* login */}
        <button
          type="submit"
          className="bg-[#0A28D8] mt-2 py-[0.65rem] w-full font-bold text-gray-300 rounded-full"
        >
          Create Account
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

export default CreateAccount;
