import Image from "next/image";
import Script from 'next/script';
import react, {useEffect, useState} from 'react';
import {useRouter} from 'next/router'; 
import { WaitToRedirect } from "#script/redirects";


const App = () => {

	const Router = useRouter();	
	WaitToRedirect({where: '/invoices/', router: Router, waitTime: 10});

	const [dots, setDots] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prevDots) => {
				if (prevDots.length === 3) {
					return "";
				}
				return prevDots + ".";
			});
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='tx-vco'>
			Strona ładuje się <span id='loading-dots'>{dots}</span>
		</div>
	);
};

export default App;


