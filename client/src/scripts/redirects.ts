export const Redirect = async({ where, router }: { where: string, router: any }) => {
    
    where = where ?? "/faktury/";
    await router.push(where);
}


export const WaitToRedirect = async({ where, router, waitTime }:{ where: string, router: any, waitTime: number }) => {
    
    setTimeout(async () => {
        Redirect({ where, router });
    }, waitTime);
}
