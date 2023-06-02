import React from "react";
import {
  ExclamationTriangleIcon,
  FolderIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import testingicon from "../images/testing-library.svg";
import reacticon from "../images/React-icon.svg";
import { useDispatch } from "react-redux";
import { changePage } from "../store";

const TestingContent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <article>
        <header className="mb-9 space-y-1">
          <p className="font-display text-sm font-medium text-sky-500">
            Frontend
          </p>
          <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
            React Testing Library
          </h1>
        </header>
        <img src={testingicon} alt="" className="h-12 w-12" />
        <h2 className="mt-4 text-2xl font-bold text-white">
          What is React Testing Library?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          React Testing Library is a library that helps you test your React code
          in a way that resembles how your React code is used. It is a very
          lightweight solution that does not require a lot of configuration. It
          is also very easy to learn and use.
        </p>
        <div className="my-8 flex space-x-4 rounded-lg bg-amber-50 p-6 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <div>
            <ExclamationTriangleIcon className="h-8 w-8 text-orange-400" />
          </div>
          <div className="tracking-wide">
            <div className="text-xl font-bold text-orange-400">
              Don't be lazy!
            </div>
            <p className="text-lg text-slate-700 dark:text-white">
              Testing is probably one of the most hated topics in software
              development. It is often neglected and left out of the development
              process. This is a huge mistake. Testing is a crucial part of
              software development and should be treated as such.
            </p>
          </div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-white">
          Why did I use React Testing library?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          It comes right out of the box with Create React App. And since testing
          for this demo site is not actually needed, I kept it simple and did
          not integrate any other testing libraries like cypress.
        </p>
        <h2 className="mt-4 text-2xl font-bold text-white">
          How do you start using it?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Well like mentioned above, this time no seperate installation command
          is needed. You just create a component.tst.jsx file and then you can
          start:
        </p>
        <pre className="my-4 rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <code>
            <div>
              <span className="text-gray-300">
                &darr;
                <FolderIcon className="inline-block w-6 text-green-600" />
              </span>
              <span className="text-gray-400"> src</span>
            </div>
            <div className="ml-4 mt-2">
              <span className="text-gray-300">
                &darr;
                <FolderIcon className="inline-block w-6 text-yellow-500 " />
              </span>
              <span className="text-gray-400"> components</span>
            </div>
            <div className="ml-10 mt-2">
              <span className="flex items-center space-x-2 text-gray-400">
                <img src={reacticon} alt="" className="h-4" />
                <span className="inline-block">Navbar.jsx</span>
              </span>
              <span className="flex items-center space-x-2 text-gray-400">
                <img src={testingicon} alt="" className="h-4" />
                <span className="inline-block">Navbar.test.jsx</span>
              </span>
              <span className="flex items-center space-x-2 text-gray-400">
                <span className="inline-block">...</span>
              </span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Afterwards you need to decide what you want to test. This obviously
          depends on what the component does. For this Navbar component I
          decided to test if gets rendered correctly. So I wrote the following
          test:
        </p>
        <pre className="my-4 rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <code>
            <div>
              <span className="text-purple-400">import </span>
              <span className="text-yellow-400">&#123; </span>
              <span className="text-white">render, screen </span>
              <span className="text-white">&#125; </span>
              <span className="text-purple-400">from </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">@testing-library/react</span>
              <span className="text-white">";</span>
            </div>
            <div>
              <span className="text-purple-400">import </span>
              <span className="text-white">Navbar </span>
              <span className="text-purple-400">from </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">./Navbar</span>
              <span className="text-white">";</span>
            </div>
            <div className="mt-4">
              <span className="text-blue-400">describe</span>
              <span className="text-yellow-400">(</span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">Hero</span>
              <span className="text-white">", </span>
              <span className="text-purple-500">() </span>
              <span className="text-purple-400">&rarr; </span>
              <span className="text-purple-500">&#123;</span>
            </div>
            <div className="ml-4">
              <span className="text-blue-400">test</span>
              <span className="text-blue-600">(</span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">renders Hero component</span>
              <span className="text-white">", </span>
              <span className="text-yellow-400">() </span>
              <span className="text-purple-400">&rarr; </span>
              <span className="text-yellow-400">&#123;</span>
            </div>
            <div className="ml-6">
              <span className="text-blue-400">render</span>
              <span className="text-purple-500">(</span>
              <span className="text-green-300">&lt;</span>
              <span className="text-red-400">Hero </span>
              <span className="text-green-300">/&gt;</span>
              <span className="text-purple-500">)</span>
              <span className="text-white">;</span>
            </div>
            <div className="ml-6">
              <span className="text-green-400">screen</span>
              <span className="text-purple-400">.</span>
              <span className="text-blue-400">debug</span>
              <span className="text-purple-500">()</span>
              <span className="text-white">;</span>
            </div>
            <div className="ml-2">
              <span className="text-yellow-400">&#125;</span>
              <span className="text-blue-400">)</span>
              <span className="text-white">;</span>
            </div>
            <div className="">
              <span className="text-purple-400">&#125;</span>
              <span className="text-yellow-400">)</span>
              <span className="text-white">;</span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          The library itself offers all kinds of methods to test your app. Take
          a look at their documentation to find out what is possible.
        </p>
        <div className="mt-16 flex justify-around">
          <div className="flex space-x-4">
            <ArrowLeftIcon className="w-8 text-white" />
            <div className="space-y-2">
              <button
                className="text-lg font-bold dark:text-white"
                onClick={() => dispatch(changePage("Redux"))}
              >
                Previous
                <div className="font-medium dark:text-slate-400">
                  Redux Toolkit
                </div>
              </button>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="space-y-2">
              <button
                className="text-lg font-bold dark:text-white"
                onClick={() => dispatch(changePage("Jenkins"))}
              >
                Next
                <div className="font-medium dark:text-slate-400">Jenkins</div>
              </button>
            </div>
            <ArrowRightIcon className="w-8 text-white" />
          </div>
        </div>
      </article>
    </>
  );
};

export default TestingContent;
