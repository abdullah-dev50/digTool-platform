

const Carts = ({setCarts, carts}) => {

    const total = carts.reduce((sum,cart)=>sum + (cart.price), 0);

    const removeCard =(id)=>{
        const filterCarts =carts.filter(cart => Number(cart.id) !== Number(id));
        console.log(filterCarts)
        setCarts(filterCarts);
    }
    

    if(carts.length == 0){
        return <div className="font-bold flex justify-center mt-20 mb-10">No Carts</div>
    }

    return (

        <div className=" border-2 border-[#F2F2F2] rounded-2xl p-10 mt-10">

            <h4 className="font-bold mb-4">Your Cart</h4>
            {
                carts.map(cart => {
                    
                   return(
                    <div className="bg-[#F9FAFC] mt-5 p-5 rounded-2xl mb-5 flex justify-between items-center" key={cart.id} >

                        <div className="flex gap-5 items-center">

                          <div>
                            <img className="bg-white p-3 rounded-full" src={`/public/icons/${cart.icon}`} alt="" />
                          </div>

                          <div>
                            <h4 className="font-semibold text-[20px]">{cart.name}</h4>
                            <p className="text-[16px] text-[#627382]">$ {cart.price}</p>
                          </div>

                        </div>

                        <div>
                            <button className="font-medium text-[16px] text-red-500" onClick={()=> removeCard(cart.id)}>Remove</button>
                        </div>
                    </div>
                   );
                    
                })
            }
            
            <div className="flex justify-between">
                <p>Total</p>
                <h2>${total}</h2>
            </div>
            <div className="mt-5">
                <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full grid  items-center justify-center w-full pt-3 pb-3">Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default Carts;