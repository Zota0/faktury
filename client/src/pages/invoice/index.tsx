import react, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { WaitToRedirect } from "@/scripts/Redirects";

const InvoiceIndexPage = () => {
	const Router = useRouter();

  const redirectTime = 3000;
  WaitToRedirect({ where: "/invoices/", router: Router, waitTime: redirectTime });

  return (
		<div className="w-full h-full p-36 flex-center flex-col">
      <p className="tx-lg" >Błąd - Strona nie jest dostępna </p>
      <br />
      <p className="tx-lg" >Za {(redirectTime/1000)}s nastąpi przekierowanie do strony głównej</p>
    </div>
	);
};

export default InvoiceIndexPage;