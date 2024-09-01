'use client'

import { notFound, useRouter } from 'next/navigation'
import { initialSensors } from '@/data/initialSensors'
import SubHeader from '@/components/SubHeader'

interface SensorDetailProps {
    params: { id: string }
}

export default function SensorDetail({ params }: SensorDetailProps) {
    const sensor = initialSensors.find(sensor => sensor.id === params.id)
    const router = useRouter()

    if (!sensor) {
        notFound()
    }

    const handleEdit = () => {
        router.push(`/sensors/${params.id}/edit`)
    }

    const handleDelete = () => {
        // 削除の処理を実装
        console.log('Delete sensor:', params.id)
    }

    return (
        <div className="flex flex-col h-full">
            <SubHeader
                title="センサー 詳細"
                showEditAndDeleteButtons={true}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">{sensor.name}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-600 mb-2">ステータス:</p>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${sensor.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                    {sensor.status === 'active' ? '有効' : '無効'}
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">グループ:</p>
                                <p className="text-gray-700">{sensor.group}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">再起動時間:</p>
                                <p className="text-gray-700">{sensor.rebootTime}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">画像保持期間:</p>
                                <p className="text-gray-700">{sensor.imageRetentionDays} 日</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">再起動フラグ:</p>
                                <p className="text-gray-700">{sensor.rebootFlag ? 'はい' : 'いいえ'}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">設定反映フラグ:</p>
                                <p className="text-gray-700">{sensor.configAppliedFlag ? 'はい' : 'いいえ'}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">設置場所:</p>
                                <p className="text-gray-700">{sensor.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}