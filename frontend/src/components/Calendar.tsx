"use client";

import { useState } from "react";

export const Calendar = () => {
  const [currentDate] = useState<Date>(new Date());
  const getMonthDays = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return { daysInMonth, firstDay };
  };

  const { daysInMonth, firstDay } = getMonthDays(currentDate);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/4 h-3/4 grid grid-cols-7 grid-rows-6 border">
        {weekDays.map((m) => (
          <div className="border p-5" key={m}>
            {m}
          </div>
        ))}
        {Array(firstDay)
          .fill(null)
          .map((_, i) => (
            <div className="p-5 border" key={`empty-${i}`}></div>
          ))}
        {daysArray.map((day) => (
          <div className="p-5 border" key={day}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
