import SearchForm from '@/components/Header/SearchForm';
import useAuthStore from '@/store/useAuthStore';
import Notifications from './Notifications';
import User from './User';

const Header = () => {
  const { role } = useAuthStore((state) => state);

  return (
    <header className="sticky top-0 z-999 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark">
      <div className="flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10">
        <div className="hidden xl:block">
          <div>
            <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
              {role ? 'Dashboard' : 'Student Performance Tracker'}
            </h1>
          </div>
        </div>

        {role ? (
          <div className="flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal">
            <ul className="flex items-center gap-2 2xsm:gap-4">
              <SearchForm />
              <Notifications />
            </ul>
            <User />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
