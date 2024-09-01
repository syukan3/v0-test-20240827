import { z } from 'zod';

export const cameraRangeSchema = z.object({
  name: z.string().nonempty("カメラ範囲名は必須です"),
  status: z.enum(['active', 'inactive']),
  camera: z.string().nonempty("カメラは必須です"),
  latestCaptureTime: z.string().nonempty("最新取得時間は必須です"),
  latestReading: z.string().nonempty("最新読み取り値は必須です"),
  latestCapture: z.string().nonempty("最新キャプチャは必須です"),
  processingType: z.enum(['CIRCULAR']),
  x1: z.number().min(0, "x1は0以上でなければなりません"),
  y1: z.number().min(0, "y1は0以上でなければなりません"),
  x2: z.number().min(0, "x2は0以上でなければなりません"),
  y2: z.number().min(0, "y2は0以上でなければなりません"),
  minAngle: z.number().min(0, "最小角度は0以上でなければなりません"),
  minValue: z.number().min(0, "最小値は0以上でなければなりません"),
  maxAngle: z.number().min(0, "最大角度は0以上でなければなりません"),
  maxValue: z.number().min(0, "最大値は0以上でなければなりません"),
  orientation: z.string().nonempty("向きは必須です"),
  decimalPlaces: z.number().min(0, "小数点以下桁数は0以上でなければなりません"),
  roundingMethod: z.string().nonempty("丸め方は必須です"),
});

export type CameraRangeFormData = z.infer<typeof cameraRangeSchema>;