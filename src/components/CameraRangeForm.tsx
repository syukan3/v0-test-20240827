import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const cameraRangeSchema = z.object({
    name: z.string().min(1, 'カメラ範囲名は必須です'),
    status: z.enum(['active', 'inactive']),
    camera: z.string().min(1, 'カメラは必須です'),
    latestCaptureTime: z.string().min(1, '最新取得時間は必須です'),
    latestReading: z.string().min(1, '最新読み取り値は必須です'),
    latestCapture: z.string().min(1, '最新キャプチャは必須です'),
    processingType: z.literal('CIRCULAR'),
    x1: z.number().min(0, 'x1は必須です'),
    y1: z.number().min(0, 'y1は必須です'),
    x2: z.number().min(0, 'x2は必須です'),
    y2: z.number().min(0, 'y2は必須です'),
    minAngle: z.number().min(0, '最小角度は必須です'),
    minValue: z.number().min(0, '最小値は必須です'),
    maxAngle: z.number().min(0, '最大角度は必須です'),
    maxValue: z.number().min(0, '最大値は必須です'),
    orientation: z.string().min(1, '向きは必須です'),
    decimalPlaces: z.number().min(0, '小数点以下桁数は必須です'),
    roundingMethod: z.string().min(1, '丸め方は必須です'),
});

type CameraRangeFormData = z.infer<typeof cameraRangeSchema>;

interface CameraRangeFormProps {
    initialData?: CameraRangeFormData;
    onSubmit: (data: CameraRangeFormData) => void;
    onCancel: () => void;
}

export default function CameraRangeForm({ initialData, onSubmit, onCancel }: CameraRangeFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<CameraRangeFormData>({
        resolver: zodResolver(cameraRangeSchema),
        defaultValues: initialData,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">カメラ範囲名</label>
                <Input id="name" {...register('name')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">ステータス</label>
                <select id="status" {...register('status')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="active">有効</option>
                    <option value="inactive">無効</option>
                </select>
                {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>}
            </div>
            <div>
                <label htmlFor="camera" className="block text-sm font-medium text-gray-700 mb-1">カメラ</label>
                <Input id="camera" {...register('camera')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.camera && <p className="mt-1 text-sm text-red-600">{errors.camera.message}</p>}
            </div>
            <div>
                <label htmlFor="latestCaptureTime" className="block text-sm font-medium text-gray-700 mb-1">最新取得時間</label>
                <Input id="latestCaptureTime" type="datetime-local" {...register('latestCaptureTime')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.latestCaptureTime && <p className="mt-1 text-sm text-red-600">{errors.latestCaptureTime.message}</p>}
            </div>
            <div>
                <label htmlFor="latestReading" className="block text-sm font-medium text-gray-700 mb-1">最新読み取り値</label>
                <Input id="latestReading" {...register('latestReading')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.latestReading && <p className="mt-1 text-sm text-red-600">{errors.latestReading.message}</p>}
            </div>
            <div>
                <label htmlFor="latestCapture" className="block text-sm font-medium text-gray-700 mb-1">最新キャプチャ</label>
                <Input id="latestCapture" {...register('latestCapture')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.latestCapture && <p className="mt-1 text-sm text-red-600">{errors.latestCapture.message}</p>}
            </div>
            <div>
                <label htmlFor="processingType" className="block text-sm font-medium text-gray-700 mb-1">処理タイプ</label>
                <Input id="processingType" {...register('processingType')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" readOnly value="CIRCULAR" />
                {errors.processingType && <p className="mt-1 text-sm text-red-600">{errors.processingType.message}</p>}
            </div>
            <div>
                <label htmlFor="x1" className="block text-sm font-medium text-gray-700 mb-1">x1</label>
                <Input id="x1" type="number" {...register('x1')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.x1 && <p className="mt-1 text-sm text-red-600">{errors.x1.message}</p>}
            </div>
            <div>
                <label htmlFor="y1" className="block text-sm font-medium text-gray-700 mb-1">y1</label>
                <Input id="y1" type="number" {...register('y1')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.y1 && <p className="mt-1 text-sm text-red-600">{errors.y1.message}</p>}
            </div>
            <div>
                <label htmlFor="x2" className="block text-sm font-medium text-gray-700 mb-1">x2</label>
                <Input id="x2" type="number" {...register('x2')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.x2 && <p className="mt-1 text-sm text-red-600">{errors.x2.message}</p>}
            </div>
            <div>
                <label htmlFor="y2" className="block text-sm font-medium text-gray-700 mb-1">y2</label>
                <Input id="y2" type="number" {...register('y2')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.y2 && <p className="mt-1 text-sm text-red-600">{errors.y2.message}</p>}
            </div>
            <div>
                <label htmlFor="minAngle" className="block text-sm font-medium text-gray-700 mb-1">最小角度</label>
                <Input id="minAngle" type="number" {...register('minAngle')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.minAngle && <p className="mt-1 text-sm text-red-600">{errors.minAngle.message}</p>}
            </div>
            <div>
                <label htmlFor="minValue" className="block text-sm font-medium text-gray-700 mb-1">最小値</label>
                <Input id="minValue" type="number" {...register('minValue')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.minValue && <p className="mt-1 text-sm text-red-600">{errors.minValue.message}</p>}
            </div>
            <div>
                <label htmlFor="maxAngle" className="block text-sm font-medium text-gray-700 mb-1">最大角度</label>
                <Input id="maxAngle" type="number" {...register('maxAngle')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.maxAngle && <p className="mt-1 text-sm text-red-600">{errors.maxAngle.message}</p>}
            </div>
            <div>
                <label htmlFor="maxValue" className="block text-sm font-medium text-gray-700 mb-1">最大値</label>
                <Input id="maxValue" type="number" {...register('maxValue')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.maxValue && <p className="mt-1 text-sm text-red-600">{errors.maxValue.message}</p>}
            </div>
            <div>
                <label htmlFor="orientation" className="block text-sm font-medium text-gray-700 mb-1">向き</label>
                <Input id="orientation" {...register('orientation')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.orientation && <p className="mt-1 text-sm text-red-600">{errors.orientation.message}</p>}
            </div>
            <div>
                <label htmlFor="decimalPlaces" className="block text-sm font-medium text-gray-700 mb-1">小数点以下桁数</label>
                <Input id="decimalPlaces" type="number" {...register('decimalPlaces')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.decimalPlaces && <p className="mt-1 text-sm text-red-600">{errors.decimalPlaces.message}</p>}
            </div>
            <div>
                <label htmlFor="roundingMethod" className="block text-sm font-medium text-gray-700 mb-1">丸め方</label>
                <Input id="roundingMethod" {...register('roundingMethod')} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                {errors.roundingMethod && <p className="mt-1 text-sm text-red-600">{errors.roundingMethod.message}</p>}
            </div>
            <div className="mt-6 flex justify-end space-x-4">
                <Button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out">キャンセル</Button>
                <Button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out">保存</Button>
            </div>
        </form>
    );
}