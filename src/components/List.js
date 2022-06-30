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
            <input onChange={e => setTodo(e.target.value)}/>
            <button onClick={addTodo}>Add Work</button>
        </div>
     );
}
 
export default List;