import { selectTheme } from "@/entities/session";
import React, { useRef, useState } from "react";
import { useAppSelector } from "../model/hooks";

interface IProps {
  children: React.ReactNode;
  content: JSX.Element;
  className?: string;
}
export const Modal: React.FC<IProps> = ({
  children,
  content,
  className = "",
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isShowModalContent, setIsShowModalContent] = useState(false);

  const theme = useAppSelector(selectTheme);

  function showModal() {
    if (modalRef.current) {
      modalRef.current.showModal();
      setIsShowModalContent(true);
    }
  }
  return (
    <>
      <div className="cursor-pointer " onClick={showModal}>
        {children}
      </div>
      <dialog ref={modalRef} className="modal ">
        {isShowModalContent && (
          <div
            className={`modal-box ${className} ${
              theme === "dark"
                ? "bg-dark-base-300 text-white"
                : "bg-light-base-300 text-black"
            }`}
          >
            {content}
          </div>
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
