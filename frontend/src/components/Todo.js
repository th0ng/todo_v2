import React from "react";

import { BsTrash } from "react-icons/bs";

const Todo = ({ todolist, handleRemove }) => {
  return (
    <div className="container">
      
        {Object.values(todolist).map((item) => 
          <div className="card" key={item.id}>
            <div>
              <input type="checkbox" className="check-with-label"/>
              <label className="label-for-check content">{item.task}</label>
            </div>
            <BsTrash className="delete-button" onClick={() => handleRemove(item)}/>
          </div>
        )}
      
    </div>
  )
};

export default Todo;
