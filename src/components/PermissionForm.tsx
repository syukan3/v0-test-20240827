import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const permissionSchema = z.object({
  name: z.string().min(1, '権限名は必須です'),
  role: z.string().min(1, 'ロールは必須です'),
  accessLevel: z.string().min(1, 'アクセスレベルは必須です'),
  resource: z.string().min(1, 'リソースは必須です'),
  status: z.enum(['active', 'inactive']),
});

type PermissionFormData = z.infer<typeof permissionSchema>;

interface PermissionFormProps {
  initialData?: PermissionFormData;
  onSubmit: (data: PermissionFormData) => void;
  onCancel: () => void;
}

export default function PermissionForm({ initialData, onSubmit, onCancel }: PermissionFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<PermissionFormData>({
    resolver: zodResolver(permissionSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">権限名</label>
        <Input
          id="name"
          {...register('name')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
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
        <label htmlFor="accessLevel" className="block text-sm font-medium text-gray-700 mb-1">アクセスレベル</label>
        <Input
          id="accessLevel"
          {...register('accessLevel')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.accessLevel && <p className="mt-1 text-sm text-red-600">{errors.accessLevel.message}</p>}
      </div>
      <div>
        <label htmlFor="resource" className="block text-sm font-medium text-gray-700 mb-1">リソース</label>
        <Input
          id="resource"
          {...register('resource')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.resource && <p className="mt-1 text-sm text-red-600">{errors.resource.message}</p>}
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">ステータス</label>
        <select
          id="status"
          {...register('status')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="active">有効</option>
          <option value="inactive">無効</option>
        </select>
        {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>}
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