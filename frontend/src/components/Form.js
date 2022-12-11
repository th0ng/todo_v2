import React from 'react'

const Form = ({ newItem, handleChange, handleSubmit, message }) => {
  return (
    <div className='form'>
      {/* Form to submit new todo item */}
      <form onSubmit={handleSubmit}>
        <label>
          <h2>What's in your mind:</h2>
          <textarea className="new-item-input" type="text" placeholder='New task' value={newItem} onChange={handleChange} />
        </label>
        <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
      </form>

      {/* Display error/success message if there is one */}
      <div className='message'>{message}</div>
    </div>
  )
}

export default Form
