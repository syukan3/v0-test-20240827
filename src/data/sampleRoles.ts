export interface Role {
  id: string;
  name: string;
  facility: string;
}

export const sampleRoles: Role[] = [
  {
    id: '1',
    name: '管理者',
    facility: '東京本社',
  },
  {
    id: '2',
    name: 'ユーザー',
    facility: '大阪支社',
  },
  {
    id: '3',
    name: 'ゲスト',
    facility: '福岡営業所',
  },
];