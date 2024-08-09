//API.jsx
import { createAsyncThunk } from '@reduxjs/toolkit'
import AxiosHelper from '../components/helpers/AxiosHelper';


export const login = createAsyncThunk(
    "users/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/users/login", data);
            console.log(response);
            if(response.status == true) {
                return response; //action.payload = response.user
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const register = createAsyncThunk(
    "users/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/users/register", data);
                console.log(response);
                if(response.status == true) {
                    return response; 
                }
            } catch (error) {
                console.log(error);
                return rejectWithValue(error);
            }
    }
);
export const laysptheoloai = createAsyncThunk(
    '/sanphams/phanloaisp',
    async (_, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().get('/phanloaisp');
            if (response.status === 200) {
                return response.data;
            }
            return rejectWithValue('Failed to fetch categories');
        } catch (error) {
            console.log('Error fetching product categories:', error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
export const getNew = createAsyncThunk(
    "news/get",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .get("/news/get", data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const getProducts = createAsyncThunk(
    'sanphams/phanloai/:id',
    async (id, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().get(`/sanphams/phanloai/${id}`);
            console.log('API Response:', response); // Đảm bảo trả về response.data
            return response;
        } catch (error) {
            console.log('API Error:', error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);




export const getCate = createAsyncThunk(
    "category-add/get",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .get("category-add/get", data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);
export const fetchProducts = createAsyncThunk(
    'products',
    async (_, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().get('/products'); // Sử dụng endpoint chính xác
            return response; // Trả về dữ liệu sản phẩm
            console.log(response);
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
export const updateUser = createAsyncThunk(
    'users/edit',
    async (data, { rejectWithValue }) => {
        try {
            // Thay đổi phương thức thành PUT và truyền ID vào URL
            const response = await AxiosHelper().put(`/users/edit/${data.id}`, {
                TenNguoiDung: data.TenNguoiDung,
                Email: data.Email,
                Sdt: data.Sdt,
                Diachi: data.Diachi,
            });

            console.log(response);
            if (response.status === 200) {
                return response.data; // Trả về dữ liệu người dùng sau khi cập nhật
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data || error.message); // Cung cấp thông tin lỗi chi tiết
        }
    }
);
