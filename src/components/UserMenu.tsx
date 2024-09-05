'use client';

import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  UserIcon, CogIcon, ShieldCheckIcon, EyeSlashIcon, BellIcon, CreditCardIcon,
  ReceiptRefundIcon, ChartBarIcon, LifebuoyIcon, ChatBubbleOvalLeftEllipsisIcon, GlobeAltIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

export const userMenuItems = [
  { name: 'プロフィール', icon: UserIcon, href: '/profile' },
  { name: 'アカウント設定変更', icon: CogIcon, href: '/account-settings' },
  { name: 'セキュリティ設定', icon: ShieldCheckIcon, href: '/security-settings' },
  { name: 'プライバシー設定', icon: EyeSlashIcon, href: '/privacy-settings' },
  { name: '通知設定', icon: BellIcon, href: '/notification-settings', divider: true },
  { name: '契約プラン', icon: CreditCardIcon, href: '/subscription' },
  { name: '請求情報の確認', icon: ReceiptRefundIcon, href: '/billing' },
  { name: '使用量の確認', icon: ChartBarIcon, href: '/usage', divider: true },
  { name: 'ヘルプとサポート', icon: LifebuoyIcon, href: '/help-support' },
  { name: 'フィードバック', icon: ChatBubbleOvalLeftEllipsisIcon, href: '/feedback' },
  { name: '言語と地域設定', icon: GlobeAltIcon, href: '/language-region', divider: true },
];

export default function UserMenu() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/login');
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-64 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-2">
            {userMenuItems.map((item) => (
              <Fragment key={item.name}>
                <Menu.Item>
                  {({ active }) => (
                    <Link href={item.href} className={`${active ? 'bg-blue-50 text-blue-600' : 'text-gray-900'} group flex items-center w-full px-4 py-3 text-sm transition-colors duration-150 ease-in-out hover:bg-blue-50 hover:text-blue-600`}>
                      <item.icon className={`h-5 w-5 mr-4 ${active ? 'text-blue-600' : 'text-gray-400'}`} />
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
                {item.divider && <hr className="my-2 border-gray-200" />}
              </Fragment>
            ))}
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${active ? 'bg-blue-50 text-blue-600' : 'text-gray-900'} group flex items-center w-full px-4 py-3 text-sm transition-colors duration-150 ease-in-out hover:bg-blue-50 hover:text-blue-600`}
                >
                  <ArrowLeftOnRectangleIcon className={`h-5 w-5 mr-4 ${active ? 'text-blue-600' : 'text-gray-400'}`} />
                  ログアウト
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}