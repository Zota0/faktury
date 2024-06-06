import Invoice from '@/components/invoice';

const InvoiceList = () => {


    return (
        <div className="h-full w-full flex-center">
            <div className="w-full md:w-[80%] bg-blue-900 h-full flex-center px-24">
                <Invoice InvoiceID={0} key={0} />
            </div>
        </div>
    );
}

export default InvoiceList;