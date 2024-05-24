

export default function TeeShirts() {

    const teeShirtProducts = [
        {
            id: '1',
            title: 'T-shirt',
            description: 'Nike T-shirt',
            imageSrc: '/images/t-shirts/OIPtshirt1.jpeg',
            price: 10,
        },
        {
            id: '2',
            title: 'T-shirt',
            description: 'Nike T-shirt',
            imageSrc: '/images/t-shirts/OIPtshirt2.jpeg',
            price: 10,
        },
        {
            id: '3',
            title: 'T-shirt',
            description: 'Nike T-shirt',
            imageSrc: '/images/t-shirts/OIPtshirt3.jpeg',
            price: 10,
        },
        {
            id: '4',
            title: 'T-shirt',
            description: 'Nike T-shirt',
            imageSrc: '/images/t-shirts/OIPtshirt4.jpeg',
            price: 10,
        },
        {
            id: '5',
            title: 'T-shirt',
            description: 'Nike T-shirt',
            imageSrc: '/images/t-shirts/OIPtshirt5.jpeg',
            price: 10,
        },
        {
            id: '6',
            title: 'T-shirt',
            description: 'Nike T-shirt',
            imageSrc: '/images/t-shirts/OIPtshirt6.jpeg',
            price: 10,
        },
    ]
    return (
        <div>
            <h1 className="flex justify-center text-3xl m-3">TeeShirts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-4">
            {teeShirtProducts.map(teeShirtProduct => (
                <div key={teeShirtProduct.id} className="card p-4 bg-white shadow-md rounded-lg">
                        <div className="">
                            <img src={teeShirtProduct.imageSrc} className="product-image"/>
                        </div>
                    <div className="text-black mt-5 text-center py-5">
                        <h3>{teeShirtProduct.title}</h3>
                        <p>{teeShirtProduct.description}</p>
                        <h4>£{teeShirtProduct.price}</h4>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}