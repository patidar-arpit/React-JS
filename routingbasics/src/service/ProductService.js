import Product from './Product';
import ProductList from '../components/ProductList';

class ProductService {
    constructor() {
        this.prodArr = [new Product(1, "Chair", 12, 6999), new Product(2, "Laptop", 26, 89000), new Product(3, "Chair", 12, 6999)]
    }
    getAllProducts() {
        return this.prodArr
    }
    addProduct(product) {
        console.log(product.pname);
        this.prodArr.push(new Product(product.pid, product.pname, product.qty, product.price));
        console.log(this.prodArr);
    }
    deleteProduct(pid) {
        console.log(pid);
        let pos = this.prodArr.findIndex(p => p.pid == pid);
        this.prodArr.splice(pos, 1);
        console.log(this.prodArr);
    }
}

export default new ProductService();