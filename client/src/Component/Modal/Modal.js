import css from "./Modal.module.css";

export default function Modal({ show, setShow, className = "", children }) {
  return show ? (
    <div className={css.modal} onClick={() => setShow(false)}>
      <div
        className={css.modalContent + " " + className}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
}
