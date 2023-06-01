import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../store";

const Sidebar = () => {
  const sitename = useSelector((state) => state.navbar.page);

  const dispatch = useDispatch();

  return (
    <>
      <div className="hidden lg:relative lg:block lg:flex-none">
        <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"></div>
        <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-600 dark:block"></div>
        <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-600 dark:block"></div>
        <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
          <nav className="space-y-8 text-base lg:text-sm">
            <ul className="space-y-9">
              <li>
                <h2 className="font-medium text-slate-900 dark:text-white">
                  Introduction
                </h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-400">
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Who am I"))}
                      className={`block pl-3.5 ${
                        sitename === "Who am I"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      Who am I?
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Overview"))}
                      className={`block pl-3.5 ${
                        sitename === "Overview"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      Overview
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="space-y-9">
              <li>
                <h2 className="font-medium text-slate-900 dark:text-white">
                  Frontend
                </h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-400">
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("React"))}
                      className={`block  pl-3.5 ${
                        sitename === "React"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      React
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Tailwind"))}
                      className={`block  pl-3.5 ${
                        sitename === "Tailwind"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      Tailwind CSS
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Redux"))}
                      className={`block  pl-3.5 ${
                        sitename === "Redux"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      Redux Toolkit
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Testing"))}
                      className={`block  pl-3.5 ${
                        sitename === "Testing"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      React Testing Library
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="space-y-9">
              <li>
                <h2 className="font-medium text-slate-900 dark:text-white">
                  CI / CD
                </h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-400">
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Jenkins"))}
                      className={`block  pl-3.5 ${
                        sitename === "Jenkins"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      Jenkins
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Docker"))}
                      className={`block pl-3.5 ${
                        sitename === "Docker"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      Docker
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Sonarqube"))}
                      className={`block  pl-3.5 ${
                        sitename === "Sonarqube"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      Sonarqube
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Soap"))}
                      className={`block  pl-3.5 ${
                        sitename === "Soap"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      SoapUI
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Snyke"))}
                      className={`block  pl-3.5 ${
                        sitename === "Snyke"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      Snyke
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="space-y-9">
              <li>
                <h2 className="font-medium text-slate-900 dark:text-white">
                  AWS
                </h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-400">
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("EC2"))}
                      className={`block pl-3.5 ${
                        sitename === "EC2"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      EC2 Instance
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("Route"))}
                      className={`block  pl-3.5 ${
                        sitename === "Route"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      Route 53
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => dispatch(changePage("ECR"))}
                      className={`block  pl-3.5 ${
                        sitename === "ECR"
                          ? "font-bold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                          : " dark:text-slate-400"
                      }  `}
                    >
                      ECR
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
