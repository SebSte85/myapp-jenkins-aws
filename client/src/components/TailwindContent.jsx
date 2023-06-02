import React from "react";
import {
  LightBulbIcon,
  ArrowRightCircleIcon,
  FolderIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import reacticon from "../images/React-icon.svg";
import cssicon from "../images/css-3-logo.svg";
import tailwind from "../images/tailwindcss-logotype.svg";
import { useDispatch } from "react-redux";
import { changePage } from "../store";

const TailwindContent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <article>
        <header className="mb-9 space-y-1">
          <p className="font-display text-sm font-medium text-sky-500">
            Frontend
          </p>
          <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
            React
          </h1>
        </header>
        <img src={tailwind} alt="" className="h-10" />
        <h2 className="mt-4 text-2xl font-bold text-white">
          What is Tailwind?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Tailwind is a utility-first CSS framework. It is not a UI framework
          like Bootstrap or Material UI, but a CSS framework. It is a set of CSS
          classes that you can use to style your HTML elements. It is not
          opinionated, so you can use it to style your website however you want.
        </p>
        <div className="my-8 flex space-x-4 rounded-lg bg-amber-50 p-6 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <div>
            <LightBulbIcon className="h-8 w-8 text-sky-400" />
          </div>
          <div className="tracking-wide">
            <div className="text-xl font-bold text-sky-400">
              It all comes down to personal preference!
            </div>
            <p className="text-lg text-slate-700 dark:text-white">
              There is no wrong or right here. If you like it, use it. If you
              like the more traditional way of styling your website, use that.
              It is all up to you.
            </p>
          </div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-white">
          Why did I use Tailwind?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          There are two main reasons why I like using tailwind:
        </p>
        <ol className="my-4 space-y-2 text-lg text-slate-700 dark:text-slate-400">
          <div className="flex items-center space-x-4">
            <ArrowRightCircleIcon className="h-8 w-8 text-sky-400" />
            <p>No seperate css files</p>
          </div>
          <div className="flex items-center space-x-4">
            <ArrowRightCircleIcon className="h-8 w-8 text-sky-400" />
            <p>Well chosen class names</p>
          </div>
        </ol>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Using the traditional way, you would have a seperate css file for each
          component. So your folder structure would look something like this:
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
                <img src={cssicon} alt="" className="h-4" />
                <span className="inline-block">Navbar.css</span>
              </span>
              <span className="flex items-center space-x-2 text-gray-400">
                <img src={reacticon} alt="" className="h-4" />
                <span className="inline-block">Header.jsx</span>
              </span>
              <span className="flex items-center space-x-2 text-gray-400">
                <img src={cssicon} alt="" className="h-4" />
                <span className="inline-block">Header.css</span>
              </span>
              <span className="flex items-center space-x-2 text-gray-400">
                <img src={reacticon} alt="" className="h-4" />
                <span className="inline-block">Footer.jsx</span>
              </span>
              <span className="flex items-center space-x-2 text-gray-400">
                <img src={cssicon} alt="" className="h-4" />
                <span className="inline-block">Footer.css</span>
              </span>
              <span className="flex items-center space-x-2 text-gray-400">
                <span className="inline-block">...</span>
              </span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          I am not a fan of switching files all the time. So I prefer staying
          within my jsx files and style my components in there.
        </p>
        <h2 className="mt-4 text-2xl font-bold text-white">
          How do you start using it?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          In order to use tailwind with your newly created create-react-app, you
          need to follow the following steps:
        </p>
        <pre className="my-8">
          <code className="rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
            <span className="text-purple-400">npm </span>
            <span className="dark: text-white">install -D tailwindcss</span>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          This will initialize a tailwind config file. That is where you
          continue:
        </p>
        <pre className="my-4 rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <code>
            <div>
              <span className="text-green-300">module</span>
              <span className="text-purple-400">.</span>
              <span className="text-green-300">exports </span>
              <span className="text-purple-400">= </span>
              <span className="text-yellow-400">&#123;</span>
            </div>
            <div className="ml-4">
              <span className="text-white">content: </span>
              <span className="text-purple-400">&#91;</span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">
                ./src/**/*.&#123;js,jsx&#125;
              </span>
              <span className="text-white">"</span>
              <span className="text-purple-400">&#93;</span>
            </div>
            <div className="">
              <span className="text-yellow-400">&#125;</span>
              <span className="text-white">;</span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          So what this config file basically does is telling the app in which
          files of your entire application the tailwind classes will get
          applied. In our case, all the jsx components.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Moving on to adding this in your main css file, usually "index.css":
        </p>
        <pre className="my-4 rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <code>
            <div>
              <span className="text-purple-400">@import </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">tailwindcss/base</span>
              <span className="text-white">";</span>
            </div>
            <div>
              <span className="text-purple-400">@import </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">tailwindcss/components</span>
              <span className="text-white">";</span>
            </div>
            <div>
              <span className="text-purple-400">@import </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">tailwindcss/utilities</span>
              <span className="text-white">";</span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          And that's it! Now you can make use of all the utillity classes
          tailwind provides. Just go to your jsx component and add them right
          there in your className attribute:
        </p>
        <pre className="my-4 rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <code>
            <div>
              <span className="text-purple-400">import </span>
              <span className="dark: text-white">React </span>
              <span className="text-purple-400">from </span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">react</span>
              <span className="text-white">"</span>
            </div>
            <div className="mt-4">
              <span className="text-purple-400">const </span>
              <span className="text-blue-400">Navbar </span>
              <span className="text-purple-400">= </span>
              <span className="text-yellow-400">() </span>
              <span className="text-purple-400">&rarr; </span>
              <span className="text-yellow-400">&#123;</span>
            </div>
            <div className="ml-2">
              <span className="text-purple-400">return </span>
            </div>
            <div className="ml-4">
              <span className="text-green-300">&lt;&gt;</span>
            </div>
            <div className="ml-6">
              <span className="text-green-300">&lt;</span>
              <span className="text-green-200">h1 </span>
              <span className="text-green-300">className</span>
              <span className="text-purple-400">=</span>
              <span className="text-white">"</span>
              <span className="text-yellow-400">my-4 font-bold text-white</span>
              <span className="text-white">"</span>
              <span className="text-green-300">&gt;</span>
              <span className="text-white">Hello World!</span>
              <span className="text-green-300">&lt;/</span>
              <span className="text-green-200">h1</span>
              <span className="text-green-300">&gt; </span>
            </div>
            <div className="ml-4">
              <span className="text-green-300">&lt;/&gt;</span>
            </div>
            <div className="">
              <span className="text-yellow-400">&#125;</span>
            </div>
            <div className="mt-4">
              <span className="text-purple-400">export default </span>
              <span className="text-white">Navbar;</span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Of course, sometimes your component files get very packed because you
          will need a lot of different classes to get the style you want. But I
          personally still prefer this over a seperate css file.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Next step, state management.
        </p>
        <div className="mt-16 flex justify-around">
          <div className="flex space-x-4">
            <ArrowLeftIcon className="w-8 text-white" />
            <div className="space-y-2">
              <button
                className="text-lg font-bold dark:text-white"
                onClick={() => dispatch(changePage("React"))}
              >
                Previous
                <div className="font-medium dark:text-slate-400">React</div>
              </button>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="space-y-2">
              <button
                className="text-lg font-bold dark:text-white"
                onClick={() => dispatch(changePage("Redux"))}
              >
                Next
                <div className="font-medium dark:text-slate-400">Redux</div>
              </button>
            </div>
            <ArrowRightIcon className="w-8 text-white" />
          </div>
        </div>
      </article>
    </>
  );
};

export default TailwindContent;
