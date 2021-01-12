let serial = 0

export default class Product {
    constructor(title, picture, sizes, colors){
        this.id = ++serial
        this.title = title
        this.picture = picture
        this.sizes = sizes
        this.colors = colors
    }
}