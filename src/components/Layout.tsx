'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import UserMenu from './UserMenu';

const pageTitles: { [key: string]: string } = {
    '/profile': 'プロフィール',
    '/account-settings': 'アカウント設定変更',
    '/security-settings': 'セキュリティ設定',
    '/privacy-settings': 'プライバシー設定',
    '/notification-settings': '通知設定',
    '/subscription': '契約プラン',
    '/billing': '請求情報の確認',
    '/usage': '使用量の確認',
    '/help-support': 'ヘルプとサポート',
    '/feedback': 'フィードバック',
    '/language-region': '言語と地域設定',
    '/logout': 'ログアウト',
};

export default function Layout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const title = pageTitles[pathname] || 'ダッシュボード';

    return (
        <div className="min-h-screen bg-gray-100">
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    );
}