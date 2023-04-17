import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [
            {
                "id": 1,
                "imagen": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "Bike",
                "price": 120,
            },
            {
                "id": 1,
                "imagen": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "Bike",
                "price": 120,
            },
            {
                "id": 1,
                "imagen": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "Bike",
                "price": 120,
            },
            {
                "id": 1,
                "imagen": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "Bike",
                "price": 120,
            },
        ]
    }),
    getters: {
        getCartPets: (state) => {
            return state.cart
        },
        getTotalPrice: (state) => {
            return state.total = state.cart.reduce((prev, curr) => {
                const prevPrice = prev.price || prev;
                const prevQuantity = prev.quantity || 1;
                return prevPrice * prevQuantity + curr.price * curr.quantity;
            }, 0);
        }
    }
})

