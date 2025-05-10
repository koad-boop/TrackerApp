// src/hooks/useTasks.js
import { useEffect, useState } from "react";
import { updateStreak } from "../utils/streakUtils";

export const useTasks = (userId, selectedSkill) => {
  const [taskSelectorSkill, setTaskSelectorSkill] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState({});
  const [completedTasks, setCompletedTasks] = useState({});

  useEffect(() => {
    setSelectedTasks(JSON.parse(localStorage.getItem(`${userId}_selectedTasks`) || "{}"));
    setCompletedTasks(JSON.parse(localStorage.getItem(`${userId}_completedTasks`) || "{}"));
  }, [userId]);

  useEffect(() => {
    localStorage.setItem(`${userId}_selectedTasks`, JSON.stringify(selectedTasks));
    localStorage.setItem(`${userId}_completedTasks`, JSON.stringify(completedTasks));
  }, [selectedTasks, completedTasks, userId]);

  const handleAddTask = (skill) => setTaskSelectorSkill(skill);

  const handleSelectTask = (skill, task) => {
    if (selectedTasks[skill]?.includes(task)) return;
    setSelectedTasks((prev) => ({
      ...prev,
      [skill]: [...(prev[skill] || []), task],
    }));
  };

  const handleTaskToggle = (skill, task) => {
    const completed = completedTasks[skill] || [];
    const updated = completed.includes(task)
      ? completed.filter((t) => t !== task)
      : [...completed, task];

    setCompletedTasks((prev) => {
      const newCompleted = { ...prev, [skill]: updated };
      if (!completed.includes(task)) updateStreak(userId);
      return newCompleted;
    });
  };

  const handleRemoveTask = (skill, task) => {
    const updatedSelected = selectedTasks[skill].filter((t) => t !== task);
    const updatedCompleted = (completedTasks[skill] || []).filter((t) => t !== task);

    setSelectedTasks((prev) => {
      const updated = { ...prev, [skill]: updatedSelected };
      if (updatedSelected.length === 0) delete updated[skill];
      return updated;
    });

    setCompletedTasks((prev) => {
      const updated = { ...prev, [skill]: updatedCompleted };
      if (updatedCompleted.length === 0) delete updated[skill];
      return updated;
    });
  };

  const getCompletionPercentage = () => {
    let total = 0;
    let done = 0;

    for (const skill of Object.keys(selectedTasks)) {
      const tasks = selectedTasks[skill] || [];
      const completed = completedTasks[skill] || [];
      total += tasks.length;
      done += completed.length;
    }

    return total === 0 ? 0 : Math.round((done / total) * 100);
  };

  return {
    taskSelectorSkill,
    setTaskSelectorSkill,
    selectedTasks,
    completedTasks,
    handleAddTask,
    handleSelectTask,
    handleTaskToggle,
    handleRemoveTask,
    getCompletionPercentage,
  };
};
