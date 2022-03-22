function ErrorFallback({ resetErrorBoundary }: any) {
  return (
    <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden text-left">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/27/w1200X800/Metaverse_is_Coming.jpg"
          alt="People working on laptops"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-900 mix-blend-multiply" />
      </div>
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-white">
            There was an unexpected error. We are working on fixing it.
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-xl text-white font-semibold sm:max-w-3xl">
          Our Engineers have been automatically notified about this issue. You
          can try clicking the button below to reload the page.
        </p>
        <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
          <button
            onClick={resetErrorBoundary}
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-sapien bg-white hover:bg-indigo-50 sm:px-8"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
