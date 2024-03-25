export interface IPeople {
    id: number
    images: string,
    name: string,
}


export const data: IPeople[] = [
    {
        id: 1,
        images: '../img/cart.svg',
        name: 'cart',
    },
    {
        id: 2,
        images: '../img/business-suitcase.svg',
        name: 'business-suitcase',
    },
    {
        id: 3,
        images: '../img/bus-front.svg',
        name: 'bus-front',
    },
]