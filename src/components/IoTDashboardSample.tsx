"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Bell, Thermometer, Droplets, Zap } from "lucide-react"
import { useState, useEffect } from 'react'

// モックデータ生成関数
const generateMockData = (dataPoints: number) => {
  return Array.from({ length: dataPoints }, (_, i) => ({
    time: new Date(Date.now() - (dataPoints - i) * 60000).toISOString().substr(11, 5),
    temperature: Math.random() * 10 + 20,
    humidity: Math.random() * 20 + 40,
    power: Math.random() * 500 + 1000,
  }))
}

export function IoTDashboardSample() {
  const [data, setData] = useState(generateMockData(30))

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1), {
          time: new Date().toISOString().substr(11, 5),
          temperature: Math.random() * 10 + 20,
          humidity: Math.random() * 20 + 40,
          power: Math.random() * 500 + 1000,
        }]
        return newData
      })
    }, 60000) // 1分ごとにデータを更新

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-8 bg-background">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">デバイス数</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 18 22 12 16 6" />
              <path d="M8 6 2 12 8 18" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12台</div>
            <p className="text-xs text-muted-foreground">オンライン: 10, オフライン: 2</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">平均温度</CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5°C</div>
            <p className="text-xs text-muted-foreground">過去24時間の平均</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">平均湿度</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52%</div>
            <p className="text-xs text-muted-foreground">過去24時間の平均</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">総電力消費量</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234 kWh</div>
            <p className="text-xs text-muted-foreground">過去30日間の合計</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="col-span-1 sm:col-span-2">
          <CardHeader>
            <CardTitle>温度推移</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1 sm:col-span-2">
          <CardHeader>
            <CardTitle>湿度推移</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4">
          <CardHeader>
            <CardTitle>電力消費量推移</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="power" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="mr-2" />
            最新アラート
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>デバイスID: 005 - 高温アラート</span>
              <span className="text-sm text-muted-foreground">2分前</span>
            </li>
            <li className="flex items-center justify-between">
              <span>デバイスID: 003 - 接続エラー</span>
              <span className="text-sm text-muted-foreground">15分前</span>
            </li>
            <li className="flex items-center justify-between">
              <span>デバイスID: 008 - 低湿度警告</span>
              <span className="text-sm text-muted-foreground">1時間前</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}