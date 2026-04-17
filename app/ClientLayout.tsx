'use client'
import { ModalProvider } from './ModalContext'
import ContactModal from '@/components/ContactModal'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <ContactModal />
    </ModalProvider>
  )
}
