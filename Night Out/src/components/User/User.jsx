import React from 'react'
import Posts from '../Feed/Posts'

function User() {
  return (
    <div className='text-white w-4/5'>
        <div className='bg-gradient-to-b from-gradiante1 via-gradiante2 to-gradiante4'>
            <img src="" alt="Portada" />
            <div className='flex flex-row'>
                <img src="src\assets\logo.png" alt="Foto Perfil" className='rounded-full w-48'/>
                <div>
                <h2>Moderador</h2>
                <p>@Moderador</p>
                </div>
                <button>Edit</button>
            </div>
            <div>
                <h2>Descripción</h2>
                <p>Moderador de Night Out</p>
            </div>
        </div>
        <div className='bg-violeta rounded-t-3xl'>
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