"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Songbook() {

    const [submitted, setSubmitted] = useState(false)
    const [errored, setErrored] = useState(false)
    const [errorText, setErrorText] = useState('Hmm, något gick fel. Försök igen');
    
    const handleSubmit = async (e: any) => {

        e.preventDefault()
        const form = e.target
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        }

        const req = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        if(req.status == 200) {
            setSubmitted(true)
       
            form.name.value = ''
            form.email.value = ''
            form.message.value = ''
    
        }else if(req.status == 400) {
            setErrorText('För mycket text i meddelandet')
            setErrored(true)
        }else{
            setErrorText('Något gick fel. Försök igen')
            setErrored(true)
        }
       
        

    }

    return (
        <div className='flex justify-center mt-20 h-full flex-1'>
            <div>
        <form className='ring-yellow-500' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold mb-4'>Kontakt</h1>

            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col '>
                        <label htmlFor='name'>Namn</label>
                        <input required className='rounded-lg dark:text-black' placeholder='Förnamn' type='text' name='name' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor='surname'>Email</label>
                        <input required className='rounded-lg dark:text-black' placeholder='geten@dalo.se' type='email' name='email' />
                    </div>

                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor='message'>Meddelande</label>
                    <textarea required className='rounded-lg dark:text-black' placeholder='Meddelande' name='message' />

                </div>
                <input className='rounded-lg bg-yellow-400 w-full py-3 mt-5 cursor-pointer text-yellow-900 hover:bg-yellow-500 shadow border-yellow-300 border transition-colors' type='submit' value='Skicka!' />
            </div>
        </form>
        <p className='text-center my-5 text-yellow-400'>eller</p>
        <div className='flex justify-center items-center gap-2'>
            <a href='mailto:styr@dalo.se' className='text-neutral-700 dark:text-white'>
               styr@dalo.se


            </a>
            </div>
        </div>
        <Transition appear show={submitted} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setSubmitted}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Tack för ditt Meddelande!
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Vi kommer att kontakta dig så fort vi kan.
                                    </p>
                                </div>

                                <div className="mt-4 self-end">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Stäng
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

        <Transition appear show={errored} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setErrored}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Något gick fel
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {errorText}
                                    </p>
                                </div>

                                <div className="mt-4 self-end">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                        onClick={() => setErrored(false)}
                                    >
                                        Stäng
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    </div>)
}