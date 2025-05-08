import React, { useEffect } from 'react'
import Hero from '../component/Dashboard/Hero'
import UpcomingTrip from '../component/Dashboard/UpcomingTrip'
import Accomodation from '../component/Dashboard/Accomodation'
import Activities from '../component/Dashboard/Activities'

import ActivityCart from '../component/Dashboard/ActivityCart'
import BottomBar from '../component/Dashboard/BottomBar'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigation = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('travelToken')){
      console.log("Token is present")
     
    }
    else{
      console.log("Token is not present")
      navigation('/')
    }
  }, []);

  return (
    <div className="min-h-screen dark:bg-[#0B0809] bg-[#FDFBF7]  flex flex-col  py-6 px-3 sm:px-6 lg:px-8">
    <Hero userName="John Doe" />
    <h2 className="text-[18px] font-medium  dark:text-[#F5F5F5] mb-2">
        Your Upcoming Trip
      </h2>
    <UpcomingTrip/>

    <Accomodation/>

    <Activities/>

    <ActivityCart/>
    
    <BottomBar/>
    </div>
  )
}

export default Dashboard
