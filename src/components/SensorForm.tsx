import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const sensorSchema = z.object({
  name: z.string().min(1, 'センサー名は必須です'),
  status: z.enum(['active', 'inactive']),
  group: z.string().min(1, 'グループは必須です'),
  rebootTime: z.string().min(1, '再起動時間は必須です'),
  imageRetentionDays: z.number().min(1, '画像保持期間は必須です'),
  rebootFlag: z.boolean(),
  configAppliedFlag: z.boolean(),
  location: z.string().min(1, '設置場所は必須です'),
});

export default function SensorForm({ initialData, onSubmit, onCancel }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(sensorSchema),
    defaultValues: initialData || {
      name: '',
      status: 'active',
      group: '',
      rebootTime: '',
      imageRetentionDays: 30,
      rebootFlag: false,
      configAppliedFlag: false,
      location: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">センサー名</label>
        <Input
          id="name"
          {...register('name')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
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
        <label htmlFor="group" className="block text-sm font-medium text-gray-700 mb-1">グループ</label>
        <Input
          id="group"
          {...register('group')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.group && <p className="mt-1 text-sm text-red-600">{errors.group.message}</p>}
      </div>

      <div>
        <label htmlFor="rebootTime" className="block text-sm font-medium text-gray-700 mb-1">再起動時間</label>
        <Input
          id="rebootTime"
          type="datetime-local"
          {...register('rebootTime')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.rebootTime && <p className="mt-1 text-sm text-red-600">{errors.rebootTime.message}</p>}
      </div>

      <div>
        <label htmlFor="imageRetentionDays" className="block text-sm font-medium text-gray-700 mb-1">画像保持期間 (日)</label>
        <Input
          id="imageRetentionDays"
          type="number"
          {...register('imageRetentionDays')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.imageRetentionDays && <p className="mt-1 text-sm text-red-600">{errors.imageRetentionDays.message}</p>}
      </div>

      <div>
        <label htmlFor="rebootFlag" className="block text-sm font-medium text-gray-700 mb-1">再起動フラグ</label>
        <Input
          id="rebootFlag"
          type="checkbox"
          {...register('rebootFlag')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.rebootFlag && <p className="mt-1 text-sm text-red-600">{errors.rebootFlag.message}</p>}
      </div>

      <div>
        <label htmlFor="configAppliedFlag" className="block text-sm font-medium text-gray-700 mb-1">設定反映フラグ</label>
        <Input
          id="configAppliedFlag"
          type="checkbox"
          {...register('configAppliedFlag')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.configAppliedFlag && <p className="mt-1 text-sm text-red-600">{errors.configAppliedFlag.message}</p>}
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">設置場所</label>
        <Input
          id="location"
          {...register('location')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>}
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <Button type="button" onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-sm transition-colors duration-200">
          キャンセル
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm transition-colors duration-200">
          保存
        </Button>
      </div>
    </form>
  );
}