import React from 'react';
import { useContract } from 'wagmi';
import TodoABI from '../contracts/ABIs/TodoABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0x1FD8dB0C97170421a7FFcA6a2bB8D736cB05BCA2',
        contractInterface: TodoABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;