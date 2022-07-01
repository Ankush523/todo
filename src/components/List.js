import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';

 
const List = () => {
    const contract = GetContract();
    const[todo,setTodo] = useState('');
    const addTodo = async () =>{
        await contract.add(todo);
    }
    return ( 
        <div>
            <br/>
            <label className='text-[40px]'>Welcome to Your Daily Work-Tracker</label>
            <br/>
            <br/>
            <br/>
            <label className='font-mono text-[20px]'>Enter work to do: </label>
            <input className="w-[400px] h-[50px] rounded-md" onChange={e => setTodo(e.target.value)}/>
            <br/>
            <br/>
            <button className='w-[100px] text-purple-900 text-[20px] bg-slate-100 rounded-md hover:shadow-xl' onClick={addTodo} >Add Work</button>
        </div>
     );
}
 
export default List;