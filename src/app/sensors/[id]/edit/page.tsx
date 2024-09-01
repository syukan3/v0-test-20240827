'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SensorForm from '@/components/SensorForm';
import SubHeader from '@/components/SubHeader';
import { initialSensors } from '@/data/initialSensors';

interface EditSensorProps {
  params: { id: string };
}

export default function EditSensor({ params }: EditSensorProps) {
  const router = useRouter();
  const [sensor, setSensor] = useState(null);

  useEffect(() => {
    const sensorData = initialSensors.find(sensor => sensor.id === params.id);
    setSensor(sensorData || null);
  }, [params.id]);

  const handleSubmit = async (data) => {
    // ここでAPIを呼び出してセンサーデータを更新
    console.log('更新されたセンサーデータ:', data);
    // 更新成功後、センサー詳細ページにリダイレクト
    router.push(`/sensors/${params.id}`);
  };

  const handleCancel = () => {
    router.back();
  };

  if (!sensor) {
    return (
      <div className="flex flex-col h-full">
        <SubHeader title="センサー 編集" />
        <div className="flex-1 overflow-auto p-6">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-gray-500">読み込み中...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <SubHeader title="センサー 編集" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <SensorForm
              initialData={sensor}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}