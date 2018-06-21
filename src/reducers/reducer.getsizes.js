import Product from "../product.json";

export default ()=>{
    let sList = sizeList(Product);
    return({
        sList
    });
}

function sizeList(list){
    let sizes = ["All"];
    list.map((product)=>{
        for(let size in product.sizes){
            if(sizes.indexOf(size) == -1){
                sizes.push(size);
            }
        }
    });
    return sizes.sort();
}