import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const groupSchema = z.object({
  name: z.string().min(1, 'グループ名は必須です'),
  status: z.enum(['active', 'inactive']),
  facility: z.string().min(1, '施設は必須です'),
  layout: z.string().min(1, 'レイアウトは必須です'),
});

type GroupFormData = z.infer<typeof groupSchema>;

interface GroupFormProps {
  initialData?: GroupFormData;
  onSubmit: (data: GroupFormData) => void;
  onCancel: () => void;
}

export default function GroupForm({ initialData, onSubmit, onCancel }: GroupFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<GroupFormData>({
    resolver: zodResolver(groupSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">グループ名</label>
        <Input
          id="name"
          {...register('name')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
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
        <label htmlFor="layout" className="block text-sm font-medium text-gray-700 mb-1">レイアウト図</label>
        <Input
          id="layout"
          {...register('layout')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.layout && <p className="mt-1 text-sm text-red-600">{errors.layout.message}</p>}
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