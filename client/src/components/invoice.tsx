import Image from 'next/image';
import Link from "next/link";
import CIcon from "@coreui/icons-react";
import * as icn from "@coreui/icons";
import type {InvoiceParams} from '@/types/all';

const Invoice = ({InvoiceID}:{InvoiceID: InvoiceParams["id"]}) => {

    InvoiceID ??= -1;

    const InvoiceInfo = ((InvoiceID > 0)?(InvoiceID):('Błędny Numer Faktury'));
    const InvoiceURL = ((InvoiceID > 0)?(InvoiceID):('error'));

    return (
        <div className="grid grid-rows-12 grid-cols-1 border-8 border-t border-black  bg-white h-96 w-[30%]">
            <div className="tx-c row-span-2 flex-center tx-sm bg-black text-blue-200 w-full h-full">
                <span className={((`${InvoiceID}`.length > 11 || InvoiceID <= 0) ? 'text-lg' : 'text-xl')}>
                    {InvoiceInfo}
                </span>
            </div>
            <div className="tx-sm flex-center row-span-10 bg-gray-800 text-blue-400 w-full h-full">
                <Link className='w-full h-full' href={`/invoice/${InvoiceURL}`}>
                    <CIcon icon={icn.cilDescription} className="w-full h-full scale-100" size='lg' />
                </Link>
            </div>
        </div>
    );
    
}

export default Invoice;