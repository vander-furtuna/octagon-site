export interface IService {
  title: string
  options: string[]
  image_url: string
  href_id: string
  button: {
    url: string
    label: string
  }
}

export interface IServiceIcon {
  title: string
  Icon: string | JSX.Element | JSX.Element[]
  href: string
}
