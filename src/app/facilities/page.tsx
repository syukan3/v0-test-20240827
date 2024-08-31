'use client'

import { useState } from 'react'
import { PlusIcon, PencilIcon, TrashIcon, MapPinIcon, ClockIcon, CalendarIcon } from 'lucide-react'

interface Facility {
  id: string
  name: string
  status: 'active' | 'inactive'
  managementFacility: string
  timezone: string
  serviceEndDate: string
  imageUrl: string
}

const initialFacilities: Facility[] = [
  {
    id: '1',
    name: '東京本社',
    status: 'active',
    managementFacility: '本社',
    timezone: 'Asia/Tokyo',
    serviceEndDate: '2025-12-31',
    imageUrl: '/placeholder.svg?height=100&width=100'
  },
  {
    id: '2',
    name: '大阪支社',
    status: 'active',
    managementFacility: '関西支部',
    timezone: 'Asia/Tokyo',
    serviceEndDate: '2024-12-31',
    imageUrl: '/placeholder.svg?height=100&width=100'
  },
  {
    id: '3',
    name: '福岡営業所',
    status: 'inactive',
    managementFacility: '九州支部',
    timezone: 'Asia/Tokyo',
    serviceEndDate: '2023-12-31',
    imageUrl: '/placeholder.svg?height=100&width=100'
  },
]

export default function FacilitiesPage() {
  const [facilities] = useState<Facility[]>(initialFacilities)

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">施設一覧</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          施設を追加
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility) => (
          <div key={facility.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-100 p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">{facility.name}</h2>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  facility.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {facility.status === 'active' ? '有効' : '無効'}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={facility.imageUrl}
                  alt={facility.name}
                  className="w-20 h-20 rounded-full border-4 border-gray-200"
                />
                <div className="space-y-2">
                  <p className="flex items-center text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-2 text-blue-500" />
                    <span><strong>管理施設:</strong> {facility.managementFacility}</span>
                  </p>
                  <p className="flex items-center text-sm text-gray-600">
                    <ClockIcon className="h-4 w-4 mr-2 text-blue-500" />
                    <span><strong>タイムゾーン:</strong> {facility.timezone}</span>
                  </p>
                  <p className="flex items-center text-sm text-gray-600">
                    <CalendarIcon className="h-4 w-4 mr-2 text-blue-500" />
                    <span><strong>サービス終了日:</strong> {facility.serviceEndDate}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 flex justify-end space-x-2">
              <button className="px-3 py-1 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 flex items-center">
                <PencilIcon className="h-4 w-4 mr-2" />
                編集
              </button>
              <button className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center">
                <TrashIcon className="h-4 w-4 mr-2" />
                削除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}