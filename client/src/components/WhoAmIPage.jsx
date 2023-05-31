import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import baloise from "../images/baloise logo.png";
import talanx from "../images/talanx logo.png";

const WhoAmIPage = () => {
  return (
    <>
      <article>
        <header className="mb-9 space-y-1">
          <p className="font-display text-sm font-medium text-sky-500">
            Introduction
          </p>
          <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
            Who am I?
          </h1>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 rounded-md border border-transparent p-4 text-white hover:border hover:border-blue-400">
            <AcademicCapIcon className="grad h-12 text-sky-400" />
            <h3 className="text-xl font-bold">Freelancer</h3>
            <p className="text-slate-700 dark:text-slate-400">
              I am currently working as a freelancer on big IT projects in the
              insurance industry.
            </p>
          </div>
          <div className="space-y-2 rounded-md border border-transparent p-4 text-white hover:border hover:border-blue-400">
            <AcademicCapIcon className="grad h-12 text-sky-400" />
            <h3 className="text-xl font-bold">Insurance Industry Expert</h3>
            <p className="text-slate-700 dark:text-slate-400">
              I have had various roles in the insurance industry in the last 15
              years.
            </p>
          </div>
          <div className="space-y-2 rounded-md border border-transparent p-4 text-white hover:border hover:border-blue-400">
            <AcademicCapIcon className="grad h-12 text-sky-400" />
            <h3 className="text-xl font-bold">Business Analyst and more</h3>
            <p className="text-slate-700 dark:text-slate-400">
              I usually operate as a business analyst, but I am performing all
              kinds of tasks on a project.
            </p>
          </div>
          <div className="space-y-2 rounded-md border border-transparent p-4 text-white hover:border hover:border-blue-400">
            <AcademicCapIcon className="grad h-12 text-sky-400" />
            <h3 className="text-xl font-bold">Tech Enthusiast</h3>
            <p className="text-slate-700 dark:text-slate-400">
              The day ain't go enough time to learn all the new stuff I want to
              learn.
            </p>
          </div>
        </div>
        <hr className="my-8 " />
        <h2 className="text-2xl font-bold text-white">Clients</h2>
        <p className="my-4 text-lg text-slate-700 dark:text-slate-400">
          I was fortunate enough in my professional career to have been a part
          of some big projects in the insurance industry. Below you can see all
          my clients so far.
        </p>
        <div className="mt-12 grid grid-cols-3 gap-8 ">
          <img src={baloise} alt="" className="w-52" />
          <img src={talanx} alt="" className="w-52" />
          <img src={baloise} alt="" className="w-52" />
          <img src={talanx} alt="" className="w-52" />
          <img src={baloise} alt="" className="w-52" />
          <img src={talanx} alt="" className="w-52" />
        </div>
      </article>
    </>
  );
};

export default WhoAmIPage;
