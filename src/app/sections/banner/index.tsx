import bannerImage from '@/assets/images/banner/banner.jpg'
import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { CaretRightIcon } from '@phosphor-icons/react/ssr'

export function BannerSection() {
  return (
    <section className="relative flex h-[40rem] flex-col items-center justify-center bg-transparent">
      <img
        src={bannerImage.src}
        alt="Banner"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <Header />

      <h1 className="font-heading text-shadow z-10 text-5xl leading-snug font-bold text-stone-50">
        Transforme <strong className="text-primary-300">ideias</strong> em{' '}
        <strong className="text-primary-300">realidade</strong>. <br />
        Mude o mundo com{' '}
        <strong className="text-primary-300">engenharia</strong>.
      </h1>

      <Button className="absolute bottom-16 z-10">
        Saiba mais <CaretRightIcon className="size-5" weight="bold" />
      </Button>

      <div className="absolute bottom-0 h-[30rem] w-full bg-gradient-to-t from-stone-900 to-transparent" />
    </section>
  )
}
