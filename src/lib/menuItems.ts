import {
  Square3Stack3DIcon, BuildingOfficeIcon, UserGroupIcon, SignalIcon,
  CameraIcon, VideoCameraSlashIcon, UserIcon, KeyIcon, LockClosedIcon, Squares2X2Icon
} from '@heroicons/react/24/outline';

export const menuItems = [
  { name: 'ダッシュボード', icon: Square3Stack3DIcon, href: '/' },
  { name: '施設', icon: BuildingOfficeIcon, href: '/facilities' },
  { name: 'グループ', icon: UserGroupIcon, href: '/groups' },
  { name: 'センサー', icon: SignalIcon, href: '/sensors' },
  { name: 'カメラ', icon: CameraIcon, href: '/cameras' },
  { name: 'カメラ範囲', icon: VideoCameraSlashIcon, href: '/camera-ranges' },
  { name: 'ユーザー', icon: UserIcon, href: '/users' },
  { name: 'ロール', icon: KeyIcon, href: '/roles' },
  { name: '権限', icon: LockClosedIcon, href: '/permissions' },
  { name: '設定', icon: Squares2X2Icon, href: '/settings' },
];