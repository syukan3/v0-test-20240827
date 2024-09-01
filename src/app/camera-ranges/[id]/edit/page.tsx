'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CameraRangeForm from '@/components/CameraRangeForm';
import SubHeader from '@/components/SubHeader';
import { initialCameraRanges } from '@/data/initialCameraRanges';

interface EditCameraRangeProps {
    params: { id: string };
}

export default function EditCameraRange({ params }: EditCameraRangeProps) {
    const router = useRouter();
    const [cameraRange, setCameraRange] = useState(null);

    useEffect(() => {
        const cameraRangeData = initialCameraRanges.find(cameraRange => cameraRange.id === params.id);
        setCameraRange(cameraRangeData);
    }, [params.id]);

    const handleSubmit = async (data) => {
        // ここでAPIを呼び出してカメラ範囲データを更新
        console.log('更新されたカメラ範囲データ:', data);
        // 更新成功後、カメラ範囲詳細ページにリダイレクト
        router.push(`/camera-ranges/${params.id}`);
    };

    const handleCancel = () => {
        router.back();
    };

    if (!cameraRange) {
        return (
            <div className="flex flex-col h-full">
                <SubHeader title="カメラ範囲 編集" />
                <div className="flex-1 overflow-auto p-6">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl text-gray-500">読み込み中...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <SubHeader title="カメラ範囲 編集" />
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <CameraRangeForm
                            initialData={cameraRange}
                            onSubmit={handleSubmit}
                            onCancel={handleCancel}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}