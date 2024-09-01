import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const facilitySchema = z.object({
  name: z.string().min(1, '施設名は必須です'),
  address: z.string().min(1, '住所は必須です'),
  managementFacility: z.string().min(1, '管理施設は必須です'),
  timezone: z.string().min(1, 'タイムゾーンは必須です'),
  serviceEndDate: z.string().min(1, 'サービス終了日は必須です'),
});

type FacilityFormData = z.infer<typeof facilitySchema>;

interface FacilityFormProps {
  initialData?: FacilityFormData;
  onSubmit: (data: FacilityFormData) => void;
  onCancel: () => void;
}

export default function FacilityForm({ initialData, onSubmit, onCancel }: FacilityFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FacilityFormData>({
    resolver: zodResolver(facilitySchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">施設名</label>
        <Input
          id="name"
          {...register('name')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">住所</label>
        <Input
          id="address"
          {...register('address')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
      </div>

      <div>
        <label htmlFor="managementFacility" className="block text-sm font-medium text-gray-700 mb-1">管理施設</label>
        <Input
          id="managementFacility"
          {...register('managementFacility')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.managementFacility && <p className="mt-1 text-sm text-red-600">{errors.managementFacility.message}</p>}
      </div>

      <div>
        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">タイムゾーン</label>
        <Input
          id="timezone"
          {...register('timezone')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.timezone && <p className="mt-1 text-sm text-red-600">{errors.timezone.message}</p>}
      </div>

      <div>
        <label htmlFor="serviceEndDate" className="block text-sm font-medium text-gray-700 mb-1">サービス終了日</label>
        <Input
          id="serviceEndDate"
          type="date"
          {...register('serviceEndDate')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.serviceEndDate && <p className="mt-1 text-sm text-red-600">{errors.serviceEndDate.message}</p>}
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