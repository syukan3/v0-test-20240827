'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FacilityForm from '@/components/FacilityForm';

interface EditFacilityProps {
  params: { id: string };
}

export default function EditFacility({ params }: EditFacilityProps) {
  const router = useRouter();
  const [facility, setFacility] = useState<any>(null);

  useEffect(() => {
    // ここで施設データを取得するAPIを呼び出す
    // 仮のデータをセット
    setFacility({
      name: '施設A',
      address: '東京都渋谷区',
      managementFacility: '本社',
      timezone: 'Asia/Tokyo',
      serviceEndDate: '2025-12-31',
    });
  }, [params.id]);

  const handleSubmit = async (data: any) => {
    // ここでAPIを呼び出して施設データを更新
    console.log('更新された施設データ:', data);
    // 更新成功後、施設詳細ページにリダイレクト
    router.push(`/facilities/${params.id}`);
  };

  if (!facility) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className="container mx-auto p-3 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">施設編集</h1>
          <FacilityForm initialData={facility} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}