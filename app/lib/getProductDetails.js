export default async function getProductDetails (id){
    const res = await fetch('http://localhost:5000/product')
    const data = await res.json();

    const product = data.find(item => item.id === id);
    return product
}
