import {WhatsappLogoIcon} from '@phosphor-icons/react';
import './style.scss';

export function WhatsAppWidget() {
  return <a
    className={'whatsapp-widget'}
    href={'https://api.whatsapp.com/send/?phone=996504362514&text&type=phone_number&app_absent=0&utm_source=ig'}
    target="_blank"
    rel="noopener noreferrer"
  >
    <WhatsappLogoIcon size={100} weight="fill"/>
  </a>
}