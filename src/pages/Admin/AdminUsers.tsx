import React from 'react';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import { LoadingOverlay } from '@/components/Loader';
import Table from '@/components/Table';
import { deleteUser } from '@/services/api/admin.service';
import { useGetAllUsersQuery } from '@/services/queries/admin/users.query';
import { type UserTableRows } from '@/types/user';

const AdminUsers = () => {
  const queryClient = useQueryClient();

  const {
    isLoading: usersLoading,
    isError: usersError,
    error: usersErrorMessage,
    data: users,
  } = useGetAllUsersQuery();

  if (usersError) {
    toast.error(usersErrorMessage as string, { theme: 'colored' });
  }

  const handleDelete = async (item: UserTableRows) => {
    if (item.id) {
      try {
        await deleteUser(item.id);
        toast.success('User deleted successfully', { theme: 'colored' });
        await queryClient.invalidateQueries(['myUsers']);
      } catch (deleteError) {
        toast.error('Error deleting User', { theme: 'colored' });
        console.error('Delete error:', deleteError);
      }
    } else {
      toast.error('User ID is undefined', { theme: 'colored' });
    }
  };

  return (
    <div>
      {usersLoading ? (
        <LoadingOverlay />
      ) : (
        <Table
          title="Users"
          data={users ?? []}
          headers={['username', 'email', 'roles', 'delete']}
          buttonText="Add User"
          buttonDisplay={true}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default AdminUsers;
