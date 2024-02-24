import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


  export const DebugConsumer = () => {
    let {allstate} = useContext(GlobalContext);
    return (<div>{allstate}</div>);
}