import Layout from '@/components/Layout';

export default function SubscriptionPage() {
  return (
    <Layout>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">契約プラン</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">現在の契約プランと利用可能なオプション</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">現在のプラン</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">プロフェッショナル</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">プラン変更</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  プランをアップグレード
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Layout>
  );
}