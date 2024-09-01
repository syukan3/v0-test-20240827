import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const cameraSchema = z.object({
    name: z.string().min(1, 'カメラ名は必須です'),
    status: z.enum(['active', 'inactive']),
    sensor: z.string().min(1, 'センサーは必須です'),
    cameraPath: z.string().min(1, 'カメラパスは必須です'),
    captureMode: z.string().min(1, 'キャプチャモードは必須です'),
    captureTime: z.string().min(1, 'キャプチャ時間は必須です'),
    captureInterval: z.string().min(1, 'キャプチャインターバルは必須です'),
    latestReading: z.string().min(1, '最新読み取り値は必須です'),
    latestCapture: z.string().min(1, '最新キャプチャは必須です'),
});

type CameraFormData = z.infer<typeof cameraSchema>;

interface CameraFormProps {
    initialData?: CameraFormData;
    onSubmit: (data: CameraFormData) => void;
    onCancel: () => void;
}

export default function CameraForm({ initialData, onSubmit, onCancel }: CameraFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<CameraFormData>({
        resolver: zodResolver(cameraSchema),
        defaultValues: initialData,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">カメラ名</label>
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
                <label htmlFor="sensor" className="block text-sm font-medium text-gray-700 mb-1">センサー</label>
                <Input
                    id="sensor"
                    {...register('sensor')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.sensor && <p className="mt-1 text-sm text-red-600">{errors.sensor.message}</p>}
            </div>
            <div>
                <label htmlFor="cameraPath" className="block text-sm font-medium text-gray-700 mb-1">カメラパス</label>
                <Input
                    id="cameraPath"
                    {...register('cameraPath')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.cameraPath && <p className="mt-1 text-sm text-red-600">{errors.cameraPath.message}</p>}
            </div>
            <div>
                <label htmlFor="captureMode" className="block text-sm font-medium text-gray-700 mb-1">キャプチャモード</label>
                <Input
                    id="captureMode"
                    {...register('captureMode')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.captureMode && <p className="mt-1 text-sm text-red-600">{errors.captureMode.message}</p>}
            </div>
            <div>
                <label htmlFor="captureTime" className="block text-sm font-medium text-gray-700 mb-1">キャプチャ時間</label>
                <Input
                    id="captureTime"
                    {...register('captureTime')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.captureTime && <p className="mt-1 text-sm text-red-600">{errors.captureTime.message}</p>}
            </div>
            <div>
                <label htmlFor="captureInterval" className="block text-sm font-medium text-gray-700 mb-1">キャプチャインターバル</label>
                <Input
                    id="captureInterval"
                    {...register('captureInterval')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.captureInterval && <p className="mt-1 text-sm text-red-600">{errors.captureInterval.message}</p>}
            </div>
            <div>
                <label htmlFor="latestReading" className="block text-sm font-medium text-gray-700 mb-1">最新読み取り値</label>
                <Input
                    id="latestReading"
                    {...register('latestReading')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.latestReading && <p className="mt-1 text-sm text-red-600">{errors.latestReading.message}</p>}
            </div>
            <div>
                <label htmlFor="latestCapture" className="block text-sm font-medium text-gray-700 mb-1">最新キャプチャ</label>
                <Input
                    id="latestCapture"
                    {...register('latestCapture')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.latestCapture && <p className="mt-1 text-sm text-red-600">{errors.latestCapture.message}</p>}
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