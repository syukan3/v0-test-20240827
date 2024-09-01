'use client';

import { useRouter } from 'next/navigation';
import CameraRangeForm from '@/components/CameraRangeForm';
import SubHeader from '@/components/SubHeader';

interface CameraRange {
    name: string;
    status: 'active' | 'inactive';
    camera: string;
    latestCaptureTime: string;
    latestReading: string;
    latestCapture: string;
    processingType: 'CIRCULAR';
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    minAngle: number;
    minValue: number;
    maxAngle: number;
    maxValue: number;
    orientation: string;
    decimalPlaces: number;
    roundingMethod: string;
}

export default function CreateCameraRange() {
    const router = useRouter();

    const handleSubmit = async (data: CameraRange) => {
        // ここでAPIを呼び出して新規カメラ範囲を登録
        console.log('新規カメラ範囲データ:', data);
        // 登録成功後、カメラ範囲一覧ページにリダイレクト
        router.push('/camera-ranges');
    };

    const handleCancel = () => {
        router.back();
    };

    return (
        <div className="flex flex-col h-full">
            <SubHeader title="カメラ範囲 新規登録" />
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <CameraRangeForm 
                            onSubmit={handleSubmit}
                            onCancel={handleCancel}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}