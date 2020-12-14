import React, { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const [datetime, setDatetime] = useState<string[]>([]);

  const time = () => {
    const date1 = new Date();
    const date2 =
      date1.getFullYear() +
      "/" +
      (date1.getMonth() + 1) +
      "/" +
      date1.getDate() +
      " " +
      date1.getHours() +
      ":" +
      date1.getMinutes() +
      ":" +
      date1.getSeconds();
    setDatetime([...datetime, date2]);
  };

  useEffect(() => {
    const interval = setInterval(time, 1000);

    // コンポーネントが破棄された場合に実行される
    return () => {
      // Timerを削除する
      clearInterval(interval);
      console.log("cleared");
    };
  });

  return (
    <div>
      {datetime && (
        <ul>
          {datetime.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Timer;
