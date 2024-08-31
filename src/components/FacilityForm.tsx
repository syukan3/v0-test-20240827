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
}

export default function FacilityForm({ initialData, onSubmit }: FacilityFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FacilityFormData>({
    resolver: zodResolver(facilitySchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">施設名</label>
        <Input id="name" {...register('name')} className="mt-1" />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">住所</label>
        <Input id="address" {...register('address')} className="mt-1" />
        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
      </div>

      <div>
        <label htmlFor="managementFacility" className="block text-sm font-medium text-gray-700">管理施設</label>
        <Input id="managementFacility" {...register('managementFacility')} className="mt-1" />
        {errors.managementFacility && <p className="mt-1 text-sm text-red-600">{errors.managementFacility.message}</p>}
      </div>

      <div>
        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">タイムゾーン</label>
        <Input id="timezone" {...register('timezone')} className="mt-1" />
        {errors.timezone && <p className="mt-1 text-sm text-red-600">{errors.timezone.message}</p>}
      </div>

      <div>
        <label htmlFor="serviceEndDate" className="block text-sm font-medium text-gray-700">サービス終了日</label>
        <Input id="serviceEndDate" type="date" {...register('serviceEndDate')} className="mt-1" />
        {errors.serviceEndDate && <p className="mt-1 text-sm text-red-600">{errors.serviceEndDate.message}</p>}
      </div>

      <Button type="submit" className="w-full">保存</Button>
    </form>
  );
}