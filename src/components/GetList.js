import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';

const GetList = () => {
    
    const contract = GetContract();
    const[lists,setList] = useState([]);

    const change =(key) =>{
         contract.change(key)
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

    return ( 
        <div>
            <br/>
            <br/>
            <button className='font-mono  ml-4 bg-blue-400 rounded-xl w-[fit-content] pl-2 pr-2 hover:shadow-lg' onClick={getList} >Get List</button>
            {
                Object.keys(lists).map((list,index)=>(
                    <div>
                    <p>{lists[index].work}</p>
                    <button onClick={()=>change(index)}>Change</button>
                    </div>
                ))
            }
        </div>
     );
}
 
export default GetList;