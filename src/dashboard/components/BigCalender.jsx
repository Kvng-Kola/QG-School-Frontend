import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../Data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalender = () => {
  const [view, setview] = useState(Views.WORK_WEEK);
  const handeleOnchangeView = (selectedView) => {
    setview(selectedView);
  };
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handeleOnchangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};
export default BigCalender;
