//Reducer.jsx
import { createSlice } from "@reduxjs/toolkit";
import { login, register, updateUser, laysptheoloai, getProducts,fetchProducts  } from "./API";
const initialState = {
    name: 'products',
    user: null, // thông tin user đăng nhập
    cart: [], // {_id, name, price, quantity, images}
    categories: {},
    list: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.list = action.payload; // Cập nhật danh sách sản phẩm khi thành công
            state.loading = false;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
////////////////////////////////////////////////////////////////
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: { // chạy trong app
        addItemToCart: (state, action) => {
            const item = action.payload;
            const index = state.cart.findIndex(e => e._id == item._id)
            if (index == -1) {
                state.cart.push({ ...item, quantity: 1 });
            } else {
                state.cart[index].quantity++
            }
        },
        changeQuantity: (state, action) => {
            const { _id, quantity } = action.payload;
            const index = state.cart.findIndex(e => e._id === _id);
            if (index !== -1) {
                state.cart[index].quantity += quantity;
                if (state.cart[index].quantity <= 0) {
                    state.cart.splice(index, 1);
                }
            }
        },
        logout: (state, action) => {
            state.user = null;
        },
        clearCart: (state, action) => {
            state.cart = [];
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item._id !== action.payload)
        }
    },
    //login
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            console.log("...Pending");
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload?.user; //action.payload = response.user
            console.log(state.user);
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log("...Rejected");
            state.user = null;
        });


        // register
        builder.addCase(register.pending, (state, action) => {
            console.log('...Pending');
        });
        builder.addCase(register.fulfilled, (state, action) => {
            // state.user = action.payload;
        });
        builder.addCase(register.rejected, (state, action) => {
            console.log('...Rejected');
            state.user = null;
        });


        // updateUser
        builder.addCase(updateUser.pending, (state, action) => {
            console.log('...Pending');
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.user = action.payload?.user;
            console.log(action.payload?.user);
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            console.log('...Rejected');
        });


          // Thêm xử lý cho laysptheoloai
          builder.addCase(laysptheoloai.pending, (state) => {
            console.log("Fetching product categories...");
        });
        builder.addCase(laysptheoloai.fulfilled, (state, action) => {
            state.categories = action.payload;
            console.log("Product categories fetched successfully:", action.payload);
        });
        builder.addCase(laysptheoloai.rejected, (state) => {
            console.log("Failed to fetch product categories");
            state.categories = {};
        });


        builder.addCase(getProducts.pending, (state) => {
            console.log('Fetching products...');
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            console.log('Products fetched:', action.payload);
            // Cập nhật trạng thái nếu cần
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            console.log('Failed to fetch products:', action.payload);
        });
        


        //asm
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.list = action.payload; // Cập nhật danh sách sản phẩm khi thành công
            state.loading = false;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { addItemToCart, logout, clearCart, changeQuantity, removeItem } = appSlice.actions;
export default appSlice.reducer;




