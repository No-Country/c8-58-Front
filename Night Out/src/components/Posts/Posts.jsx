import React from 'react';
import styles from './Posts.module.css';

function Posts({ id, name, image, event, text, location }) {
	return (
		<>
			<div className="pt-16 text-black">
				<div className="flex flex-row justify-evenly items-center">
					<div className="flex flex-col items-center justify-evenly">
						<img
							className="w-16 rounded-full"
							src="src\assets\logo.png"
							alt="Foto Usuario"
						/>
						<p className="text-white">@Moderador</p>
					</div>
					<p className="w-3/4 p-5 bg-gray rounded-3xl text-center text-3xl flex flex-wor justify-evenly">
						<span className="font-bold">{event}</span>
						<span className="font-bold">{name}</span>
					</p>
				</div>

				<div className="relative m-5">
					<p className=" rounded-3xl  p-5  bg-gray text-black ">{text}</p>
					<button className="absolute w-14 bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-full p-3 top-1/2 right-2">
						<img
							className=""
							src="src\assets\comentariosBlanco.png"
							alt="Comentarios"
						/>
					</button>
				</div>
				<div className={styles.img_container}>
					<img src={image} alt="not found" />
				</div>
				<span className="bg-black h-0.1 w-full block mt-16"></span>
			</div>
		</>
	);
}

export default Posts;
