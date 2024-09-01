export interface Permission {
    id: string;
    name: string;
    role: string;
    accessLevel: string;
    resource: string;
    status: 'active' | 'inactive';
}

export const samplePermissions: Permission[] = [
    {
        id: '1',
        name: '管理者権限',
        role: '管理者',
        accessLevel: 'フルアクセス',
        resource: '全リソース',
        status: 'active',
    },
    {
        id: '2',
        name: 'ユーザー権限',
        role: 'ユーザー',
        accessLevel: '制限付きアクセス',
        resource: '一部リソース',
        status: 'inactive',
    },
    {
        id: '3',
        name: 'ゲスト権限',
        role: 'ゲスト',
        accessLevel: '閲覧のみ',
        resource: '公開リソース',
        status: 'active',
    },
];