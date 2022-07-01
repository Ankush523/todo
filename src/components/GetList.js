import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';

const GetList = () => {
    
    const contract = GetContract();
    const[lists,setList] = useState([]);

    const change =(key) =>{
         contract.change(key)
         showStatus();
    }

    const getList = async() => {
        var len = await contract.receiveid();
        var parseList = len.toString();
        
        setList([]);
        for(let i=1;i<=parseList;i++)
        {
            var list = await contract.receivemsg(i);
            setList((lists)=>[...lists,list]);
        }
        console.log(lists)
    }

    const showStatus=(temp)=>{
        return((temp === 'false')?<label>Not Done Yet</label>:<label>Already done </label>)
    }

    return ( 
        <div>
            <br/>
            <br/>
            <button className='font-mono rounded-md w-[fit-content] px-2 text-[20px] bg-slate-100 hover:shadow-lg' onClick={getList} >Get List of work</button>
            {
                Object.keys(lists).map((list,index)=>(
                    <div>
                    <p>{lists[index].work}</p>
                    <p>Status:{(lists[index].done).toString()}</p>
                    <button onClick={()=>change(index)}  >Change</button>
                    {showStatus((lists[index].done).toString())}
                    </div>
                ))
            }
        </div>
     );
}
 
export default GetList;