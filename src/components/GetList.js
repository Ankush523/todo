import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';

const GetList = () => {
    
    const contract = GetContract();
    const[lists,setList] = useState([]);

    const getList = async() => {
        var len = await contract.receiveid();
        var parseList = len.toString();
        
        setList([]);
        for(let i=1;i<=parseList;i++)
        {
            var list = await contract.receivemsg(i);
            setList((lists)=>[...lists,list]);
        }
    }

    return ( 
        <div>
            <br/>
            <br/>
            <button className='font-mono  ml-4 bg-blue-400 rounded-xl w-[fit-content] pl-2 pr-2 hover:shadow-lg' onClick={getList} >Get List</button>
            {
                Object.keys(lists).map((list,index)=>(
                    <p>{lists[index].message}</p>
                ))
            }
        </div>
     );
}
 
export default GetList;