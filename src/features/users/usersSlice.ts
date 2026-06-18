import  {createSlice, PayloadAction, createAsyncThunk}  from "@reduxjs/toolkit";

type UserType ={
    completed : boolean,
    id : number,
    title : string,
    userId : number
}

type UsersState = {
  users: UserType[];
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data as UserType[];
    }
);

const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        
        deleteUser : (state, action: PayloadAction<number>) =>{
            state.users =state.users.filter(user => user.id !== action.payload);
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch users';
        });
    }
});

export const { deleteUser} = usersSlice.actions;
export default usersSlice.reducer;

