import { Metadata } from "next"

import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Carousel from "@modules/home/components/carousel"
import Collection from "@modules/home/components/collection"
import FeaturedProducts from "@modules/home/components/featured-products"

export const metadata: Metadata = {
  title: 'Bumsurfboards | Premium Surfboards for Every Wave',
  description: 'A premium surfboards e-commerce website for the ultimate surfing experience.',
  openGraph: {
    title: 'Bumsurfboards',
    description: 'Premium surfboards for all levels. Shop now and ride the perfect wave.',
    url: 'https://bumsurfboards.com',
    siteName: 'Bumsurfboards',
    images: [
      {
        url: 'https://bumsurfboards.com/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Bumsurfboards Home',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  return (
    <>
      <Carousel />
      <Collection />
      {region && collections?.length > 0 && (
        <div className="py-12">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      )}
    </>
  )
}
