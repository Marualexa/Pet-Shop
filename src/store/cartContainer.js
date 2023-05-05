import { defineStore } from "pinia";
import { useAsync } from "@/hooks/useAsync";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
        total: 0,
        length: 0,
        quantity: 0,
        openCart: false
    }),
    getters: {
        getCartPets: (state) => {
            return state.cart
        },
        getTotalPrice: (state) => {
            return state.total = state.cart.reduce((sum, item) => {
                console.log(sum, item)
                const itemCart = item.price * item.quantity;
                const sumItem = sum;
                return itemCart + sumItem;
            }, 0);
        },
        getCartLength: state => {
            return state.length;
        },
        getItemQuantity: (state) => {
            return (itemid) => state.cart.find((item) => item.id === itemid).quantity;
        },
        getPriceBasket: (state) => {
            return (itemGo) => {
               const constPrice = state.cart.find((item) => item.id === itemGo)
               return constPrice.quantity * constPrice.price
            }
        },
        getOpenCart: (state) => {
            return state.openCart
        }
    },
    actions: {
        async removeItemCart(item) {
            const { makeRequest } = useAsync();
            await makeRequest(`cart/${item.id}`, {}, "delete")
            const copiCart = this.cart.map(item => item.id);
            const position = copiCart.indexOf(item.id);
            this.cart.splice(position, 1)
            this.length -= 1;
        },
        async addItemCart(item) {
            let newItem = {
                ...item,
                quantity: 1
            }

            //validar si el item existe, hacer peticion get del item.id
            const { makeRequest, appStatus, result } = useAsync();
            try {
                await makeRequest(`cart/${item.id}`);
            }
            catch {

            }
            console.log('appStatus', appStatus.value)
            // el item existe
            if (appStatus.value === 200) {
                newItem.quantity = result.value.quantity + 1;
                await makeRequest(`cart/${newItem.id}`, {}, "put",
                    newItem
                );

                const copiCart = this.cart.map(item => item.id);
                const position = copiCart.indexOf(item.id);

                const cartCopy = this.cart;
                cartCopy[position] = {
                    ...newItem
                }
                this.cart = [...cartCopy.value];

            }
            // el item no existe
            else {
                await makeRequest("cart", {}, "POST", newItem);
                this.cart.push(newItem);
                this.length += 1;
            }


            console.log('newItem', newItem)
        },
        async getAddStore() {
            const { makeRequest, result } = useAsync();
            await makeRequest("cart", {});
            this.cart = [...result.value];
            this.length = this.cart.length;
        },
        increaseQuantity(item) {
            let newItem = {
                ...item,
            }
            const { makeRequest } = useAsync();
            newItem.quantity++;
            makeRequest(`cart/${newItem.id}`, {}, "put",
                newItem
            );
            const cartIncrease = this.cart.map(item => item.id);
            const position = cartIncrease.indexOf(item.id);

            const cartCopy = this.cart;

            cartCopy[position] = {
                ...newItem
            }

            this.cart = [...cartCopy.value];
        },
        decreaseAmount(item) {
            let newItem = {
                ...item,
            }
            const { makeRequest } = useAsync();
            newItem.quantity--;
            makeRequest(`cart/${newItem.id}`, {}, "put",
                newItem
            );
            const cartIncrease = this.cart.map(item => item.id);
            const position = cartIncrease.indexOf(item.id);

            const cartCopy = this.cart;
            
            cartCopy[position] = {
                ...newItem
            }

            this.cart = [...cartCopy.value];
        },
        neglectingCart() {
            this.openCart = !this.openCart
        }
    },
})

