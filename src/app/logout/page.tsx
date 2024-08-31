'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // ここでログアウト処理を実行
    // 例: APIを呼び出してセッションを無効化する
    // その後、ホームページにリダイレクト
    router.push('/');
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">ログアウト中...</h1>
    </div>
  );
}