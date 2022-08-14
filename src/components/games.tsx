import React from 'react';
import Match from './match';

const data = [
  {
    home_team: 'Arsenal',
    away_team: 'Manchester City',
    date: new Date(),
    channels: ['Sky Sports', 'BT Sport', 'Opus Sports']
  },
  {
    home_team: 'West Brow',
    away_team: 'Liverpool',
    date: new Date(),
    channels: ['Ireland Sports TV', 'Sky Sports 7', 'Sky Premier Leauge']
  },
  {
    home_team: 'Chelsea',
    away_team: 'Manchester United',
    date: new Date(),
    channels: ['Premier Sports']
  }
];

const Games = () => {
  return (
    <div className="flex flex-col">
      {data.map((d) => (
        <Match {...d} />
      ))}
    </div>
  );
};

export default Games;
