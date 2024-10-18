import React from 'react';
import { useSelector } from 'react-redux';

function BandwidthStat({ color, title, value }) {
  return (
    <div className="flex grow gap-3 py-4 pr-12 pl-3.5 w-full rounded-xl bg-slate-100 max-md:pr-5 max-md:mt-10">
      <div className={`shrink-0 w-1 border-4 border-${color} border-solid h-[91px]`} />
      <div className="flex flex-col self-start">
        <div className="text-xl text-gray-500 max-md:mr-1.5">{title}</div>
        <div className="mt-1.5 text-4xl text-black">{value}</div>
      </div>
    </div>
  );
}

function BandwidthStats({ id }) {
  const user = useSelector((state) => state.users.find((user) => user.id === id));

  if (!user) {
    return <div>User not found</div>;
  }

  const stats = [
    { color: "green-500", title: "Max bandwidth", value: user.stats["Max bandwidth"] },
    { color: "yellow-400", title: "Bandwidth limit", value: user.stats["Bandwidth limit"] },
    { color: "blue-500", title: "Highest MIR reached", value: user.stats["Highest MIR reached"] },
  ];

  return (
    <div className="flex gap-5 max-md:flex-col">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <BandwidthStat {...stat} />
        </div>
      ))}
    </div>
  );
}

export default BandwidthStats;