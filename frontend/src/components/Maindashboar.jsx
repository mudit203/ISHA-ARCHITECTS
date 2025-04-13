import React from "react";

const LandingPage = () => {
  return (
    <div>
      <header className="bg-stone-100">
        <div className="container mx-auto">
          <nav className="w-full rounded-lg border shadow-lg overflow-hidden p-2 bg-background/10 border-transparent shadow-transparent px-0">
            <div className="flex items-center relative">
          
              <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
                  <li>
                    <a href="#" className="font-sans antialiased text-sm text-inherit flex items-center gap-x-2 p-1 hover:text-primary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-sans antialiased text-sm text-inherit flex items-center gap-x-2 p-1 hover:text-primary">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-sans antialiased text-sm text-inherit flex items-center gap-x-2 p-1 hover:text-primary">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="gap-2 items-center hidden lg:ml-auto lg:flex">
                <button className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-secondary border-secondary text-secondary-foreground hover:bg-secondary-light hover:border-secondary-light">
                  Sign In
                </button>
                <button className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-primary border-primary text-primary-foreground hover:bg-primary-light hover:border-primary-light">
                  Buy Now
                </button>
              </div>
              <button className="place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-secondary-foreground hover:bg-secondary/10 hover:border-secondary/10 shadow-none hover:shadow-none ml-auto grid lg:hidden">
                <i className="fas fa-bars h-4 w-4"></i>
              </button>
            </div>
          </nav>

          <div className="container px-8 py-12 md:py-20 lg:py-28 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative inline-flex w-max items-center border font-sans font-medium rounded-md text-sm p-0.5 border-transparent shadow-none mb-6 bg-green-500/10 text-green-500">
                  <span className="grid place-items-center shrink-0 rounded-full translate-x-1 w-4 h-4">
                    <i className="fas fa-info-circle w-full h-full"></i>
                  </span>
                  <span className="font-inherit text-inherit leading-none my-1 mx-2.5">
                    Discover what's new
                  </span>
                </div>
                <h1 className="font-sans antialiased font-bold text-3xl md:text-4xl lg:text-5xl text-inherit mb-4">
                  Welcome to Our Listing Dashboard
                </h1>
                <p className="font-sans antialiased text-lg text-stone-600">
                  Stay updated with the latest news and explore various categories effortlessly.
                </p>
              </div>
              <div className="h-[50vh]">
                <img
                  src="https://bucket.material-tailwind.com/magic-ai/15710b45040a19a7f5869d71a522e449f7c5040668df5dfc5fdbfc52f011e693.jpg"
                  alt="gradient pattern"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto mt-24">
        <div className="mb-12 text-center">
          <p className="text-4xl leading-snug font-bold lg:text-5xl">Latest News</p>
          <p className="mx-auto w-full px-4 text-xl text-stone-500 lg:w-8/12 lg:px-8">
            Discover the most recent updates in our corporate world.
          </p>
        </div>
        <div className="px-4 gap-4 grid grid-cols-1 md:grid-cols-3">
          {[0, 1, 2].map((_, index) => (
            <div
              key={index}
              className="w-full min-h-[200px] animate-pulse"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-[200px] w-full bg-stone-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-24">
        <div className="mb-12 text-center">
          <p className="text-4xl leading-snug font-bold lg:text-5xl">Categories</p>
          <p className="mx-auto w-full px-4 text-xl text-stone-500 lg:w-8/12 lg:px-8">
            Navigate through our categorized news articles.
          </p>
        </div>
        <div className="px-4 gap-4 grid grid-cols-1 md:grid-cols-4">
          {[0, 1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-full min-h-[200px] animate-pulse"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-[200px] w-full bg-stone-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </section>

      <footer className="container mx-auto w-full pt-12 pb-6">
        <div className="flex flex-wrap items-center justify-center text-center md:justify-between">
          <div className="flex items-center gap-x-2">
            
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li><a className="antialiased text-sm hover:text-stone-600" href="#">About Us</a></li>
            <li><a className="antialiased text-sm hover:text-stone-600" href="#">License</a></li>
            <li><a className="antialiased text-sm hover:text-stone-600" href="#">Contribute</a></li>
            <li><a className="antialiased text-sm hover:text-stone-600" href="#">Contact Us</a></li>
          </ul>
        </div>
        <hr className="my-3 border-stone-200" />
      
      </footer>
    </div>
  );
};

export default LandingPage;