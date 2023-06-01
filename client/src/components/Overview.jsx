import React from "react";
import logos from "../images/Logos.png";
import stages from "../images/Stages.png";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Overview = () => {
  return (
    <>
      <article>
        <header className="mb-9 space-y-1">
          <p className="font-display text-sm font-medium text-sky-500">
            Introduction
          </p>
          <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
            Overview
          </h1>
        </header>
        <div>
          <img src={logos} alt="" className="mx-auto w-full max-w-2xl" />
        </div>
        <h2 className="mt-2 text-2xl font-bold text-white">Goal</h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          To be honest, the main reason I set up this website was to prove to
          myself that I am actually capable of using all these technologies
          myself.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          I am not a trained engineer, I do not hold a degree in computer
          science, I am just someone who is deeply interested in how all this
          stuff works that I am confronted with in all my projects.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          So, as you can at least partially see by being on this website, I put
          all these things together and made it work.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Take a look at the other chapters and I will explain a bit more what
          these technologies do. However, I am only scratching the surface here.
          <p className="ml-1 inline-block font-bold">
            So this is no in-depth explanation of all these tools.{" "}
          </p>
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">Technologies</h2>
        <div>
          <img src={stages} alt="" className="mx-auto w-full max-w-2xl" />
        </div>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          Here I have listed most of the different technologies I have used
          along the way.
        </p>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          As you can see, they roughly fall into three categories:
        </p>
        <ol className="my-4 space-y-2 text-lg text-slate-700 dark:text-slate-400">
          <div className="flex items-center space-x-4">
            <ArrowRightCircleIcon className="h-8 w-8 text-sky-400" />
            <p>Frontend</p>
          </div>
          <div className="flex items-center space-x-4">
            <ArrowRightCircleIcon className="h-8 w-8 text-sky-400" />
            <p>CI/CD</p>
          </div>
          <div className="flex items-center space-x-4">
            <ArrowRightCircleIcon className="h-8 w-8 text-sky-400" />
            <p>AWS</p>
          </div>
        </ol>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          For detailed information, navigate to the respective page in the left
          sidebar.
        </p>
      </article>
    </>
  );
};

export default Overview;
