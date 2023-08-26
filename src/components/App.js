import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Header from './Header';
import About from "./About";
import ArticleList from "./ArticleList";
import { CATEGORIES } from "./constants";
import { TASKS } from "./DailyTasks";


console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS)

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  const handleTaskDelete = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleTaskFormSubmit = newTask => {
    newTask.id = tasks.length + 1;
    setTasks([...tasks, newTask]);
  }

  const filteredTasks = selectedCategory === "All"
  ? tasks
  : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={[...CATEGORIES, "ALL"]}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList 
        tasks={filteredTasks}
        onDelete={handleTaskDelete}
      />
      <Header
        name="Your Blog Name"/>
      <About
        image="https://via.placeholder.com/215"
        about="About your blog..." />
      <ArticleList articles={TASKS}/>
    </div>
  );
}

export default App;
