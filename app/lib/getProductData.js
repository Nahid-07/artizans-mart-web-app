export default async function getData (){
    const res = await fetch('http://localhost:5000/product')
    if(!res.ok){
        throw new Error('failed to fetch')
    }
    return res.json()
}
