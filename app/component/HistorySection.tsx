import { FC, useState } from 'react'
import Image from 'next/image'
import RPGF1History from '@/app/component/History/RetroPGF1/RPGF1History'
import RPGF2History from '@/app/component/History/RetroPGF2/RPGF2History'
import RPGF3History from '@/app/component/History/RetroPGF3/RPGF3History'
interface HistorySectionProps {
  round?: number
}
const HistorySection: FC<HistorySectionProps> = ({ round }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const load = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  load()
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center animate-pulse h-[40em]">
        <Image
          src="/static/loading/small_sunny.svg"
          width={55}
          height={55}
          alt="loading"
        />
      </div>
    )

  return (
    <>
      {round === 1 && (
        <div className="grid grid-cols-7 gap-x-10 animate-slowfade">
            <RPGF1History />
        </div>
      )}

      {round === 2 && (
        <div className="grid grid-cols-7 gap-x-10 animate-slowfade">
            <RPGF2History />
        </div>
      )}
      {round === 3 && (
        <div className="grid grid-cols-7 gap-x-10 animate-slowfade">
            <RPGF3History />
        </div>
      )}
    </>
  )
}
export default HistorySection
