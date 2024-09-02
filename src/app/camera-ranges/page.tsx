'use client';

import { useState } from 'react';
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SubHeader from '@/components/SubHeader';
import CameraRangeFilterSidebar from '@/components/CameraRangeFilterSidebar';
import { initialCameraRanges } from '@/data/initialCameraRanges';

export default function CameraRangesPage() {
	const [cameraRanges, setCameraRanges] = useState(initialCameraRanges);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const router = useRouter();

	const handleAdd = () => {
		router.push('/camera-ranges/new');
	};

	const handleFilter = () => {
		setIsFilterOpen(true);
	};

	const handleApplyFilter = (filters: any) => {
		const filteredCameraRanges = initialCameraRanges.filter(cameraRange => {
			return (
				(!filters.name || cameraRange.name.toLowerCase().includes(filters.name.toLowerCase())) &&
				(!filters.status || cameraRange.status === filters.status) &&
				(!filters.camera || cameraRange.camera.toLowerCase().includes(filters.camera.toLowerCase()))
			);
		});
		setCameraRanges(filteredCameraRanges);
	};

	return (
		<div className="flex flex-col h-full">
			<SubHeader
				title="カメラ範囲 一覧"
				showAddButton={true}
				showFilterButton={true}
				onAdd={handleAdd}
				onFilter={handleFilter}
			/>
			<div className="flex-1 overflow-auto p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{cameraRanges.map((cameraRange) => (
						<div
							key={cameraRange.id}
							className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
						>
							<Link
								href={`/camera-ranges/${cameraRange.id}`}
								className="block"
							>
								<img
									src={cameraRange.imageUrl} // 画像URLを追加
									alt={cameraRange.name}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h2 className="text-xl font-semibold text-gray-800">{cameraRange.name}</h2>
									<p className="text-sm text-gray-600">カメラ: {cameraRange.camera}</p>
									<span className={`mt-2 inline-block px-2 py-1 rounded-full text-xs ${cameraRange.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
										{cameraRange.status === 'active' ? '有効' : '無効'}
									</span>
								</div>
							</Link>
							<Link
								href={`/camera-ranges/${cameraRange.id}/edit`}
								className="absolute bottom-2 right-2 p-2 text-gray-600 hover:bg-gray-100 transition-colors duration-200 rounded-full flex items-center justify-center"
								aria-label="編集"
							>
								<PencilIcon className="h-5 w-5" />
							</Link>
						</div>
					))}
				</div>
			</div>
			{isFilterOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={() => setIsFilterOpen(false)}
				/>
			)}
			<CameraRangeFilterSidebar
				isOpen={isFilterOpen}
				onClose={() => setIsFilterOpen(false)}
				onApplyFilter={handleApplyFilter}
			/>
		</div>
	);
}