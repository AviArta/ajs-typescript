import Buyable from '../domain/Buyable';

export default class Cart {
    static add(movie: any) {
      throw new Error('Method not implemented.');
    }
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}