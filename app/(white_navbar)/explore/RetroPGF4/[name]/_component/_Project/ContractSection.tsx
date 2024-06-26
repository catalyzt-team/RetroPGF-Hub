import { iRetroPGF4Project } from '../../../RetroType4'
import { mapChainId } from '@/app/lib/utils'
import Image from 'next/image'
export default function ContractSection({
  data,
  contractRef,
}: {
  data: iRetroPGF4Project
  contractRef: React.MutableRefObject<HTMLElement | null>
}) {
  // const grantsAndFundingArray = Object.entries(data.grantsAndFunding).flatMap(
  //   ([type, items]) => {
  //     return items.map((item) => ({
  //       type,
  //       ...item,
  //     }))
  //   }
  // )
  return (
    <section
      id="Contract Addresses"
      ref={contractRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-2 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Contract Addresses</h3>
      <hr className="border-t-gray-100" />

      {data.contracts.length == 0 && (
        <p className="text-base font-normal text-gray-600">
          There is no contract address for this project.
        </p>
      )}
      {data.contracts.length !== 0 &&
        data.contracts.map((item, i) => (
          <div className="flex flex-col gap-1" key={i}>
            <div className="flex flex-row flex-wrap gap-3 items-center ">
              <Image
                src={`/static/superchainLogo/${mapChainId(item.chainId)}.webp`}
                alt="chain"
                className="rounded-full"
                width={30}
                height={30}
              />
              <p className="text-base text-gray-500">{item.address}</p>
            </div>
          </div>
        ))}
    </section>
  )
}
