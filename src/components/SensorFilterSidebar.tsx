import React from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SensorFilterSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onApplyFilter: (filters: any) => void;
}

export default function SensorFilterSidebar({ isOpen, onClose, onApplyFilter }: SensorFilterSidebarProps) {
    const [filters, setFilters] = React.useState({
        name: '',
        status: '',
        group: '',
        location: '',
        rebootTimeStart: '',
        rebootTimeEnd: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleApplyFilter = () => {
        onApplyFilter(filters);
        onClose();
    };

    const handleClearFilter = () => {
        setFilters({
            name: '',
            status: '',
            group: '',
            location: '',
            rebootTimeStart: '',
            rebootTimeEnd: '',
        });
    };

    return (
        <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">フィルタ</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">センサー名</label>
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
                        <Select
                            name="status"
                            id="status"
                            value={filters.status}
                            onChange={handleInputChange}
                            className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                        >
                            <option value="">選択してください</option>
                            <option value="active">有効</option>
                            <option value="inactive">無効</option>
                        </Select>
                    </div>
                    <div>
                        <label htmlFor="group" className="block text-sm font-medium text-gray-700 mb-1">グループ</label>
                        <Input
                            type="text"
                            name="group"
                            id="group"
                            value={filters.group}
                            onChange={handleInputChange}
                            className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm placeholder-gray-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">設置場所</label>
                        <Input
                            type="text"
                            name="location"
                            id="location"
                            value={filters.location}
                            onChange={handleInputChange}
                            className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm placeholder-gray-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">再起動時間</label>
                        <div className="flex space-x-2">
                            <Input
                                type="date"
                                name="rebootTimeStart"
                                id="rebootTimeStart"
                                value={filters.rebootTimeStart}
                                onChange={handleInputChange}
                                className="w-1/2 text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                            />
                            <Input
                                type="date"
                                name="rebootTimeEnd"
                                id="rebootTimeEnd"
                                value={filters.rebootTimeEnd}
                                onChange={handleInputChange}
                                className="w-1/2 text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-between space-x-4">
                    <Button onClick={handleClearFilter} className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-sm transition-colors duration-200">
                        クリア
                    </Button>
                    <Button onClick={handleApplyFilter} className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm transition-colors duration-200">
                        フィルタ適用
                    </Button>
                </div>
            </div>
        </div>
    );
}