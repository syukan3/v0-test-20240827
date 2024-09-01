'use client';

import { useState } from 'react';
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SubHeader from '@/components/SubHeader';
import CameraFilterSidebar from '@/components/CameraFilterSidebar';
import { initialCameras } from '@/data/initialCameras';

export default function CamerasPage() {
    const [cameras, setCameras] = useState(initialCameras);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const router = useRouter();

    const handleAdd = () => {
        router.push('/cameras/new');
    };

    const handleFilter = () => {
        setIsFilterOpen(true);
    };

    const handleApplyFilter = (filters: any) => {
        const filteredCameras = initialCameras.filter(camera => {
            return (
                (!filters.name || camera.name.toLowerCase().includes(filters.name.toLowerCase())) &&
                (!filters.status || camera.status === filters.status) &&
                (!filters.sensor || camera.sensor.toLowerCase().includes(filters.sensor.toLowerCase()))
            );
        });
        setCameras(filteredCameras);
    };

    return (
        <div className="flex flex-col h-full">
            <SubHeader
                title="カメラ 一覧"
                showAddButton={true}
                showFilterButton={true}
                onAdd={handleAdd}
                onFilter={handleFilter}
            />
            <div className="flex-1 overflow-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cameras.map((camera) => (
                        <div
                            key={camera.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
                        >
                            <Link
                                href={`/cameras/${camera.id}`}
                                className="block"
                            >
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{camera.name}</h2>
                                    <p className="text-sm text-gray-600">センサー: {camera.sensor}</p>
                                    <p className="text-sm text-gray-600">キャプチャモード: {camera.captureMode}</p>
                                    <span className={`mt-2 inline-block px-2 py-1 rounded-full text-xs ${camera.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {camera.status === 'active' ? '有効' : '無効'}
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href={`/cameras/${camera.id}/edit`}
                                className="absolute bottom-2 right-2 p-2 text-gray-600 hover:bg-gray-100 transition-colors duration-200 rounded-full flex items-center justify-center"
                                aria-label="編集"
                            >
                                <PencilIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {isFilterOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsFilterOpen(false)}
                />
            )}
            <CameraFilterSidebar
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onApplyFilter={handleApplyFilter}
            />
        </div>
    );
}