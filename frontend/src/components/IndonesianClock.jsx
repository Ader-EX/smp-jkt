import { useEffect, useState } from "react";

const IndonesianClock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatterDate = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  });

  const formatterTime = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Jakarta",
  });

  return (
    <div className="flex p-2 bg-white text-black font-bold gap-x-4">
      <h3>{formatterDate.format(dateTime)}</h3>
      <h3>{formatterTime.format(dateTime)}</h3>
    </div>
  );
};

export default IndonesianClock;
