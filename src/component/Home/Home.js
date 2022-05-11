import React,{Component} from 'react';
import Search from './search'
import QuickSearch from './QuickSearch'
import Header from '../../header';

const Home = () =>{

    return(
        <>
        <Header/>
        <Search/>
        <QuickSearch/>
        </>
    )
}

export default Home;