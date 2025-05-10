export const updateStreak = (userId) => {
  const key = `${userId}_streak`;
  const streakData = JSON.parse(localStorage.getItem(key) || "{}");

  const today = new Date().toDateString();
  if (streakData.lastDate === today) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();

  const newStreak = streakData.lastDate === yesterdayStr ? (streakData.streak || 0) + 1 : 1;
  localStorage.setItem(key, JSON.stringify({ streak: newStreak, lastDate: today }));
};

export const getStreakFromStorage = (userId) => {
  const key = `${userId}_streak`;
  return JSON.parse(localStorage.getItem(key) || '{"streak": 0, "lastDate": ""}');
};
