
import Link from "next/link";
import CIcon from "@coreui/icons-react";
import * as icn from "@coreui/icons";
import { useRouter } from 'next/router';


const HeaderComponent = () => {
    const currentPathName = useRouter().pathname;
	let InvoiceURL = '/invoices/';

	if(currentPathName == '/invoices' || currentPathName == '/invoices/') {
		InvoiceURL = ``;
	} else {	
		InvoiceURL = '/invoices/';
	}

	console.log(currentPathName);

	console.log(InvoiceURL);


    return (
		<div className='h-full bg-blue-950 w-full flex justify-center align-center items-center content-center'>
			<div className='w-full md:w-[80%] h-full flex justify-center text-center align-middle items-center flex-row content-center'>
				<div className='w-2/6 h-full flex align-middle justify-center items-center content-center font-bold font-mono capitalize'>
					<Link href={`/`}>
						<span className='tx-vhg sm:text-lg'>faktury</span>
					</Link>
				</div>
				<div className='none w-1/6 md:block md:w-2/6 h-full'></div>
				<div className='w-3/6 md:w-3/6 h-full flex align-middle justify-center items-center content-center flex-row'>
					<div className='w-0 md:w-2/3 h-full flex items-center align-middle justify-center'></div>
					<div className='flex flex-row h-full w-1/2 gap-4 md:gap-0'>
						<div className='w-1/2 h-full flex items-center align-middle justify-center'>
							<Link title='Wszystkie faktury' href={InvoiceURL ?? ""} className='p-4'>
								<CIcon
									icon={icn.cilList}
									className='w-full h-full scale-100'
								/>
							</Link>
						</div>
						<div className='w-1/2 h-full flex items-center align-middle justify-center'>
							<Link title='Nowa faktura' href={`/invoice/new`} className='w-full h-full md:w-[80%] md:h-[80%] p-3 rounded-full bg-green-400 text-green-950'>
								<CIcon
									icon={icn.cilNoteAdd}
									className='w-full h-full scale-100'
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderComponent;
