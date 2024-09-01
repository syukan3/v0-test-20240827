'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CameraForm from '@/components/CameraForm';
import SubHeader from '@/components/SubHeader';
import { initialCameras } from '@/data/initialCameras';

interface EditCameraProps {
    params: { id: string };
}

export default function EditCamera({ params }: EditCameraProps) {
    const router = useRouter();
    const [camera, setCamera] = useState(null);

    useEffect(() => {
        const cameraData = initialCameras.find(camera => camera.id === params.id);
        setCamera(cameraData);
    }, [params.id]);

    const handleSubmit = async (data) => {
        // ここでAPIを呼び出してカメラデータを更新
        console.log('更新されたカメラデータ:', data);
        // 更新成功後、カメラ詳細ページにリダイレクト
        router.push(`/cameras/${params.id}`);
    };

    const handleCancel = () => {
        router.back();
    };

    if (!camera) {
        return (
            <div className="flex flex-col h-full">
                <SubHeader title="カメラ 編集" />
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
            <SubHeader title="カメラ 編集" />
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <CameraForm
                            initialData={camera}
                            onSubmit={handleSubmit}
                            onCancel={handleCancel}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}