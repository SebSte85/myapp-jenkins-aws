import React from "react";
import {
  LightBulbIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightCircleIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import js from "../images/logo-javascript.svg";
import redux from "../images/redux.svg";
import { useDispatch } from "react-redux";
import { changePage } from "../store";

const ReduxContent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <article>
        <header className="mb-9 space-y-1">
          <p className="font-display text-sm font-medium text-sky-500">
            Frontend
          </p>
          <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
            Redux Toolkit
          </h1>
        </header>
        <img src={redux} alt="" className="h-12" />
        <h2 className="mt-4 text-2xl font-bold text-white">
          What is State Management?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          This time, let's start out by briefly explaining what state management
          is. State management is a way to manage the state of your application.
          It is a way to store data in a central location and access it from
          anywhere in your application. It is a way to keep track of the state
          of your application and update it when necessary.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Easy example:
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          If you have a button on your page that toggles a modal, you need to be
          able to keep track of the state of the modal. Is it open or closed? If
          it is open, you need to be able to close it. If it is closed, you need
          to be able to open it. This is a very simple example of state
          management.
        </p>
        <h2 className="mt-4 text-2xl font-bold text-white">
          What is Redux Toolkit?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Again, there are many ways to manage state in your application. Redux
          Toolkit is just one (popular) way of doing it.
        </p>
        <div className="my-8 flex space-x-4 rounded-lg bg-amber-50 p-6 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <div>
            <LightBulbIcon className="h-8 w-8 text-sky-400" />
          </div>
          <div className="tracking-wide">
            <div className="text-xl font-bold text-sky-400">
              Many tools to choose from...
            </div>
            <p className="text-lg text-slate-700 dark:text-white">
              You actually don't need any third-party library to manage state.
              You could just use React's built-in state management. However, it
              is a bit cumbersome to use. Redux Toolkit is a library that makes
              it easier to manage state.
            </p>
          </div>
        </div>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          State management is definitely one of the more advanced concepts in a
          React application. It is not something you need to learn right away.
          It is something you will learn as you build more complex applications.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          In fact, this tiny website does not need Redux Toolkit. I am using it
          for demonstration purposes only.
        </p>
        <h2 className="mt-4 text-2xl font-bold text-white">
          Why did I use Redux Toolkit?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Mainly because it is probably the most popular tool that is being used
          in production-ready applications.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          I was never comfortable with the original Redux because it was just so
          much boilerplate code. Redux Toolkit makes it much easier to use
          Redux. So I decided to use it in this project.
        </p>
        <h2 className="mt-4 text-2xl font-bold text-white">
          How do you start using it?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Go to your client folder and run this command:
        </p>
        <pre className="my-8">
          <code className="rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
            <span className="text-purple-400">npm </span>
            <span className="dark: text-white">install react-redux</span>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Now there are three main concepts in Redux:
        </p>
        <ol className="my-4 space-y-2 text-lg text-slate-700 dark:text-slate-400">
          <div className="flex items-center space-x-4">
            <ArrowRightCircleIcon className="h-8 w-8 text-sky-400" />
            <p>
              A store - the file that basically contains the entire state logic
              of your app
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <ArrowRightCircleIcon className="h-8 w-8 text-sky-400" />
            <p>A slice - the state logic for a defined entity like a user</p>
          </div>
          <div className="flex items-center space-x-4">
            <ArrowRightCircleIcon className="h-8 w-8 text-sky-400" />
            <p>
              A reducer - an action to change a particular state (change name of
              user)
            </p>
          </div>
        </ol>
        <h2 className="mt-4 text-xl font-bold text-white">The store</h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Create a store.js file like so:
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
            <div className="ml-10 mt-2">
              <span className="flex items-center space-x-2 text-gray-400">
                <img src={js} alt="" className="h-4" />
                <span className="inline-block">store.js</span>
              </span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          The file itself is pretty simple:
        </p>
        <pre className="my-4 rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <code>
            <div>
              <span className="text-purple-400">import </span>
              <span className="dark: text-white">&#123; </span>
              <span className="text-white">configureStore </span>
              <span className="text-white">&#125; </span>
              <span className="text-purple-400">from </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">@reduxjs/toolkit</span>
              <span className="text-white">";</span>
            </div>
            <div className="mt-4">
              <span className="text-purple-400">export const </span>
              <span className="text-blue-400">store </span>
              <span className="text-purple-400">= </span>
              <span className="text-blue-400">configureStore</span>
              <span className="text-yellow-400">(</span>
              <span className="dark: text-purple-400">&#123; </span>
            </div>
            <div className="ml-2">
              <span className="text-purple-400">reducer: </span>
              <span className="text-blue-400">&#123;</span>
              <span className="text-blue-400">&#125;</span>
              <span className="text-white">,</span>
            </div>
            <div className="">
              <span className="text-purple-400">&#125;</span>
              <span className="text-yellow-400">)</span>
              <span className="text-white">;</span>
            </div>
          </code>
        </pre>
        <h2 className="mt-4 text-xl font-bold text-white">
          The slice + reducer
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          You can go ahead and create a slice for your user entity in a
          dedicated slice folder:
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
                <FolderIcon className="inline-block w-6 text-yellow-500" />
              </span>
              <span className="text-gray-400"> sclices</span>
            </div>
            <div className="ml-10 mt-2">
              <span className="flex items-center space-x-2 text-gray-400">
                <img src={js} alt="" className="h-4" />
                <span className="inline-block">user.js</span>
              </span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          And a user slice looks like this:
        </p>
        <pre className="my-4 rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <code>
            <div>
              <span className="text-purple-400">import </span>
              <span className="dark: text-white">&#123; </span>
              <span className="text-white">createSlice </span>
              <span className="text-white">&#125; </span>
              <span className="text-purple-400">from </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">@reduxjs/toolkit</span>
              <span className="text-white">";</span>
            </div>
            <div className="mt-4">
              <span className="text-purple-400">export const </span>
              <span className="text-blue-400">userSlice </span>
              <span className="text-purple-400">= </span>
              <span className="text-blue-400">createSlice</span>
              <span className="text-yellow-400">(</span>
              <span className="dark: text-purple-400">&#123; </span>
            </div>
            <div className="ml-2">
              <span className="text-purple-400">name: </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">Jon</span>
              <span className="text-white">"</span>
              <span className="text-white">,</span>
            </div>
            <div className="ml-2">
              <span className="text-purple-400">reducers: </span>
              <span className="text-blue-400">&#123;</span>
            </div>
            <div className="ml-4">
              <span className="text-blue-400">changeName</span>
              <span className="text-purple-400">: </span>
              <span className="text-yellow-400">(</span>
              <span className="text-white">state</span>
              <span className="text-purple-400">, </span>
              <span className="text-white">action</span>
              <span className="text-yellow-400">) </span>
              <span className="text-purple-400">&rarr; </span>
              <span className="text-yellow-400">&#123;</span>
            </div>
            <div className="ml-6">
              <span className="text-green-300">state</span>
              <span className="text-purple-400">.</span>
              <span className="text-green-200">name </span>
              <span className="text-purple-400">= </span>
              <span className="text-green-300">action</span>
              <span className="text-white">.</span>
              <span className="text-green-200">payload</span>
              <span className="text-purple-400">;</span>
            </div>
            <div className="ml-4">
              <span className="text-yellow-400">&#125;</span>
              <span className="text-purple-400">,</span>
            </div>
            <div className="ml-2">
              <span className="text-blue-400">&#125;</span>
              <span className="text-purple-400">,</span>
            </div>
            <div className="">
              <span className="text-purple-400">&#125;</span>
              <span className="text-yellow-400">)</span>
              <span className="text-white">,</span>
            </div>
            <div className="mt-4">
              <span className="text-purple-400">export const </span>
              <span className="text-yellow-400">&#123; </span>
              <span className="text-blue-400">changeName </span>
              <span className="text-yellow-400">&#125; </span>
              <span className="text-purple-400">= </span>
              <span className=" text-green-300">userSlice </span>
              <span className="text-purple-400">.</span>
              <span className="text-green-200">actions</span>
              <span className="text-white">;</span>
            </div>
            <div className="mt-2">
              <span className="text-purple-400">export default </span>
              <span className="text-green-300">userSlice</span>
              <span className="text-purple-400">.</span>
              <span className="text-green-200">reducer</span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Here you define what type of actions can be performed on your entity
          user. In this case it is a name change.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          This reducer will then get exported at the bottom so you can use it in
          other files.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          One important thing you need to do is wrap your entire app in a redux
          provider. This will allow you to access the store from anywhere in
          your app.
        </p>
        <pre className="my-4 rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <code>
            <div>
              <span className="text-purple-400">import </span>
              <span className="dark: text-white">&#123; </span>
              <span className="text-white">store </span>
              <span className="text-white">&#125; </span>
              <span className="text-purple-400">from </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">./app/store</span>
              <span className="text-white">";</span>
            </div>
            <div>
              <span className="text-purple-400">import </span>
              <span className="dark: text-white">&#123; </span>
              <span className="text-white">Provider </span>
              <span className="text-white">&#125; </span>
              <span className="text-purple-400">from </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">react-redux</span>
              <span className="text-white">";</span>
            </div>
            <div className="mt-4">
              <span className="text-purple-400">const </span>
              <span className="text-blue-400">root </span>
              <span className="text-purple-400">= </span>
              <span className="text-green-300">ReactDOM</span>
              <span className="text-purple400">.</span>
              <span className="text-blue-400">createRoot</span>
              <span className="text-yellow-400">(</span>
              <span className="text-green-300">document</span>
              <span className="text-purple-400">.</span>
              <span className="text-blue-400">getElementByID</span>
              <span className="text-purple-400">(</span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">root</span>
              <span className="text-white">"</span>
              <span className="text-purple-400">)</span>
              <span className="text-yellow-400">)</span>
              <span className="text-white">;</span>
            </div>
            <div className="">
              <span className="text-green-300">root</span>
              <span className="text-purple-400">.</span>
              <span className="text-blue-400">render</span>
              <span className="text-yellow-400">(</span>
            </div>
            <div className="ml-4">
              <span className="text-green-300">&lt;</span>
              <span className="text-red-400">React.StrictMode</span>
              <span className="text-green-300">&gt;</span>
            </div>
            <div className="ml-6">
              <span className="text-green-300">&lt;</span>
              <span className="text-red-400">Provider </span>
              <span className="text-green-300">store</span>
              <span className="text-purple-400">=&#123;</span>
              <span className="text-white">store</span>
              <span className="text-purple-400">&#125;</span>
              <span className="text-green-300">&gt;</span>
            </div>
            <div className="ml-8">
              <span className="text-green-300">&lt;</span>
              <span className="text-red-400">App </span>
              <span className="text-green-300">/&gt;</span>
            </div>
            <div className="ml-6">
              <span className="text-green-300">&lt;/</span>
              <span className="text-red-400">Provider</span>
              <span className="text-green-300">&gt;</span>
            </div>
            <div className="ml-4">
              <span className="text-green-300">&lt;/</span>
              <span className="text-red-400">React.StrictMode</span>
              <span className="text-green-300">&gt;</span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          And just like that you have a working redux store. Now you can access
          it from anywhere in your app.
        </p>
        <div className="mt-16 flex justify-around">
          <div className="flex space-x-4">
            <ArrowLeftIcon className="w-8 text-white" />
            <div className="space-y-2">
              <button
                className="text-lg font-bold dark:text-white"
                onClick={() => dispatch(changePage("Tailwind"))}
              >
                Previous
                <div className="font-medium dark:text-slate-400">Tailwind</div>
              </button>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="space-y-2">
              <button
                className="text-lg font-bold dark:text-white"
                onClick={() => dispatch(changePage("Testing"))}
              >
                Next
                <div className="font-medium dark:text-slate-400">
                  Testing Library
                </div>
              </button>
            </div>
            <ArrowRightIcon className="w-8 text-white" />
          </div>
        </div>
      </article>
    </>
  );
};

export default ReduxContent;
