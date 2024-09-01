'use client';

import { useRouter } from 'next/navigation';
import SensorForm from '@/components/SensorForm';
import SubHeader from '@/components/SubHeader';

export default function CreateSensor() {
  const router = useRouter();

  const handleSubmit = async (data) => {
    // ここでAPIを呼び出して新規センサーを登録
    console.log('新規センサーデータ:', data);
    // 登録成功後、センサー一覧ページにリダイレクト
    router.push('/sensors');
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader title="センサー 新規登録" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <SensorForm 
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}