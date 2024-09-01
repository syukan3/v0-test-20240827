import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { XMarkIcon } from '@heroicons/react/24/outline'; // 追加

interface RoleFilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: (filters: any) => void;
}

export default function RoleFilterSidebar({ isOpen, onClose, onApplyFilter }: RoleFilterSidebarProps) {
  const [filters, setFilters] = React.useState({
    name: '',
    facility: '',
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
    setFilters({ name: '', facility: '' });
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">ロール名</label>
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