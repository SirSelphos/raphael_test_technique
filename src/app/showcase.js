export default class Showcase {
    constructor(products){
        this.map = new Map()
        this.generate(products)
    }
    insert(product){
        this.map.set(product.id, product)    
    }
    search(product){
        return this.map.get(product.id)
    }
    remove(product){
        let deleted = this.biome.get(product.id)
        this.biome.delete(product.id)
        return deleted
    }
    generate(products){
        for(let product of products){
            this.insert(product)
        }
    }
    hasProduct(product){
        return this.map.has(product.id)
    }
    hasProducts(){
        return this.map.size > 0
    }
    products(){
        return this.map.values()
    }
    allKeys(){
        return this.map.keys()
    }
}