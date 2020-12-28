import React, { useEffect, useState, useCallback } from "react";
import {Layout,Wrapper,Todos,Task,IconWrapper,Icon,NewTaskWrapper,NewTask,Submit} from "../components/Form.styled";
import {
  getTasks,
  createNewTask,
  deleteTasksById,
  putTaskById,
} from "../services/api";

const Todo = () => {
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    isDone: false,
    user: "emreyildirim",
  });

  const handleRequest = useCallback(async () => {
    const response = await getTasks();
    setData(response.data);
  }, []);

  const handleIsDone = async (e, item) => {
    const response = await putTaskById(item.id, {
      ...item,
      isDone: e.target.checked,
    });
    const filteredData = data.filter((x) => x.id !== item.id);
    setData([...filteredData, response.data]);
  };
  const handleDelete = async (item) => {
    await deleteTasksById(item);

    handleRequest();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNewTask(newTask);
      handleRequest();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <Layout>
      <Wrapper onSubmit={handleSubmit}>
      <Todos>You Have {data.length} Todos</Todos>
        {data.map((item) => (
          <Task htmlFor="check">
            {item.title}
            <IconWrapper>
            <input
              name="check"
              type="checkbox"
              onChange={(e) => handleIsDone(e, item)}
              checked={item.isDone}
              aria-checked={item.isDone}
            />
            <Icon onClick={() => handleDelete(item.id)} />
            </IconWrapper>

          </Task>
        ))}
        <NewTaskWrapper>
        <NewTask
          type="text"
          placeholder="Add new task"
          value={newTask.title}
          onChange={(event) => {
            setNewTask({
              ...newTask,
              title: event.target.value,
            });
          }}
        />
        <Submit type="submit" value="Submit">
          Submit
        </Submit>
        </NewTaskWrapper>
        
      </Wrapper>
    </Layout>
  );
};

export default Todo;
