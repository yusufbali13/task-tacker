import React from "react";

const Tasks = () => {
  return (
    <div className="m-auto">
      <form>
        <p>Task</p>
        <input class="form-control " type="text"></input>
        <p>Day & Time</p>
        <input class="form-control" type="datetime-local"></input>
        <input
          className="input-btn rounded-2"
          type="submit"
          value="Save Task"
        ></input>
      </form>
      <p className="text-center">No task to show...</p>
    </div>
  );
};

export default Tasks;
