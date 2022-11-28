import React from 'react'
import Posts from '../Feed/Posts'

function User() {
  return (
    <div className='text-white w-4/5'>
        <div className='bg-gradient-to-b from-gradiante1 via-gradiante2 to-gradiante4 mb-10 rounded-b-3xl overflow-hidden'>
            <img className='w-full rounded-b-3xl ' src="src\assets\PortadaPrueba.png" alt="Portada" />
            <div className='p-8 relative'>
            <div className='flex flex-row absolute -top-36 w-11/12 items-end justify-between'>
                <div className='flex flex-row items-end'>
                <img src="src\assets\logo.png" alt="Foto Perfil" className='rounded-full h-56 '/>
                <div className=' font-medium text-xl text-center ml-5'>
                <h2>Moderador</h2>
                <p>@Moderador</p>
                </div>
                </div>
                <button className='bg-gray rounded-full  text-black text-2xl font-semibold p-5 pl-10 pr-10 text-center hover:bg-white'>Edit</button>
            </div>
            <div className='mt-20'>
                <h2 className='text-2xl font-semibold'>Descripción</h2>
                <p className='text-lg pt-5'>Moderador de Night Out</p>
            </div>
            </div>
        </div>
        <div className='bg-violeta rounded-t-3xl mx-auto'>
            <h2 className='text-2xl bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 p-3 rounded-t-3xl pl-5'>Posts</h2>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
        </div>
    </div>
  )
}

export default User