import { OctagonAboutUsLogo } from '@/assets/images/banner/octagon-aboutus';
import { ILinkButton } from '@/dtos/ILinkButton';
import { BsLinkedin, BsFacebook, BsWhatsapp } from 'react-icons/bs';

export const linkButtonsData: ILinkButton[] = [
    {
        label: 'Veja o site da Octagon!',
        link: '/',
        Icon: <OctagonAboutUsLogo color="dark" />,
    },
    {
        label: 'Siga nossa conta no LinkedIn',
        link: 'https://www.linkedin.com/company/octagonengenharia/',
        Icon: <BsLinkedin />,
    },
    {
        label: 'Entre em contato conosco pelo Facebook',
        link: 'https://www.facebook.com/OctagonEngenharia/',
        Icon: <BsFacebook />,
    },
    {
        label: 'Entre em contato conosco pelo WhatsApp',
        link: process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/',
        Icon: <BsWhatsapp />,
    },
];
