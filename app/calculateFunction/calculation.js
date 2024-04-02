export const calculation = (oldPrice, newPrice)=>{
    return oldPrice && newPrice ? parseFloat(100-(newPrice / oldPrice)*100).toFixed(0) : 0;
}