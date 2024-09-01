export interface Camera {
    id: string;
    name: string;
    status: 'active' | 'inactive';
    sensor: string;
    cameraPath: string;
    captureMode: string;
    captureTime: string;
    captureInterval: string;
    latestReading: string;
    latestCapture: string;
}

export const initialCameras: Camera[] = [
    {
        id: '1',
        name: 'カメラA',
        status: 'active',
        sensor: 'センサーA',
        cameraPath: '/path/to/cameraA',
        captureMode: '自動',
        captureTime: '2023-10-01T10:00:00Z',
        captureInterval: '5分',
        latestReading: '正常',
        latestCapture: '2023-10-01T10:05:00Z'
    },
    {
        id: '2',
        name: 'カメラB',
        status: 'inactive',
        sensor: 'センサーB',
        cameraPath: '/path/to/cameraB',
        captureMode: '手動',
        captureTime: '2023-10-02T11:00:00Z',
        captureInterval: '10分',
        latestReading: '異常',
        latestCapture: '2023-10-02T11:10:00Z'
    }
];