import ReviewBlock from "../assets/svg/review";

export default function Home() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        {/* Left Side */}
        <div>
          <h1 className="block text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white">
            Start your journey with <span className="text-blue-600">MyApp</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
              href="#"
            >
              Get started →
            </a>
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
              href="#"
            >
              Contact sales team
            </a>
          </div>

          {/* Reviews Section */}
          <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
            <ReviewBlock
              rating="4.6"
              reviews="12k"
              logo={
                <svg
                  className="h-auto w-16 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="27"
                  viewBox="0 0 80 27"
                  fill="currentColor"
                >
                  <path d="M9.48367 0.184448L18.6946 26.8138H12.7292L11.0804 ..."></path>
                </svg>
              }
            />

            <ReviewBlock
              rating="4.8"
              reviews="5k"
              logo={
                <svg
                  className="h-auto w-16 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="28"
                  viewBox="0 0 110 28"
                  fill="currentColor"
                >
                  <path d="M26.094 19.1019H20.9719L23.3156 9.47314H28.4626 ..."></path>
                </svg>
              }
            />
          </div>
        </div>

        {/* Right Side — Hero Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
            alt="Hero"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
