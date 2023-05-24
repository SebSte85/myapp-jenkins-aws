import React from "react";
import CodeblockFrame from "./CodeblockFrame";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-20 text-white lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
        <div>
          <p className="font-display inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-5xl tracking-tight text-transparent">
            Wonderful world of technology
          </p>
          <p className="mt-3 text-2xl tracking-tight text-slate-400">
            This website's purpose is to demonstrate my Dev(Ops) skills and
            explain the underlying technologies used for this website.
          </p>
          <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/sebastian-stemmer-7551a2218/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
            >
              LinkedIn
            </a>
            <a
              href="https://www.freelancermap.de/freelancer-verzeichnis/profile/beratung-management/157025-profil-sebastian-stemmer-insurance-industry-expert-business-analyst-product-owner.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
            >
              Freelancermap
            </a>
          </div>
        </div>
        <div>
          <CodeblockFrame>
            <div className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600">
              "01"
              <br />
              "02"
              <br />
              "03"
              <br />
              "04"
              <br />
              "05"
              <br />
              "06"
              <br />
              "07"
              <br />
              "08"
              <br />
              "09"
              <br />
            </div>
            <pre className="prism-code language-javascript flex overflow-x-auto pb-6">
              <code className="px-4">
                <div className="">
                  <span className="text-green-400">module</span>
                  <span className="text-purple-400">.</span>
                  <span className="text-green-400">exports</span>
                  <span> </span>
                  <span className="text-purple-400">=</span>
                  <span> </span>
                  <span className="text-yellow-400">&#123;</span>
                </div>
                <div className="pl-4">
                  <span>content:</span>
                  <span> </span>
                  <span className="text-purple-400">&#91;</span>
                  <span>"</span>
                  <span className="text-orange-300">
                    ./src/**/*.&#123;js,jsx&#125;
                  </span>
                  <span>"</span>
                  <span className="text-purple-400">&#93;</span>
                  <span>,</span>
                </div>
                <div className="pl-4">
                  <span>darkMode:</span>
                  <span> </span>
                  <span>"</span>
                  <span className="text-orange-300">class</span>
                  <span>",</span>
                </div>
                <div className="pl-4">
                  <span>theme:</span>
                  <span> </span>
                  <span className="text-purple-400">&#123;</span>
                </div>
                <div className="pl-8">
                  <span>fontSize:</span>
                  <span> </span>
                  <span className="text-blue-400">&#123;</span>
                </div>
                <div className="pl-12">
                  <span>xl:</span>
                  <span> </span>
                  <span className="text-yellow-400">&#91;</span>
                  <span>"</span>
                  <span className="text-orange-300">1.125rem</span>
                  <span>"</span>
                  <span className="text-yellow-400">&#93;</span>
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">&#125;</span>
                  <span>,</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">&#125;</span>
                  <span>,</span>
                </div>
                <div>
                  <span className="text-yellow-400">&#125;</span>
                </div>
              </code>
            </pre>
          </CodeblockFrame>
        </div>
      </div>
    </>
  );
};

export default Hero;
