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
        return((temp === 'false')?<label className='text-red-500'> Not Done Yet</label>:<label className='text-green-500'> Already done </label>)
    }

    return ( 
        <div className='flex flex-col items-center justify-center' >
            <br/>
            <br/>
            <button className='font-mono rounded-md w-[fit-content] px-2 text-[20px] bg-slate-100 hover:shadow-lg' onClick={getList} >Get List of work</button>
            <br/>
            <div className='w-[50%] h-[fit-content] shadow-xl rounded-xl bg-white p-[30px]'>
                <label className='text-[20px] font-mono text-white bg-black w-[fit-content] py-2 px-4 rounded-xl'>Your Work List</label>
                <br/>
                <br/>
            <div className='flex flex-col-reverse w-[100%] h-[fit-content]' >
            {
                 Object.keys(lists).map((list,index)=>(
                    <div className=''>
                        <div className='flex flex-row w-[100%] justify-around border-2 rounded-md p-2 '>
                        <p className='font-mono font-semi-bold text-[20px]'>{lists[index].work}</p>
                        <p className='text-[20px]'>Status : {showStatus((lists[index].done).toString())}</p>
                        </div>
                    <br/>
                    <button className='bg-slate-100 w-[fit-content] p-1 rounded-md hover:shadow' onClick={()=>change(lists[index].todoid)}>Change Status</button>
                    <br/>
                    <br/>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
     );
}
 
export default GetList;