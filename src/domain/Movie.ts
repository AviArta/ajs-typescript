import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly yearRelease: number,
        readonly country: string,
        readonly genres: Array<string>,
        readonly time: number,
        readonly nameEng?: string,
        readonly slogan?: string,
        readonly counted: boolean = false,
        readonly amount: number = 1,
    ) { }
}