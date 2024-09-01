'use client';

import { notFound, useRouter } from 'next/navigation';
import { initialCameras } from '@/data/initialCameras';
import SubHeader from '@/components/SubHeader';

interface CameraDetailProps {
    params: { id: string };
}

export default function CameraDetail({ params }: CameraDetailProps) {
    const camera = initialCameras.find(camera => camera.id === params.id);
    const router = useRouter();

    if (!camera) {
        notFound();
    }

    const handleEdit = () => {
        router.push(`/cameras/${params.id}/edit`);
    };

    const handleDelete = () => {
        // 削除の処理を実装
        console.log('Delete camera:', params.id);
    };

    return (
        <div className="flex flex-col h-full">
            <SubHeader
                title="カメラ 詳細"
                showEditAndDeleteButtons={true}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">{camera.name}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-600 mb-2">ステータス:</p>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${camera.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                    {camera.status === 'active' ? '有効' : '無効'}
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">センサー:</p>
                                <p className="text-gray-700">{camera.sensor}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">カメラパス:</p>
                                <p className="text-gray-700">{camera.cameraPath}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">キャプチャモード:</p>
                                <p className="text-gray-700">{camera.captureMode}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">キャプチャ時間:</p>
                                <p className="text-gray-700">{camera.captureTime}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">キャプチャインターバル:</p>
                                <p className="text-gray-700">{camera.captureInterval}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">最新読み取り値:</p>
                                <p className="text-gray-700">{camera.latestReading}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">最新キャプチャ:</p>
                                <p className="text-gray-700">{camera.latestCapture}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}