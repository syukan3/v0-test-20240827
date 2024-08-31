export interface Notification {
    id: string;
    title: string;
    content: string;
    date: string;
    imageUrl: string;
    isNew: boolean; // 新しいフィールド
}

export const sampleNotifications: Notification[] = [
    {
        id: '1',
        title: '新機能リリースのお知らせ',
        content: '当サービスに新しい機能が追加されました。新機能には、ダッシュボードの改善、レポート機能の拡張、およびユーザーインターフェースの最適化が含まれます。これらの更新により、より効率的にサービスをご利用いただけます。詳細については、ヘルプセンターをご覧ください。',
        date: '2023-04-01T10:00:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=1',
        isNew: true
    },
    {
        id: '2',
        title: 'メンテナンスのお知らせ',
        content: '2023年4月5日に定期メンテナンスを実施いたします。メンテナンス中はサービスの一部機能がご利用いただけません。ご不便をおかけしますが、ご理解とご協力をお願いいたします。メンテナンス時間：4月5日 午前2時〜午前5時（日本時間）',
        date: '2023-04-02T14:30:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=2',
        isNew: true
    },
    {
        id: '3',
        title: 'セキュリティアップデート',
        content: '重要なセキュリティアップデートを行いました。このアップデートにより、システムのセキュリティが強化され、お客様のデータがより安全に保護されます。特別な操作は必要ありませんが、最新版のアプリケーションをご利用いただくことをお勧めします。',
        date: '2023-04-03T09:15:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=3',
        isNew: false
    },
    {
        id: '4',
        title: 'ゴールデンウィーク営業時間',
        content: 'ゴールデンウィーク期間中の営業時間についてお知らせいたします。5月3日から5月5日まではカスタマーサポートの対応時間が短縮されます。緊急の問い合わせについては、24時間対応のヘルプデスクをご利用ください。',
        date: '2023-04-10T11:00:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=4',
        isNew: false
    },
    {
        id: '5',
        title: 'アプリバージョンアップデート',
        content: '最新バージョン（v2.5.0）へのアップデートをお願いいたします。このバージョンには、パフォーマンスの改善と新機能の追加が含まれています。App StoreまたはGoogle Play Storeから最新版をダウンロードしてください。',
        date: '2023-04-15T16:45:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=5',
        isNew: false
    },
    {
        id: '6',
        title: 'キャンペーン開始のお知らせ',
        content: '春の特別キャンペーンを開始いたしました。期間限定で、プレミアム機能を1ヶ月間無料でお試しいただけます。この機会に、高度な分析ツールやカスタムレポート機能をぜひお試しください。',
        date: '2023-04-20T08:30:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=6',
        isNew: false
    },
    {
        id: '7',
        title: 'お問い合わせフォーム改善',
        content: 'お問い合わせフォームをより使いやすく改善いたしました。カテゴリ選択の追加や、添付ファイル機能の拡張により、より正確で迅速なサポートを提供できるようになりました。',
        date: '2023-04-25T13:20:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=7',
        isNew: false
    },
    {
        id: '8',
        title: 'プライバシーポリシー更新',
        content: 'プライバシーポリシーを更新いたしました。主な変更点は、データ処理の透明性向上と、ユーザーの権利に関する詳細な説明の追加です。更新されたプライバシーポリシーは、次回のログイン時にご確認いただけます。',
        date: '2023-05-01T10:00:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=8',
        isNew: false
    },
    {
        id: '9',
        title: '新規パートナーシップ締結',
        content: '新たなパートナー企業との提携が決定いたしました。この提携により、より幅広いサービスと、さらなる利便性をお客様に提供できるようになります。詳細は近日中に発表いたします。',
        date: '2023-05-05T09:00:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=9',
        isNew: false
    },
    {
        id: '10',
        title: 'サービス10周年記念イベント',
        content: 'サービス開始10周年を記念して、特別イベントを開催いたします。オンラインセミナーや、限定コンテンツの公開、スペシャルプレゼントキャンペーンなど、様々な企画をご用意しております。詳細は専用ページをご覧ください。',
        date: '2023-05-10T15:30:00Z',
        imageUrl: 'https://picsum.photos/600/400?random=10',
        isNew: false
    }
];