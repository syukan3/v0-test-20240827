import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FreelanceWriter() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-teal-100 to-teal-200 p-6 lg:p-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] opacity-10" />
            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-teal-800 lg:text-3xl">未経験から</h2>
                        <h1 className="text-4xl font-bold text-teal-900 lg:text-5xl">
                            月収50万円の
                            <br />
                            フリーライターに
                        </h1>
                        <p className="text-lg text-teal-700">社会人経験2ヶ月の主婦。</p>
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white">詳細を見る</Button>
                    </div>
                    <div className="relative">
                        <Image
                            src="/placeholder.svg?height=400&width=400"
                            alt="Smiling woman"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}