
// import { useEffect, useState } from "react";
import { Navbaar } from "../components/Navbar";
import { SkillSection } from "../components/SkillSection";
import { TaskSelector } from "../components/TaskSelector";
import { SelectedTasks } from "../components/SelectedTask";
import { ProgressBar } from "../components/ProgressBar";
// import { StreakBox } from "../components/StreakBox";
// import { getStreakFromStorage } from "../utils/streakUtils";
import { useTasks } from "../hooks/useTasks";
import "../App.css"

export const HomePage = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user.id;
  const selectedSkill = user.skill || [];

  const {
    taskSelectorSkill,
    setTaskSelectorSkill,
    selectedTasks,
    completedTasks,
    handleAddTask,
    handleSelectTask,
    handleTaskToggle,
    handleRemoveTask,
    getCompletionPercentage,
  } = useTasks(userId, selectedSkill);

  // const { streak } = getStreakFromStorage(userId);

  return (
    <>
       <Navbaar />
       <div className="main-content">
        <SkillSection selectedSkill={selectedSkill} handleAddTask={handleAddTask} />
       
        <TaskSelector taskSelectorSkill={taskSelectorSkill} selectedTasks={selectedTasks} onClose={() => setTaskSelectorSkill(null)} handleSelectTask={handleSelectTask}/>
         <ProgressBar percentage={getCompletionPercentage()} />
        
        <SelectedTasks selectedTasks={selectedTasks} completedTasks={completedTasks} handleTaskToggle={handleTaskToggle} handleRemoveTask={handleRemoveTask} />
       
       
       
        </div> 
     </>
  );
};
