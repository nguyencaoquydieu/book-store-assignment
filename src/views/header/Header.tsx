import React from "react";
import { HeaderComponent } from "./HeaderData";

const Header = () => {
  // return (
  //   <div>
  //     <nav className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
  //       <div className="flex w-full flex-wrap items-center justify-between px-3">
  //         <span className="ms-2 text-xl text-black dark:text-white">
  //           Navbar
  //         </span>
  //         <div className="ms-5 flex w-[30%] items-center justify-between">
  //           <input
  //             type="search"
  //             className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
  //             placeholder="Search"
  //             aria-label="Search"
  //             aria-describedby="button-addon2"
  //           />

  //           <span
  //             className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white [&>svg]:w-5"
  //             id="basic-addon2"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 20 20"
  //               fill="currentColor"
  //             >
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
  //                 clip-rule="evenodd"
  //               />
  //             </svg>
  //           </span>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // );
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {HeaderComponent.map((item) => {
                  return (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="inline-block py-4 px-4 hover:text-primary duration-200 font-bold"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="container my-24 mx-auto md:px-6">
          <section className="background-radial-gradient mb-32">
            <div className="px-6 py-12 text-center md:px-12 lg:text-left">
              <div className="container mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
                      Life is like <br />
                      <span className="text-[hsl(218,81%,75%)]">The Book</span>
                    </h1>
                    <p className="text-lg text-[hsl(218,81%,95%)]">
                      Life is like a book. Some chapters are sad, some happy and
                      some very exciting. But if you never turn the page, you
                      will never know what the next chapter holds.
                    </p>
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg padding-top-56">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/jdjYt7DFsZg?si=Vs9I7bAWF87ccNtU"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
