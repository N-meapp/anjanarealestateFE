import {BrowserRouter,Route, Routes, useLocation} from 'react-router-dom'
import AdminSidebar from './SideBar'
import AdminCategory from './AdminCategory'
import { Table } from './Table'
import { useState } from 'react'
import Dashboard from './Dashboard'
import AdminProperty from './AdminProperty'
import AddProperty from './AddProperty'
import Youtube from './Youtube'

export default function Admin(){

    const [tab,setTab] = useState('dashboard')

    const controllTabs = (currentTab)=>{
        setTab(currentTab)
    }

    return(
        <div className="flex">
        <AdminSidebar controllTabs={controllTabs} />
        <div className="p-5 w-full">
        {tab=='dashboard'?
            <Dashboard />:
            tab=='property'?
            <AdminProperty />:
            tab=='category'?
            <AdminCategory />:
            tab=='youtube'?
            <Youtube />:
            null
        }
        </div>
        </div>
    )
}