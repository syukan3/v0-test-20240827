'use client'

import { useState } from 'react'
import { PencilIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import SubHeader from '@/components/SubHeader'
import FacilityFilterSidebar from '@/components/FacilityFilterSidebar'

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

export { initialFacilities }

export default function FacilitiesPage() {
    const [facilities, setFacilities] = useState<Facility[]>(initialFacilities)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const router = useRouter()

    const handleAdd = () => {
        router.push('/facilities/new')
    }

    const handleFilter = () => {
        setIsFilterOpen(true)
    }

    const handleApplyFilter = (filters: any) => {
        const filteredFacilities = initialFacilities.filter(facility => {
            const facilityEndDate = new Date(facility.serviceEndDate);
            const startDate = filters.serviceEndDateStart ? new Date(filters.serviceEndDateStart) : null;
            const endDate = filters.serviceEndDateEnd ? new Date(filters.serviceEndDateEnd) : null;

            return (
                (!filters.name || facility.name.toLowerCase().includes(filters.name.toLowerCase())) &&
                (!filters.status || facility.status === filters.status) &&
                (!filters.managementFacility || facility.managementFacility.toLowerCase().includes(filters.managementFacility.toLowerCase())) &&
                (!filters.timezone || facility.timezone === filters.timezone) &&
                (!startDate || facilityEndDate >= startDate) &&
                (!endDate || facilityEndDate <= endDate)
            )
        })
        setFacilities(filteredFacilities)
    }

    return (
        <>
            <SubHeader
                title="施設 一覧"
                showAddButton={true}
                showFilterButton={true}
                onAdd={handleAdd}
                onFilter={handleFilter}
            />
            <div className="container mx-auto p-3 bg-gray-50 min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {facilities.map((facility) => (
                        <div
                            key={facility.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
                        >
                            <Link
                                href={`/facilities/${facility.id}`}
                                className="block"
                            >
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
                                    </span>
                                    <div className="mt-2 space-y-1">
                                        <p className="text-sm text-gray-600">
                                            {facility.managementFacility}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {facility.serviceEndDate}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                href={`/facilities/${facility.id}/edit`}
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
            <FacilityFilterSidebar
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onApplyFilter={handleApplyFilter}
            />
        </>
    )
}