class InventoryPage {
    constructor(page){
        this.page = page;
        this.inventorItems = page.locator('.inventory_item'); 
        this.cartBadge = page.locator('.shopping_cart_badge');
        
    }

    getProduct(productName){
        return this.inventorItems.filter({hasText: productName});
    }

    async addProductToCart(productName){
        const product = this.getProduct(productName);
        await product.getByRole('button', {name: 'Add to cart'}).click();

    }
    async getCartBadgeCount(){
        return await this.cartBadge.textContent();

    }
}

module.exports = {InventoryPage};