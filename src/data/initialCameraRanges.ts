export interface CameraRange {
    id: string;
    name: string;
    status: 'active' | 'inactive';
    camera: string;
    latestCaptureTime: string;
    latestReading: string;
    latestCapture: string;
    processingType: 'CIRCULAR';
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    minAngle: number;
    minValue: number;
    maxAngle: number;
    maxValue: number;
    orientation: string;
    decimalPlaces: number;
    roundingMethod: string;
}

export const initialCameraRanges: CameraRange[] = [
    {
        id: '1',
        name: '範囲A',
        status: 'active',
        camera: 'カメラA',
        latestCaptureTime: '2023-10-01T10:00:00Z',
        latestReading: '正常',
        latestCapture: '2023-10-01T10:05:00Z',
        processingType: 'CIRCULAR',
        x1: 0,
        y1: 0,
        x2: 100,
        y2: 100,
        minAngle: 0,
        minValue: 0,
        maxAngle: 180,
        maxValue: 100,
        orientation: '水平',
        decimalPlaces: 2,
        roundingMethod: '四捨五入'
    },
    {
        id: '2',
        name: '範囲B',
        status: 'inactive',
        camera: 'カメラB',
        latestCaptureTime: '2023-10-02T11:00:00Z',
        latestReading: '異常',
        latestCapture: '2023-10-02T11:10:00Z',
        processingType: 'CIRCULAR',
        x1: 10,
        y1: 10,
        x2: 110,
        y2: 110,
        minAngle: 10,
        minValue: 10,
        maxAngle: 190,
        maxValue: 110,
        orientation: '垂直',
        decimalPlaces: 3,
        roundingMethod: '切り捨て'
    }
];