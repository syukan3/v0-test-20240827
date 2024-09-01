'use client';

import { notFound, useRouter } from 'next/navigation';
import { initialCameraRanges } from '@/data/initialCameraRanges';
import SubHeader from '@/components/SubHeader';

interface CameraRangeDetailProps {
    params: { id: string };
}

export default function CameraRangeDetail({ params }: CameraRangeDetailProps) {
    const cameraRange = initialCameraRanges.find(cameraRange => cameraRange.id === params.id);
    const router = useRouter();

    if (!cameraRange) {
        notFound();
    }

    const handleEdit = () => {
        router.push(`/camera-ranges/${params.id}/edit`);
    };

    const handleDelete = () => {
        // 削除の処理を実装
        console.log('Delete camera range:', params.id);
    };

    return (
        <div className="flex flex-col h-full">
            <SubHeader
                title="カメラ範囲 詳細"
                showEditAndDeleteButtons={true}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">{cameraRange.name}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-600 mb-2">ステータス:</p>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${cameraRange.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                    {cameraRange.status === 'active' ? '有効' : '無効'}
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">カメラ:</p>
                                <p className="text-gray-700">{cameraRange.camera}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">最新取得時間:</p>
                                <p className="text-gray-700">{cameraRange.latestCaptureTime}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">最新読み取り値:</p>
                                <p className="text-gray-700">{cameraRange.latestReading}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">最新キャプチャ:</p>
                                <p className="text-gray-700">{cameraRange.latestCapture}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">処理タイプ:</p>
                                <p className="text-gray-700">{cameraRange.processingType}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">x1:</p>
                                <p className="text-gray-700">{cameraRange.x1}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">y1:</p>
                                <p className="text-gray-700">{cameraRange.y1}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">x2:</p>
                                <p className="text-gray-700">{cameraRange.x2}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">y2:</p>
                                <p className="text-gray-700">{cameraRange.y2}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">最小角度:</p>
                                <p className="text-gray-700">{cameraRange.minAngle}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">最小値:</p>
                                <p className="text-gray-700">{cameraRange.minValue}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">最大角度:</p>
                                <p className="text-gray-700">{cameraRange.maxAngle}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">最大値:</p>
                                <p className="text-gray-700">{cameraRange.maxValue}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">向き:</p>
                                <p className="text-gray-700">{cameraRange.orientation}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">小数点以下桁数:</p>
                                <p className="text-gray-700">{cameraRange.decimalPlaces}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">丸め方:</p>
                                <p className="text-gray-700">{cameraRange.roundingMethod}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}