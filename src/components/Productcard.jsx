import { use } from "react";
import toast from "react-hot-toast";

const ProductDate = fetch("./Tools.json").then((res) => res.json());

const Productcard = ({carts, setCarts}) => {
  const Products = use(ProductDate);
  

  const addToCart =(product)=>{
    
    const isExisst = carts.find(p => p.id == product.id);
    if(isExisst){
      toast.error('item is allready added to carts')
      return
    }
    setCarts([...carts,(product)])
    toast.success('Item added to carts')
  }



  const isActive = (id) =>carts.find (cart=> cart.id == id)


  return (
    <div className="grid grid-cols-3 my-10 gap-10">
      {Products.map((product) => (

        <div key={product.id}>

          <div className="card w-96 bg-base-100 shadow-sm">

            <div className="card-body">

              <div className="flex justify-between">

               <div className="px-4 py-4 border border-[#ebebeb] rounded-full">
                <img  src={`/public/icons/${product.icon}`} alt="" />
               </div>

                 <span className={`badge badge-xs badge-warning
                   
                 ${product.tag === "Best Seller" ? "bg-[#FEF3C6] text-[#BB4D00] text-[14px] py-3 px-2 rounded-full font-semibold" : "" }
                 
                 ${product.tag === "Popular" ? "bg-[#E1E7FF] text-blue text-[14px] py-3 px-2 rounded-full font-semibold border-white" : "" }

                  ${product.tag === "New" ? "bg-[#DBFCE7] text-[#OA883E] text-[14px] py-3 px-2 rounded-full font-semibold border-white" : "" }
                 
                 `}>{product.tag}</span>

              </div>
             
              
              <div className="space-y">
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p>{product.description}</p>
              </div>


             <div className="flex gap-2 items-center">
              <span className="text-xl">$ {product.price}</span>
              <span>{product.period}</span>
             </div>
              


              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{product.highlight_1}</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{product.highlight_2}</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{product.highlight_3}</span>
                </li>
    
              </ul>
              
              <div className="mt-6">
                <button className={`btn btn-block rounded-full py-6 font-semibold transition-all border-none ${
                  
            isActive(product.id)
             ? "!bg-gray-300 !text-gray-500 cursor-not-allowed" 
            : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
             }`}

                disabled={isActive(product.id)}
                onClick={()=>addToCart(product)}>Buy Now</button>
              </div>


            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productcard;
