import { useState } from 'react'
import Navbar from './components/navbar'
import Input from './components/Input'


function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [editIndex, setEditIndex] = useState()

  const handleAdd = () => {
    setTodos([...todos, todo])
    setTodo('')
    // if (todo === '') {setTodos([]);}
  }
  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
};
  const handleEdit = (index) => {
    setEditIndex(index)
    setTodo(todos[index]);
  }
  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleEditSave = () => {
    let todoList = [...todos]; // Create a copy of the todos array
    todoList[editIndex] = todo; // Modify the item at editIndex
    console.log(todoList);
    setTodos(todoList); // Update the state with the modified array
    setEditIndex()
  }

  return (
    <>
      <Navbar />
      <div className='lg:mt-24 min-h-lvh w-full md:w-11/12 bg-slate-200 mx-auto md:ml-16 mt-24 md:mt-24 p-4 md:p-10 rounded-3xl'>
  <div>
    <h1 className='text-xl md:text-2xl font-bold underline'> Add Todo </h1>
    <div className='flex flex-col md:flex-row gap-3 md:gap-5 mt-4 md:mt-7'>
      <input 
        className='w-full md:w-96 h-9 border-2 border-gray-600 text-black mb-2 md:mb-0' 
        type="text" 
        placeholder="Add a todo" 
        value={todo} 
        onChange={handleChange} 
      />
      {editIndex == null ? 
        <button className='p-1 w-full md:w-20 border-4 border-slate-500 bg-slate-800 text-white hover:bg-slate-400' onClick={handleAdd}>Add</button> :
        <button className='p-1 w-full md:w-20 border-4 border-slate-500 bg-slate-800 text-white hover:bg-slate-400' onClick={handleEditSave}>Edit</button>
      }
    </div>
    <h2 className='text-xl md:text-2xl font-bold underline mt-8 md:mt-10'>List Of Todos</h2>
    <div className='mt-6 md:mt-10'>
      {todos.map((item, index) => {
        return (
          <div key={index} className='flex flex-col md:flex-row items-center md:items-start text-center gap-2 md:gap-4 mb-4'>
            {/* <input 
              className='text-center'
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(index)}
            /> */}
            <div className='px-2 w-full md:w-96 h-9 border-2 border-gray-600 flex items-center justify-center md:justify-start'>
              {item}
            </div>
            <div className='flex gap-2 mt-2 md:mt-0 '>
  <button className='p-1 w-20 border-4 border-slate-500 bg-slate-800 text-white hover:bg-slate-400' onClick={() => handleEdit(index)}>EDIT</button>
  <button className='p-1 w-20 border-4 border-slate-500 bg-slate-800 text-white hover:bg-slate-400' onClick={() => handleDelete(index)}>DELETE</button>
</div>
          </div>
        )
      })}
    </div>
  </div>
</div>

    </>
  )
}

export default App
