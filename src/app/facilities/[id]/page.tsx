'use client'

import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import { initialFacilities } from '../page'
import SubHeader from '@/components/SubHeader'

interface FacilityDetailProps {
    params: { id: string }
}

export default function FacilityDetail({ params }: FacilityDetailProps) {
    const facility = initialFacilities.find(facility => facility.id === params.id)
    const router = useRouter()

    if (!facility) {
        notFound()
    }

    const handleEdit = () => {
        router.push(`/facilities/${params.id}/edit`)
    }

    const handleDelete = () => {
        // 削除の処理を実装
        console.log('Delete facility:', params.id)
    }

    return (
        <>
            <SubHeader
                title="施設 詳細"
                showEditAndDeleteButtons={true}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <div className="container mx-auto p-3 bg-gray-50 min-h-screen">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">{facility.name}</h1>
                        <div className="mb-6">
                            <Image
                                src={facility.imageUrl}
                                alt={facility.name}
                                width={1000}
                                height={500}
                                className="rounded-lg w-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-600 mb-2">ステータス:</p>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${facility.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                    {facility.status === 'active' ? '有効' : '無効'}
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">管理施設:</p>
                                <p className="text-gray-700">{facility.managementFacility}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">タイムゾーン:</p>
                                <p className="text-gray-700">{facility.timezone}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">サービス終了日:</p>
                                <p className="text-gray-700">{facility.serviceEndDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}