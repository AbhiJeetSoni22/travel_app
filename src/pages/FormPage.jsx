import React from 'react'
import Hero from '../component/Form/Hero'
import TravelForm from '../component/Form/TravelForm'

const FormPage = () => {
  return (
    <div className="min-h-screen dark:bg-[#0B0809] bg-[#FDFBF7] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
    <Hero />
    <TravelForm />
    </div>
  )
}

export default FormPage
