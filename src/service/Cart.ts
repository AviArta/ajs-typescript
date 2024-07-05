import Buyable from "../domain/Buyable";

export default class Cart {
    
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): number {
        let totalPrice: number = 0;
        this._items.forEach(item => totalPrice += item.price * item.amount);
        return totalPrice;
    }

    totalPriceWithDiscount(discount: number = 0): number {
        let totalPrice: number = 0;
        this._items.forEach(item => totalPrice += item.price*item.amount);
        totalPrice -= (totalPrice * discount) / 100;
        return totalPrice;
    }

    removeItem(id: number): void {
        let item = this._items.find(item => item.id === id);
        if (item) {
            const indexItem = this._items.indexOf(item);
            if (item.counted) {
                if (this._items[indexItem].amount > 1) {
                    this._items[indexItem].amount -= 1;
                }
                else {
                    this._items.splice(indexItem, 1);
                }
            }
            else {
                this._items = this._items.filter(item => item.id !== id);
            }
        }
    }
}