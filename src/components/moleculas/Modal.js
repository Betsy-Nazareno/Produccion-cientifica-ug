import React from "react";
import { Fragment } from "react";

const Modal = ({
  testId,
  children,
  isOpen,
  onClose,
  center,
  title,
  className,
  closeButtonTestId,
  showHeader = true,
  titleStyle = "",
}) => {
  if (isOpen) {
    return (
      <Fragment>
        <div
          data-testid={testId || "modal"}
          className="text-blue center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 no-outline"
        >
          <div className="relative w-1/3 min-w-max my-6 mx-auto max-w-full ">
            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-blue-special outline-none focus:outline-none">
              {showHeader && (
                <section id="Modal Title" className={`relative`}>
                  <div className="w-full mt-4 h-12 font-extrabold text-4xl flex items-center justify-center">
                    {title}
                  </div>
                  <button
                    className="absolute top-8 p-[6px] opacity-40 right-10 rounded-full hover:bg-blue-light hover:opacity-100"
                    onClick={onClose}
                  >
                    <span className="font-bold text-black">X</span>
                  </button>
                </section>
              )}
              <section id="Modal Body" className={className}>
                {children}
              </section>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
      </Fragment>
    );
  }
  return <></>;
};

export default Modal;
