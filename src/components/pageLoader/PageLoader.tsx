import { DotPulse } from '@uiball/loaders'

export const PageLoader = () => {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center'>
        <DotPulse size={100} speed={2} color='#fff' />
        <p className='text-white text-2xl mt-4'>Cargando...</p>
    </main>
  )
}
