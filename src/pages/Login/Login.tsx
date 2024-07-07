import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Button';
import Input from '@/components/Input/Input';
import { loginSchema } from '@/lib/validation';
import { useLoginQuery } from '@/services/queries/auth.query';
import useAuthStore from '@/store/useAuthStore';
import { type LoginBody } from '@/types/auth';

const Login = () => {
  const { setIsAuthenticated } = useAuthStore((state) => state);
  const { isLoading, mutateAsync: login, isError, error } = useLoginQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({ resolver: yupResolver(loginSchema) });

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError]);

  const onSubmit: SubmitHandler<LoginBody> = async (data) => {
    await login(data);
    setIsAuthenticated(true);
  };

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card flex flex-col justify-center items-center h-full">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full xl:w-1/2">
          <div className="w-full p-4 sm:p-12.5 xl:p-15">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errors={errors}
                placeholder="Username"
                label="Username"
                id="username"
                register={register}
                name="username"
                required={true}
              />
              <Input
                required={true}
                errors={errors}
                placeholder="Password"
                label="Password"
                type="password"
                register={register}
                name="password"
              />
              <Button text="Login" type="submit" isLoading={isLoading} />
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don’t have any account?{' '}
              <Link to="/signup" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
          <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
            <p className="mb-3 text-xl font-medium text-dark dark:text-white">
              Sign in to your account
            </p>

            <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
              Welcome Back!
            </h1>

            <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
              Please sign in to your account by completing the necessary fields
              below
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
