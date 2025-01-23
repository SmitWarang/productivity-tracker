import React, { useState } from 'react';

const Home = () => {
  const [goal, setGoal] = useState('');
  const handleSetGoal = () => {
    localStorage.setItem('dailyGoal', goal);
    alert('Goal set!');
  };

  return (
    <div>
      <h1>Set Your Daily Goal</h1>
      <input
        type="text"
        placeholder="Enter your goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button onClick={handleSetGoal}>Set Goal</button>
    </div>
  );
};

export default Home;
