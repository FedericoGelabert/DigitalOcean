
const Product = ({productSrc, productAlt, productTitle, productP, productMargin }) => {
    return (
        <div className={`shadow-xl flex w-3.9/12 h-64 rounded-3xl my-5 bg-white ${productMargin}`}>
            <div className="p-10 flex justify-between flex-col">
                <div className="flex flex-col">
                    <div className="flex mb-2">
                        <img src={productSrc} alt={productAlt} className="w-9 object-contain" />
                        <h3 className="text-2xl font-semibold font-epilogue ml-3">{productTitle}</h3>
                    </div>
                    <p className="text-do-gray-card font-inter">{productP}</p>
                </div>
                <button className="flex items-center font-jetbrain text-do-blue-light font-medium">Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg></button>
            </div>
        </div>
    )
}

export default Product;