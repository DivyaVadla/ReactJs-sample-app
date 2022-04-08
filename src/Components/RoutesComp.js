import React from 'react'
import {Router,Routes,Route} from 'react-router-dom';
import ClassComponent from '../ClassComponent';
import Home from '../Home';
import ContactUs from './ContactUs';
import ListsAndKeys from './ListsAndKeys';
import Pagination from './Pagination';
import Table from './Table';
import TodoAppUseEffect from './TodoAppUseEffect';
import User from './User';
import UseStateHook from './UseStateHooks';

function RoutesComp(){
    return (
        <div>
            <Routes>
                <Route path='/homecomp' element={<Home />}  exact/>
                <Route path='/classcomp' element={<ClassComponent />}  />
                <Route path='/listkeys' element={<ListsAndKeys />}  />
                <Route path='/contactus' element={<ContactUs />}  />
                <Route path='/classlifecycle' element={<User />}  />
                <Route path='/pagination' element={<Pagination />}  />
                <Route path='/table' element={<Table />}  />
                <Route path='/usestate' element={<UseStateHook />}  />
                <Route path='/useEffect' element={<TodoAppUseEffect/>}  />
            </Routes>

        </div>
    )
}

export default RoutesComp