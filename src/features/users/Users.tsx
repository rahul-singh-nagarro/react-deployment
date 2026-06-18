import React , {useEffect} from 'react';
import { deleteUser,fetchUsers} from './usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { GridTable } from '../../components/table/GridTable';

export const Users: React.FC = () => {
const appDispatch = useDispatch<AppDispatch>();
const users = useSelector((state: RootState) => state.users.users);
useEffect(() => {
    appDispatch(fetchUsers());
}, [appDispatch]);
console.log(users);

const handleDelete = (id: number) => {
    appDispatch(deleteUser(id));
};
  return (
    <div>
      <h1>Users Page</h1>
      <p>This is the users feature component.</p>
      <GridTable users={users} handleDelete={handleDelete} />
    </div>
  );
};