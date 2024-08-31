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
        <div className="container mx-auto p-3 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {facilities.map((facility) => (
                    <div key={facility.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={facility.imageUrl}
                            alt={facility.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{facility.name}</h2>
                            <span className={`mt-2 inline-block px-2 py-1 rounded-full text-xs ${facility.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                {facility.status === 'active' ? '有効' : '無効'}
                            </span >
                            <div className="mt-2 space-y-1">
                                <p className="text-sm text-gray-600">
                                    {facility.managementFacility}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {facility.serviceEndDate}
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-2 flex justify-end space-x-2">
                            <button className="p-3 text-gray-400 rounded-md hover:bg-gray-100 transition duration-500 ease-in-out">
                                <PencilIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}