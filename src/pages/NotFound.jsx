import { Link, useLocation, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-md">
        <p className="text-7xl font-extrabold text-primary-600 dark:text-primary-400 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Page not found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We couldn't find{' '}
          <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 break-all">
            {location.pathname}
          </code>
          . The link may be mistyped or the page may have moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/jobs"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Browse Jobs
          </Link>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-6 py-3 text-gray-600 dark:text-gray-400 rounded-xl font-semibold hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
