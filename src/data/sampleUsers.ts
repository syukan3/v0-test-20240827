export interface User {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  email: string;
  userType: string;
  facility: string;
  role: string;
  group: string;
  isAdmin: boolean;
}

export const sampleUsers: User[] = [
  {
    id: '1',
    name: '山田 太郎',
    status: 'active',
    email: 'yamada.taro@example.com',
    userType: '一般',
    facility: '東京本社',
    role: '管理者',
    group: 'グループA',
    isAdmin: true,
  },
  {
    id: '2',
    name: '鈴木 次郎',
    status: 'inactive',
    email: 'suzuki.jiro@example.com',
    userType: '一般',
    facility: '大阪支社',
    role: 'ユーザー',
    group: 'グループB',
    isAdmin: false,
  },
  {
    id: '3',
    name: '佐藤 三郎',
    status: 'active',
    email: 'sato.saburo@example.com',
    userType: '一般',
    facility: '福岡営業所',
    role: 'ユーザー',
    group: 'グループC',
    isAdmin: false,
  },
];