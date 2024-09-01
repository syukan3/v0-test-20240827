export interface Sensor {
    id: string;
    name: string;
    status: 'active' | 'inactive';
    group: string;
    rebootTime: string;
    imageRetentionDays: number;
    rebootFlag: boolean;
    configAppliedFlag: boolean;
    location: string;
}

export const initialSensors: Sensor[] = [
    {
        id: '1',
        name: '温度センサー',
        status: 'active',
        group: '環境センサー',
        rebootTime: '2023-10-01T10:00:00Z',
        imageRetentionDays: 30,
        rebootFlag: false,
        configAppliedFlag: true,
        location: '東京本社'
    },
    {
        id: '2',
        name: '湿度センサー',
        status: 'inactive',
        group: '環境センサー',
        rebootTime: '2023-10-02T11:00:00Z',
        imageRetentionDays: 60,
        rebootFlag: true,
        configAppliedFlag: false,
        location: '大阪支社'
    },
    {
        id: '3',
        name: '電力センサー',
        status: 'active',
        group: '電力センサー',
        rebootTime: '2023-10-03T12:00:00Z',
        imageRetentionDays: 90,
        rebootFlag: false,
        configAppliedFlag: true,
        location: '福岡営業所'
    }
];