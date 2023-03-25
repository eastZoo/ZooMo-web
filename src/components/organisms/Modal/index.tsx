import { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = ({ isOpen, onClose, onEventAdded }: any) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState<any>(new Date());
  const [end, setEnd] = useState<any>(new Date());

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    onEventAdded({
      title,
      start,
      end,
    });
    setTitle("");
    setStart(new Date());
    setEnd(new Date());
    onClose();
  };
  return (
    <ReactModal isOpen={isOpen}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label>Start Date</label>
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={start}
            onChange={(date: Date) => setStart(date)}
          />
        </div>

        <div>
          <label>End Date</label>
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={end}
            onChange={(date: Date) => setEnd(date)}
          />
        </div>

        <button type="submit">Add button</button>
        <button onClick={onClose}>Close</button>
      </form>
    </ReactModal>
  );
};

export default Modal;
