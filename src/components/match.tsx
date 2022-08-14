import React from 'react';

interface IProps {
  home_team: string;
  away_team: string;
  date: Date;
  channels: Array<string>;
}

const Match: React.FC<IProps> = ({ home_team, away_team, date, channels }) => {
  return (
    <div className="card w-96 shadow-xl my-2 bg-green-400 text-slate-50">
      <div className="card-body">
        <div className="text-2xl grid grid-cols-3 text-center py-4 items-center">
          <h2>{home_team}</h2>
          <h2 className=" text-base self-center">VS</h2>
          <h2>{away_team}</h2>
        </div>
        <div className=" bg-slate-100 rounded-md text-green-400 p-3 flex self-center">
          <span className="text-center">{date.toDateString()}</span>
        </div>
        <div className="  rounded-md  p-3 flex flex-col self-center">
          {channels.map((channel) => (
            <span className="text-center">{channel}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;
