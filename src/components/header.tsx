import { NavItem } from '@/sections/banner/components/nav-item'
import { Logo } from './logo'
import { navItemsData } from '@/data/header/nav-items-data'
import { Button } from './button'
import { PhoneIcon } from '@phosphor-icons/react/ssr'

export function Header() {
  return (
    <header className="absolute top-0 z-10 w-full px-20 pt-14">
      <div className="flex items-center justify-between rounded-md border border-stone-600/50 bg-gradient-to-r from-stone-950/50 to-stone-950/60 px-6 py-4 backdrop-blur-md">
        <Logo className="h-14" />
        <div className="flex h-full w-fit items-center gap-6">
          <nav className="h-fit w-fit">
            <ul className="flex h-fit gap-4">
              {navItemsData.map((navItem) => (
                <li key={navItem.id} className="h-fit w-fit">
                  <NavItem href={navItem.id}>{navItem.label}</NavItem>
                </li>
              ))}
            </ul>
          </nav>
          <Button>
            <PhoneIcon className="size-6" weight="bold" />
            Contato
          </Button>
        </div>
      </div>
    </header>
  )
}
