'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { sampleUsers } from '@/data/sampleUsers'; // 追加

const userSchema = z.object({
  name: z.string().min(1, 'ユーザー名は必須です'),
  status: z.enum(['active', 'inactive']),
  email: z.string().email('有効なメールアドレスを入力してください'),
  userType: z.string().min(1, 'ユーザー種別は必須です'),
  facility: z.string().min(1, '施設は必須です'),
  role: z.string().min(1, 'ロールは必須です'),
  group: z.string().min(1, 'グループは必須です'),
  isAdmin: z.boolean(),
});

type UserFormData = z.infer<typeof userSchema>;

interface UserFormProps {
  initialData?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  onCancel: () => void;
}

export default function UserForm({ initialData, onSubmit, onCancel }: UserFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">ユーザー名</label>
        <Select
          id="name"
          {...register('name')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {sampleUsers.map(user => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
        </Select>
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">ステータス</label>
        <Select
          id="status"
          {...register('status')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="active">有効</option>
          <option value="inactive">無効</option>
        </Select>
        {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <Input
          id="email"
          {...register('email')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">ユーザー種別</label>
        <Input
          id="userType"
          {...register('userType')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.userType && <p className="mt-1 text-sm text-red-600">{errors.userType.message}</p>}
      </div>
      <div>
        <label htmlFor="facility" className="block text-sm font-medium text-gray-700 mb-1">施設</label>
        <Input
          id="facility"
          {...register('facility')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.facility && <p className="mt-1 text-sm text-red-600">{errors.facility.message}</p>}
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">ロール</label>
        <Input
          id="role"
          {...register('role')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>}
      </div>
      <div>
        <label htmlFor="group" className="block text-sm font-medium text-gray-700 mb-1">グループ</label>
        <Input
          id="group"
          {...register('group')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.group && <p className="mt-1 text-sm text-red-600">{errors.group.message}</p>}
      </div>
      <div className="flex items-center">
        <Checkbox
          id="isAdmin"
          {...register('isAdmin')}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="isAdmin" className="ml-2 block text-sm font-medium text-gray-700">管理権限</label>
      </div>
      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
        >
          キャンセル
        </Button>
        <Button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out"
        >
          保存
        </Button>
      </div>
    </form>
  );
}