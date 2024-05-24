
export default function BaseballCaps() {

    const CapProducts = [
        {
            id: 1,
            title: 'Baseball Cap 1',
            description: 'this is a baseball cap',
            imageSrc: '/images/caps/OI4.jpeg',
            price: '19.99'
        },
        {
            id: 2,
            title: 'Baseball Cap 1',
            description: 'this is a baseball cap',
            imageSrc: '/images/caps/OIP (2).jpeg',
            price: '19.99'
        },
        {
            id: 3,
            title: 'Baseball Cap 1',
            description: 'this is a baseball cap',
            imageSrc: '/images/caps/OIP2.jpeg',
            price: '19.99'
        },
        {
            id: 4,
            title: 'Baseball Cap 1',
            description: 'this is a baseball cap',
            imageSrc: '/images/caps/OIP3.jpeg',
            price: '19.99'
        },
        {
            id: 5,
            title: 'Baseball Cap 1',
            description: 'this is a baseball cap',
            imageSrc: '/images/caps/OIP5.jpeg',
            price: '19.99'
        },
        {
            id: 6,
            title: 'Baseball Cap 1',
            description: 'this is a baseball cap',
            imageSrc: '/images/caps/OIP (2).jpeg',
            price: '19.99'
        },
        {
            id: 7,
            title: 'Baseball Cap 1',
            description: 'this is a baseball cap',
            imageSrc: '/images/caps/OIP6.jpeg',
            price: '19.99'
        },
        {
            id: 8,
            title: 'Baseball Cap 1',
            description: 'this is a baseball cap',
            imageSrc: '/images/caps/OIP7.jpeg',
            price: '19.99'
        },
    ]

    return (
        <div>
            <h1 className="flex justify-center m-3 text-3xl">BASEBALL CAPS</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-4">
                {CapProducts.map(CapProduct => (
                    <div key={CapProduct.id} className="card p-4 bg-white shadow-md rounded-lg">
                        <div className="">
                            <img src={CapProduct.imageSrc} className="product-image" />
                        </div>
                        <div className="text-black mt-5 text-center py-5">
                            <h3>{CapProduct.title}</h3>
                            <p>{CapProduct.description}</p>
                            <h4>£{CapProduct.price}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}