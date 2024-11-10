import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド・チャン",
      position: "CTO",
      profile:
        "先進技術の研究開発を推進し、革新的なアイデアを形にすることで、チームを次のステージに導くリーダーです。長年にわたる業界経験を活かし、最新の技術トレンドを積極的に取り入れ、会社の成長に貢献しています。また、プロジェクト管理においても卓越したスキルを発揮し、複数の開発チームの進捗を統括。常に品質向上を目指し、信頼性と安定性のある製品づくりに尽力しています。技術面だけでなく、人材育成にも力を注ぎ、エンジニアとしての成長をサポートする頼れる存在です。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "サラ・リー",
      position: "デザイナー",
      profile:
        "ユーザー体験を重視したデザインとブランド戦略を手掛け、視覚的にも機能的にも魅力的なプロダクトを提供しています。多様なデザイン経験を持ち、常にユーザー目線で考え、直感的に使えるインターフェースを追求しています。また、チーム内外でのコミュニケーション能力にも優れ、他部門と連携しながら一貫性のあるビジュアルとデザインプロセスを構築。ユーザー満足度の向上とブランド価値の最大化に貢献し、全体のデザイン品質を高めています。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョン・スミス",
      position: "エンジニア",
      profile:
        "堅実な技術力とプロフェッショナルな姿勢でシステム最適化に取り組み、プロダクトの信頼性を高めることに注力しています。品質管理やコードレビューのプロセスに精通しており、細部までこだわった開発を通じて、エラーの削減と性能向上を実現しています。また、他のエンジニアとの協力体制を築き、技術面での知見を積極的に共有することでチーム全体の成長を支援。高品質なシステム開発を追求し、ユーザーに安心して利用いただけるプロダクトを提供しています。",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />

              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
