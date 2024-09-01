import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CameraRangeFilterSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onApplyFilter: (filters: any) => void;
}

export default function CameraRangeFilterSidebar({ isOpen, onClose, onApplyFilter }: CameraRangeFilterSidebarProps) {
    const [filters, setFilters] = useState({ name: '', status: '', camera: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    };

    const handleApplyFilter = () => {
        onApplyFilter(filters);
        onClose();
    };

    return (
        <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">フィルタ</h2>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">カメラ範囲名</label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={filters.name}
                            onChange={handleInputChange}
                            className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm placeholder-gray-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">ステータス</label>
                        <select
                            name="status"
                            id="status"
                            value={filters.status}
                            onChange={handleInputChange}
                            className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                        >
                            <option value="">選択してください</option>
                            <option value="active">有効</option>
                            <option value="inactive">無効</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="camera" className="block text-sm font-medium text-gray-700 mb-1">カメラ</label>
                        <Input
                            type="text"
                            name="camera"
                            id="camera"
                            value={filters.camera}
                            onChange={handleInputChange}
                            className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm placeholder-gray-400"
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <Button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
                    >
                        キャンセル
                    </Button>
                    <Button
                        type="button"
                        onClick={handleApplyFilter}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out"
                    >
                        適用
                    </Button>
                </div>
            </div>
        </div>
    );
}