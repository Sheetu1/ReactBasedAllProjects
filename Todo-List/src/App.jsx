import React from 'react'

const App = () => {
  let saveTodoList = (e) => {
    e.preventDefault();
    let ToName = e.target.ToName.value;
    alert(ToName);
  }

  return (
    <div>
     <form onSubmit={saveTodoList} className='flex items-center justify-center pt-8 gap-2'>
      <h1>ToDo List</h1>
       <input className='px-10 py-2  rounded-md ' type="text" name='ToName' placeholder='Enter Your Task' />
      <button className='px-2 py-2 bg-blue-500 text-white rounded-md '>Add Task</button>
     </form>

    </div>
  )
}

export default App