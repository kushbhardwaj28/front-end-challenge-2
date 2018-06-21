import Product from "../product.json";

export default ()=>{
    let categories = category(Product);
    return({
        categories
    });
}

function category(list){
    let categories = ["All"];
    list.map((product)=>{
        if(categories.indexOf(product.category) == -1){
            categories.push(product.category);
        }
    });
    return categories;
}
