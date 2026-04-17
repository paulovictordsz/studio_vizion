'use client'
import { createContext, useContext, useState, useCallback } from 'react'

interface ModalContextType {
  openModal: (originX: number, originY: number) => void
  closeModal: () => void
  isOpen: boolean
  origin: { x: number; y: number }
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
  origin: { x: 720, y: 60 },
})

export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [origin, setOrigin] = useState({ x: 720, y: 60 })

  const openModal = useCallback((x: number, y: number) => {
    setOrigin({ x, y })
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen, origin }}>
      {children}
    </ModalContext.Provider>
  )
}
