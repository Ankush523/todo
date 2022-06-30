import React from 'react';
import { useContract } from 'wagmi';
import TodoABI from '../contracts/ABIs/TodoABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xa5082E4719F5B1bb12b87078a7E5Fd18779515e9',
        contractInterface: TodoABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;