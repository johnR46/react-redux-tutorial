export const ADD_TO_CART = 'ADD TO CART'
export const DELETE_TO_CART = 'DELETE TO CART'
export const CLEAR_CART = 'CLEAR CART'

// export const action = {
//     type: '',
//     payload:
//         {
//             id: '',
//             title: '',
//             price: 2,
//             quantity: 1
//         },
// }


// Action Creates
export const AddToCart = (addedToCart) => {
    return {
        type: ADD_TO_CART,
        payload: addedToCart
    }
}

export const ClearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const DeleteItemInCart = (id) => {
    return {
        type: DELETE_TO_CART,
        payload: id
    }
}