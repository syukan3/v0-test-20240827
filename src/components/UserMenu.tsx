import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/24/outline'
// ... 他の必要なインポート

function UserMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-full bg-gray-100 p-2">
          <UserIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/settings"
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } block px-4 py-2 text-sm`}
                >
                  個人設定
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {/* ログアウト処理 */}}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } block w-full px-4 py-2 text-left text-sm`}
                >
                  ログアウト
                </button>
              )}
            </Menu.Item>
            {/* 他の必要なメニュー項目 */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserMenu