'use client'

import { useState } from 'react'
import { PencilIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import SubHeader from '@/components/SubHeader'
import SensorFilterSidebar from '@/components/SensorFilterSidebar'
import { initialSensors } from '@/data/initialSensors'

export default function SensorsPage() {
    const [sensors, setSensors] = useState(initialSensors)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const router = useRouter()

    const handleAdd = () => {
        router.push('/sensors/new')
    }

    const handleFilter = () => {
        setIsFilterOpen(true)
    }

    const handleApplyFilter = (filters: any) => {
        const filteredSensors = initialSensors.filter(sensor => {
            const rebootTime = new Date(sensor.rebootTime);
            const startDate = filters.rebootTimeStart ? new Date(filters.rebootTimeStart) : null;
            const endDate = filters.rebootTimeEnd ? new Date(filters.rebootTimeEnd) : null;

            return (
                (!filters.name || sensor.name.toLowerCase().includes(filters.name.toLowerCase())) &&
                (!filters.status || sensor.status === filters.status) &&
                (!filters.group || sensor.group.toLowerCase().includes(filters.group.toLowerCase())) &&
                (!filters.location || sensor.location.toLowerCase().includes(filters.location.toLowerCase())) &&
                (!startDate || rebootTime >= startDate) &&
                (!endDate || rebootTime <= endDate)
            )
        })
        setSensors(filteredSensors)
    }

    return (
        <div className="flex flex-col h-full">
            <SubHeader
                title="センサー 一覧"
                showAddButton={true}
                showFilterButton={true}
                onAdd={handleAdd}
                onFilter={handleFilter}
            />
            <div className="flex-1 overflow-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sensors.map((sensor) => (
                        <div
                            key={sensor.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
                        >
                            <Link
                                href={`/sensors/${sensor.id}`}
                                className="block"
                            >
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{sensor.name}</h2>
                                    <span className={`mt-2 inline-block px-2 py-1 rounded-full text-xs ${sensor.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {sensor.status === 'active' ? '有効' : '無効'}
                                    </span>
                                    <div className="mt-2 space-y-1">
                                        <p className="text-sm text-gray-600">
                                            {sensor.group}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {sensor.rebootTime}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                href={`/sensors/${sensor.id}/edit`}
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
            <SensorFilterSidebar
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onApplyFilter={handleApplyFilter}
            />
        </div>
    )
}