import React, { useState } from 'react';
import './MoodEntryForm.css'; // Import CSS for MoodEntryForm

const MoodEntryForm = ({ onAddEntry }) => {
  const [date, setDate] = useState('');
  const [mood, setMood] = useState('');
  const [details, setDetails] = useState('');

  // Convert mood to a numerical score for the chart
  const moodToScore = (mood) => {
    switch (mood.toLowerCase()) {
      case 'happy': return 5;
      case 'neutral': return 3;
      case 'sad': return 1;
      default: return 0;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && mood && details) {
      onAddEntry({ date, mood, details, moodScore: moodToScore(mood) });
      setDate('');
      setMood('');
      setDetails('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Mood:
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          required
        />
      </label>
      <label>
        Details:
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        ></textarea>
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default MoodEntryForm;