import React from 'react';
import Posts from '../Posts/Posts';
import {Link} from 'react-router-dom'

function User() {
  return (
    <div className='text-white w-4/5 s:w-full'>
        <div className='bg-gradient-to-b from-gradiante1 via-gradiante2 to-gradiante4 mb-10 rounded-b-3xl overflow-hidden relative'>
            <Link to="/Feed"><img className='w-10 absolute top-3 left-3 rotate-180 s:w-8' src="src\assets\flechaBlancaDerecha.png" alt="Feed" /></Link>
            <img className='w-full rounded-b-3xl' src="src\assets\PortadaPrueba.png" alt="Portada" />
            <div className='p-8 relative'>
            <div className='flex flex-row absolute 2xl:-top-24 w-11/12 items-end justify-between s:-top-10 lg:-top-16'>
                <div className='flex flex-row items-end'>
                <img src="src\assets\logo.png" alt="Foto Perfil" className='rounded-full 2xl:h-40 s:h-24 lg:h-32'/>
                <div className=' font-medium text-xl text-center ml-5'>
                <h2 className='s:text-lg'>Moderador</h2>
                <p className='s:text-lg'>@Moderador</p>
                </div>
                </div>
            </div>
            <div className='2xl:mt-20 s:mt-10'>
                <h2 className='text-2xl font-semibold s:text-xl'>Description</h2>
                <p className='text-lg pt-5 s:text-base'>Moderador de Night Out</p>
            </div>
            </div>
        </div>
        <div className='bg-violeta rounded-t-3xl mx-auto'>
            <h2 className='text-2xl bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 p-3 rounded-t-3xl pl-5 s:text-xl'>Posts</h2>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
        </div>
    </div>
  )

}

export default User;
