'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FacilityForm from '@/components/FacilityForm';
import SubHeader from '@/components/SubHeader';

interface EditFacilityProps {
  params: { id: string };
}

interface Facility {
  name: string;
  address: string;
  managementFacility: string;
  timezone: string;
  serviceEndDate: string;
}

export default function EditFacility({ params }: EditFacilityProps) {
  const router = useRouter();
  const [facility, setFacility] = useState<Facility | null>(null);

  useEffect(() => {
    // ここで施設データを取得するAPIを呼び出す
    // 実際のアプリケーションでは、APIからデータを取得します
    // この例では、仮のデータをセットしています
    setFacility({
      name: '施設A',
      address: '東京都渋谷区',
      managementFacility: '本社',
      timezone: 'Asia/Tokyo',
      serviceEndDate: '2025-12-31',
    });
  }, [params.id]);

  const handleSubmit = async (data: Facility) => {
    // ここでAPIを呼び出して施設データを更新
    console.log('更新された施設データ:', data);
    // 更新成功後、施設詳細ページにリダイレクト
    router.push(`/facilities/${params.id}`);
  };

  const handleCancel = () => {
    router.back();
  };

  if (!facility) {
    return (
      <div className="flex flex-col h-full">
        <SubHeader title="施設 編集" />
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
      <SubHeader title="施設 編集" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <FacilityForm
              initialData={facility}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}