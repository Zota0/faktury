
const Redirect = async({ where, router }: { where: string, router: any }) => {
    
    where = where ?? "/faktury/";
    await router.push(where);
}


const WaitToRedirect = async(
    { where, router, waitTime }:{ where: string, router: any, waitTime: number }
) => {
    
    setTimeout(async () => {
        Redirect({ where, router });
    }, waitTime);
}

module.exports = {
    Redirect,
    WaitToRedirect,
};