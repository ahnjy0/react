import imgImage2 from "../imports/App/logo_adbance_01.png";
import imgImage3 from "../imports/App/sample_book_01.jpg";
import imgImage4 from "../imports/App/sample_book_02.jpg";
import img1 from "../imports/App/sample_book_03.jpg";
import imgImage5 from "../imports/App/sample_book_04.jpg";

interface InfoBoxProps {
  color: string;
  bgColor: string;
  borderColor: string;
  goals: string[];
  curriculum: string[];
}

function InfoBoxes({ color, bgColor, borderColor, goals, curriculum }: InfoBoxProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
      <div className="rounded-[14px] p-4 border" style={{ backgroundColor: bgColor, borderColor }}>
        <span
          className="inline-block text-white text-[12px] font-['Pretendard',sans-serif] font-bold px-2.5 py-0.5 rounded-[4px] mb-3"
          style={{ backgroundColor: color }}
        >
          활동 목표
        </span>
        <ul className="space-y-0.5">
          {goals.map((g, i) => (
            <li key={i} className="text-[13px] text-black leading-[22px] font-['Pretendard',sans-serif]">
              {g}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-[14px] p-4 border border-[#cad5e2] bg-[rgba(241,245,249,0.8)]">
        <span className="inline-block text-white text-[12px] font-['Pretendard',sans-serif] font-bold px-2.5 py-0.5 rounded-[4px] mb-3 bg-[#314158]">
          교과 연계
        </span>
        <ul className="space-y-0.5">
          {curriculum.map((c, i) => (
            <li key={i} className="text-[13px] text-black leading-[22px] font-['Pretendard',sans-serif]">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface BookCardProps {
  image: string;
  title: string;
  description: string;
  borderColor?: string;
}

function BookCard({ image, title, description, borderColor = "#e2e8f0" }: BookCardProps) {
  return (
    <div className="bg-white rounded-[14px] border border-[#f1f5f9] p-5 flex gap-4 items-start">
      <div
        className="shrink-0 w-[72px] h-[100px] rounded-[8px] border bg-[#f8fafc] overflow-hidden"
        style={{ borderColor }}
      >
        <img src={image} alt="" className="w-full h-full object-cover rounded-[4px]" />
      </div>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <p className="font-['Pretendard',sans-serif] font-medium text-[18px] leading-[1.4] text-black">{title}</p>
        <p className="font-['Pretendard',sans-serif] text-[13px] leading-[22px] text-black text-justify">{description}</p>
      </div>
    </div>
  );
}

interface TopicCardProps {
  topic: string;
  description: string;
  accentColor: string;
}

function TopicCard({ topic, description, accentColor }: TopicCardProps) {
  return (
    <div className="bg-white rounded-[14px] border border-[#f1f5f9] p-5 relative">
      <div className="flex items-start gap-3">
        <span
          className="shrink-0 mt-1 inline-block text-[12px] font-['Pretendard',sans-serif] font-bold px-2.5 py-0.5 rounded-[20px] border"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          주제
        </span>
        <div>
          <p className="font-['Pretendard',sans-serif] font-medium text-[18px] leading-[1.4] text-black mb-1">{topic}</p>
          <p className="font-['Pretendard',sans-serif] text-[13px] leading-[22px] text-black text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface SessionCardProps {
  number: number;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  goalsBg: string;
  goalsBorder: string;
  goals: string[];
  curriculum: string[];
  children: React.ReactNode;
}

function SessionCard({
  number,
  title,
  color,
  bgColor,
  borderColor,
  goalsBg,
  goalsBorder,
  goals,
  curriculum,
  children,
}: SessionCardProps) {
  return (
    <div
      className="rounded-[16px] border p-6 flex flex-col gap-4"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-[6px] flex items-center justify-center shrink-0"
          style={{ backgroundColor: color }}
        >
          <span className="font-['Pretendard',sans-serif] font-black text-[22px] text-white leading-none">{number}</span>
        </div>
        <span className="font-['Pretendard',sans-serif] font-bold text-[18px] text-[#0a0a0a] tracking-[-0.4px]">
          {title}
        </span>
      </div>
      {children}
      <InfoBoxes
        color={color}
        bgColor={goalsBg}
        borderColor={goalsBorder}
        goals={goals}
        curriculum={curriculum}
      />
    </div>
  );
}

interface PageCardProps {
  children: React.ReactNode;
  footerLabel: string;
}

function PageCard({ children, footerLabel }: PageCardProps) {
  return (
    <div className="bg-white rounded-[14px] border border-[#e2e8f0] w-full">
      <div className="px-6 sm:px-10 pt-10 pb-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="h-[52px] w-[100px] relative shrink-0">
            <img src={imgImage2} alt="과학탐탐 로고" className="absolute inset-0 w-full h-full object-contain object-left" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-bold text-[20px] sm:text-[24px] tracking-[-0.9px] text-right shrink-0">
            <span className="text-[#3c1e1e]">2026년 3월</span>
            <span className="text-[#1d293d]"> 수업계획안</span>
          </p>
        </div>

        {/* Sessions */}
        <div className="flex flex-col gap-5">
          {children}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#f1f5f9] pt-4">
          <p className="font-['Noto_Sans_KR',sans-serif] text-[10px] text-[rgba(10,10,10,0.5)]">{footerLabel}</p>
          <img src={img1} alt="한우리독서토론논술" className="h-[19px] w-[80px] object-contain object-right" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#f1f5f9] min-h-screen py-8 px-4 sm:px-8">
      <div className="max-w-[860px] mx-auto flex flex-col gap-8">
        {/* Page 1 */}
        <PageCard footerLabel="과학탐탐 2026년 3월 수업계획안">
          <SessionCard
            number={1}
            title="과학 독서"
            color="#155dfc"
            bgColor="#f8fafc"
            borderColor="#cad5e2"
            goalsBg="rgba(239,246,255,0.5)"
            goalsBorder="#dbeafe"
            goals={[
              "• 도구의 원리와 쓰임새를 익힐 수 있다.",
              "• 일상생활에서 쓰는 도구를 살펴볼 수 있다.",
              "• 오늘 배운 내용을 글로 정리할 수 있다.",
            ]}
            curriculum={[
              "• 과학 3-1(미래엔) 1. 힘과 우리 생활",
              "• 과학 3-1(아이스크림미디어) 1. 힘과 우리 생활",
            ]}
          >
            <BookCard
              image={imgImage3}
              title="작전명 컵케이크"
              description="생쥐 남매인 진저와 맥은 부엌에 있는 컵케이크를 발견한다. 그리고 주변에 있는 여러 도구를 이용하여 컵케이크를 쥐구멍으로 옮기는 작전을 실행한다. 이러한 이야기를 바탕으로 우리가 생활 속에서 이용하는 여러 도구에 숨어 있는 과학 원리를 설명하는 책이다."
              borderColor="#314158"
            />
          </SessionCard>

          <SessionCard
            number={2}
            title="비문학 독서"
            color="#009966"
            bgColor="#f8fafc"
            borderColor="#e2e8f0"
            goalsBg="rgba(236,253,245,0.5)"
            goalsBorder="#d0fae5"
            goals={[
              "• 유관순이 일제강점기에 한 일을 알 수 있다.",
              "• 독립운동가의 노력을 살피고 3·1 운동의 의미를 되새길 수 있다.",
              "• 유관순이 한 일을 떠올리며 편지를 쓸 수 있다.",
            ]}
            curriculum={[
              "• 국어 3-1 (나) 5. 인물에게 마음을 전해요",
              "• 국어 4-2 (가) 2. 우리말 우리글",
            ]}
          >
            <BookCard
              image={imgImage4}
              title="유관순을 찾아라"
              description="숨은그림찾기와 역사 이야기가 만나 쉽고 재미있게 읽을 수 있는 책이다. 1919년 3월 1일, 이화학당 학생 유관순은 친구들과 함께 태극기를 흔들며 거리로 나섰다. 여러 어려움 속에서도 끝까지 독립을 외친 유관순의 이야기를 살펴볼 수 있다."
            />
          </SessionCard>
        </PageCard>

        {/* Page 2 */}
        <PageCard footerLabel="과학탐탐 2026년 3월 수업계획안">
          <SessionCard
            number={3}
            title="토의 · 토론"
            color="#f54900"
            bgColor="#f8fafc"
            borderColor="#e2e8f0"
            goalsBg="rgba(255,247,237,0.5)"
            goalsBorder="#ffedd4"
            goals={[
              "• 토의와 토론의 차이를 이해할 수 있다.",
              "• 토론 주제를 찾고 주제에 대해 생각할 수 있다.",
              "• 주제에 대하여 토론하고 평가할 수 있다.",
            ]}
            curriculum={[
              "• 국어 3-1 (나) 4. 중요한 내용을 찾아요",
              "• 국어 3-1 (나) 6. 자신 있게 읽고 써요",
            ]}
          >
            <TopicCard
              topic="친구의 잘못을 선생님께 말씀드리는 것"
              description="학교생활을 하다 보면 친구의 잘못을 자주 보게 된다. 그럴 때마다 친구의 잘못을 선생님께 말씀드려야 할까? 친구의 잘못을 알리는 것은 상황에 따라 친구에게 도움이 될 수도 있고, 친구와 사이가 멀어지게 될 수도 있는 행동이다. 이는 정의와 우정, 책임감 같은 여러 가치 중에 무엇을 우선해야 할지 고민해볼 수 있는 문제로, 어린이들은 어떤 선택을 하는 것이 옳을지 스스로 생각하고 판단해 보며 도덕적 사고력을 키울 수 있다."
              accentColor="#f54900"
            />
          </SessionCard>

          <SessionCard
            number={4}
            title="문학 독서"
            color="#4f39f6"
            bgColor="#f8fafc"
            borderColor="#e2e8f0"
            goalsBg="rgba(238,242,255,0.5)"
            goalsBorder="#e0e7ff"
            goals={[
              "• 등장인물이 겪은 일을 정리할 수 있다.",
              "• 고민과 관련된 경험을 떠올리며 고민을 해결하는 방법을 생각할 수 있다.",
              "• 고민 상담 글을 완성할 수 있다.",
            ]}
            curriculum={[
              "• 국어활동 3-1 6. 자신 있게 읽고 써요",
              "• 국어 3-2 (가) 1. 경험과 관련지으며 이해해요",
            ]}
          >
            <BookCard
              image={imgImage5}
              title="깊은 밤 필통 안에서"
              description="담이의 필통 속 연필들은 일기나 편지를 쓰다 온 일, 숙제를 하다 온 일 등 밖에서 겪은 일을 서로 털어놓으며 이런저런 이야기를 나눈다. 연필들이 나누는 대화를 통해 초등학교에 다니는 아이들의 고민을 들여다볼 수 있는 책이다."
            />
          </SessionCard>
        </PageCard>
      </div>
    </div>
  );
}
