import React from "react";
import { ExclamationTriangleIcon, FolderIcon } from "@heroicons/react/24/solid";
import reacticon from "../images/React-icon.svg";

const ReactContent = () => {
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
        <img src={reacticon} alt="" className="h-12 w-12" />
        <h2 className="mt-4 text-2xl font-bold text-white">What is React?</h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          React is by far the most popular JavaScript library for building
          webpages. It is used by 8.4 million websites, and it is used by 1.3
          million developers every month. React is a JavaScript library for
          building user interfaces. It is maintained by Facebook and a community
          of individual developers and companies. React can be used as a base in
          the development of single-page or mobile applications.
        </p>
        <div className="my-8 flex space-x-4 rounded-lg bg-amber-50 p-6 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
          <div>
            <ExclamationTriangleIcon className="h-8 w-8 text-orange-400" />
          </div>
          <div className="tracking-wide">
            <div className="text-xl font-bold text-orange-400">
              A library, no framework!
            </div>
            <p className="text-lg text-slate-700 dark:text-white">
              React is actually a library and no framework. In very simple terms
              all this means is that React is a collection of code that you can
              use to build a web application. It is not a complete solution like
              a framework is. So it is not so opiniotated on how you can
              implement certain things, e. g. routing.
            </p>
          </div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-white">
          Why did I use React?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          One core concept of react is to seperate your application into a lot
          of small components. So e. g. the navbar is a component, your sidebar,
          and so on. This makes it very easy to reuse components and to keep
          your code clean and maintainable.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Since this here is more or less a static website without any dynamic
          content, I could have used a static site generator like Gatsby or
          Next.js. But I went with react anyway because I wanted to apply my
          skills in a somewhat bigger project.
        </p>
        <h2 className="mt-4 text-2xl font-bold text-white">
          How do you start using it?
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Using your IDE of choice, you can create a new react app with this one
          line in your terminal:
        </p>
        <pre className="my-8">
          <code className="rounded-lg bg-amber-50 p-4 dark:bg-slate-600/20 dark:ring-1 dark:ring-slate-300/10">
            <span className="text-purple-400">npx </span>
            <span className="dark: text-white">create-react-app</span>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          This will create a new react app in your current directory with all
          the necessary configurations to keep going.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          As mid 2023, there are actually better ways to start things up with
          react (using Vite or Next.js). But for the purpose of this demo app,
          cra is just fine.
        </p>
        <h2 className="mt-4 text-2xl font-bold text-white">
          A bunch of functions
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Like I said earlier, a react app consists of a lot of small
          components. And these components are just functions. So you can write
          your components like this:
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
              <span className="text-green-200">h1</span>
              <span className="text-green-300">&gt;</span>
              <span className="text-white">Hello World!</span>
              <span className="text-green-300">&lt;/</span>
              <span className="text-green-200">h1</span>
              <span className="text-green-300">&gt; </span>
            </div>
            <div className="ml-4">
              <span className="text-green-300">&lt;/&gt;</span>
            </div>
            <div className="mt-4">
              <span className="text-purple-400">export default </span>
              <span className="text-white">Navbar;</span>
            </div>
          </code>
        </pre>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          So when you now look at the top of your screen, this navbar is such a
          react component.
        </p>
        <h2 className="mt-4 text-2xl font-bold text-white">
          Get organized with folders
        </h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Now the bigger your app gets, the more components you will have. So
          there is a need to organize your components in a logical manner. The
          least thing you should do is create one "components" folder like this:
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
                <img src={reacticon} alt="" className="h-4" />
                <span className="inline-block">Header.jsx</span>
              </span>
              <span className="flex items-center space-x-2 text-gray-400">
                <img src={reacticon} alt="" className="h-4" />
                <span className="inline-block">Footer.jsx</span>
              </span>
              <span className="flex items-center space-x-2 text-gray-400">
                <span className="inline-block">...</span>
              </span>
            </div>
          </code>
        </pre>
        <h2 className="mt-4 text-2xl font-bold text-white">Next</h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Writing these react components is just the beginning. One thing you
          need to do is style them so they appear in your desired way. And that
          is what we will do in the next section.
        </p>
      </article>
    </>
  );
};

export default ReactContent;
