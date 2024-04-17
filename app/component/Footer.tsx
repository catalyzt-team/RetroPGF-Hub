import { LogoDiscord, LogoTwitter } from '@carbon/icons-react'
import LinkIcon from '@carbon/icons-react/lib/Link'
import Image from 'next/image'
import Link from 'next/link'

function ReturnLink() {
  return (
    <div className="flex items-center gap-8">
      <Link href={'/explore'} className="text-base font-semibold text-gray-800">
        Explore
      </Link>
      <Link
        href={'/community'}
        className="text-base font-semibold text-gray-800"
      >
        Community
      </Link>
      <Link
        href={'/resource'}
        className="text-base font-semibold text-gray-800"
      >
        Resources
      </Link>
      <Link
        href={'/resource'}
        className="text-base font-semibold text-gray-800"
      >
        Impact Calculator
      </Link>
    </div>
  )
}

function ReturnLinkLogo() {
  return (
    <div className="flex gap-2">
      <Link href="/" className="p-1 rounded-full bg-gray-100">
        <LinkIcon size={24} className="fill-gray-800" />
      </Link>
      <Link href="/" className="p-1 rounded-full bg-gray-100">
        <LogoTwitter size={24} className="fill-gray-800" />
      </Link>
      <Link href="/" className="p-1 rounded-full bg-gray-100">
        <LogoDiscord size={24} className="fill-gray-800" />
      </Link>
    </div>
  )
}

export default function Footer({}: {}) {
  return (
    <footer className="w-full px-4 lg:px-12 mt-6">
      {/* Mobile Footer */}

      <div className="flex items-start min-[350px]:items-center lg:hidden flex-col gap-4 border-t py-4 mt-6 border-gray-100">
        <ReturnLinkLogo />
        <div className="">
          <h6 className="text-base font-normal text-gray-600">
            © 2024 RetroPGF Hub. All rights reserved.
          </h6>
          <div className="flex gap-0.5 flex-wrap text-sm text-gray-600">
            <span>This open-source project built by</span>
            <span className="font-semibold">@Catalyzt</span>.
          </div>
        </div>
      </div>

      {/* End Mobile Footer */}

      <div className="hidden lg:flex flex-col gap-2 border-t border-gray-100 py-6">
        <div className="flex justify-between">
          <div className="flex gap-4 ">
            <Link className="" href="/">
              <Image
                src={'/logo/logo.svg'}
                alt="logo"
                width={144}
                height={32}
              />
            </Link>
          </div>

          <ReturnLink />

          <div className="text-base font-normal text-gray-600">
            © 2024 RetroPGF Hub
          </div>
        </div>
        <div className="flex justify-between">
          <ReturnLinkLogo />
          <div className="">
            <h6 className="flex gap-1 text-base font-normal text-gray-600">
              This open-source project built by
              <p className="text-base font-semibold text-gray-600">
                @Catalyzt.
              </p>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}