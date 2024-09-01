import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface GroupFilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: (filters: GroupFilters) => void;
}

interface GroupFilters {
  name: string;
  status: 'active' | 'inactive' | '';
  facility: string;
}

export default function GroupFilterSidebar({ isOpen, onClose, onApplyFilter }: GroupFilterSidebarProps) {
  const [filters, setFilters] = useState<GroupFilters>({ name: '', status: '', facility: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleApplyFilter = () => {
    onApplyFilter(filters);
    onClose();
  };

  const handleClearFilter = () => {
    setFilters({ name: '', status: '', facility: '' });
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg overflow-y-auto">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">フィルタ</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">グループ名</label>
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
              <label htmlFor="facility" className="block text-sm font-medium text-gray-700 mb-1">施設</label>
              <Input
                type="text"
                name="facility"
                id="facility"
                value={filters.facility}
                onChange={handleInputChange}
                className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm placeholder-gray-400"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <Button
              type="button"
              onClick={handleClearFilter}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              クリア
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
    </div>
  );
}