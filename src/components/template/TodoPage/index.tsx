import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as S from "./todoPage.style";
import Modal from "@/components/organisms/Modal";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { getTodos, postTodo } from "@/api/todoApi";
import { useQuery } from "react-query";

const TodoPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = useRef<any>(null);
  const { data: date } = useQuery("getTodos", getTodos);
  const [initialDate, setInitialState] = useState([]);

  const onEventAdded = (event: any) => {
    console.log("event :", event);
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(event);
  };

  const mutation = useMutation("postTodo", postTodo, {
    onError: (error: any) => {
      console.log(error);
      const { response } = error;
      alert(response.data.message);
    },
  });

  const handleEventAdd = (data: any) => {
    console.log("data.event", data.event);
    mutation.mutate(data.event);
  };

  const dragEvent = (event: any) => {
    console.log("drag", event);
  };

  useEffect(() => {
    setInitialState(date);
  }, [date]);
  console.log("initialDate", initialDate);

  return (
    <S.CalendarWrapper>
      <div>TodoList</div>
      <S.Calendar>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          ref={calendarRef}
          nowIndicator={true}
          editable={true}
          selectable={true}
          events={initialDate}
          height={"50vh"}
          eventAdd={(event) => handleEventAdd(event)}
          eventDrop={(event) => dragEvent(event?.event?._instance?.range.start)}
        />
      </S.Calendar>
      <button onClick={() => setModalOpen(true)}>Add Todo</button>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={(event: any) => onEventAdded(event)}
      />
    </S.CalendarWrapper>
  );
};

export default TodoPage;
