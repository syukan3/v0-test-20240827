'use client';

import { useRouter } from 'next/navigation';
import CameraForm from '@/components/CameraForm';
import SubHeader from '@/components/SubHeader';

interface Camera {
    name: string;
    status: 'active' | 'inactive';
    sensor: string;
    cameraPath: string;
    captureMode: string;
    captureTime: string;
    captureInterval: string;
    latestReading: string;
    latestCapture: string;
}

export default function CreateCamera() {
    const router = useRouter();

    const handleSubmit = async (data: Camera) => {
        // ここでAPIを呼び出して新規カメラを登録
        console.log('新規カメラデータ:', data);
        // 登録成功後、カメラ一覧ページにリダイレクト
        router.push('/cameras');
    };

    const handleCancel = () => {
        router.back();
    };

    return (
        <div className="flex flex-col h-full">
            <SubHeader title="カメラ 新規登録" />
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <CameraForm 
                            onSubmit={handleSubmit}
                            onCancel={handleCancel}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}