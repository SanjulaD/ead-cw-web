import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { loginSchema } from '@/lib/validation';
import { type LoginBody } from '@/types/auth';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({ resolver: yupResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginBody> = async (data) => {
    console.log(data);
  };

  return (
    <div className="rounded-[10px] w-150 border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-8 py-4 dark:border-dark-3">
        <h3 className="font-semibold text-dark dark:text-white">
          Sign Up Form
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-5">
          <Input
            errors={errors}
            placeholder="Enter Username"
            label="Username"
            id="username"
            register={register}
            name="username"
            required={true}
          />

          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            errors={errors}
            register={register}
            required={true}
          />

          <Input
            required={true}
            errors={errors}
            placeholder="Enter Password"
            label="Password"
            type="password"
            register={register}
            name="password"
          />

          <Input
            required={true}
            errors={errors}
            placeholder="Re-type Password"
            label="Password"
            type="password"
            register={register}
            name="password"
          />

          <Button text=" Sign Up" type="submit" />
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/" className="text-primary">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
