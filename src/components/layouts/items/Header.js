/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import {Disclosure} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import {PlusIcon, ShoppingCartIcon} from '@heroicons/react/solid'
import logo from '../../../assets/images/logo.png'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../../redux/actions/cartActions'

export default function Header() {
	const items = useSelector((state) => state.cart)
	const dispatch = useDispatch()

	const toggleCart = () => {
		dispatch(actions.openCart(true))
	}

	return (
		<div>
			<Disclosure as='nav' className='bg-white shadow'>
				{({open}) => (
					<div>
						<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
							<div className='flex justify-between h-16'>
								<div className='flex'>
									<div className='-ml-2 mr-2 flex items-center md:hidden'>
										{/* Mobile menu button */}
										<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
											<span className='sr-only'>
												Open main menu
											</span>
											{open ? (
												<XIcon
													className='block h-6 w-6'
													aria-hidden='true'
												/>
											) : (
												<MenuIcon
													className='block h-6 w-6'
													aria-hidden='true'
												/>
											)}
										</Disclosure.Button>
									</div>
									<div className='flex-shrink-0 flex items-center'>
										<img
											className='block lg:hidden h-8 w-auto'
											src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
											alt='Workflow'
										/>
										<img
											className='hidden lg:block h-8 w-auto'
											src={logo}
											alt='Workflow'
										/>
									</div>
									<div className='hidden md:ml-6 md:flex md:space-x-8'>
										{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
										<a
											href='/items'
											className='border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
										>
											Items
										</a>
										<a
											href='/'
											className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
										>
											Pricing
										</a>
										<a
											href='/login'
											className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
										>
											My Account
										</a>
										<a
											href='/register'
											className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
										>
											Sign Up
										</a>
									</div>
								</div>
								<div className='flex items-center'>
									<div className='flex-shrink-0'>
										<button
											type='button'
											className='relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
										>
											<PlusIcon
												className='-ml-1 mr-2 h-5 w-5'
												aria-hidden='true'
											/>
											<span>New Item</span>
										</button>
									</div>
									<div className='ml-4 relative '>
										<span
											className={`${
												!items.cart.length
													? 'hidden'
													: 'cart-bubble'
											}`}
										>
											{
												(items.cart.length = 0
													? ''
													: items.cart.length)
											}
										</span>
										<button className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none'>
											<span className='sr-only'>
												View notifications
											</span>
											<ShoppingCartIcon
												className='h-6 w-6'
												aria-hidden='true'
												onClick={toggleCart}
											/>
										</button>
									</div>
									<div className='hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center'>
										<button className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
											<span className='sr-only'>
												View notifications
											</span>
											{/* <ShoppingCartIcon
												className='h-6 w-6'
												aria-hidden='true'
											/> */}
										</button>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className='md:hidden'>
							<div className='pt-2 pb-3 space-y-1'>
								{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
								<a
									href='/items'
									className='bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'
								>
									Items
								</a>
								<a
									href='/pricing'
									className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'
								>
									Pricing
								</a>
								<a
									href='/login'
									className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'
								>
									My Account
								</a>
								<a
									href='/register'
									className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'
								>
									Sign Up
								</a>
							</div>
							<div className='pt-4 pb-3 border-t border-gray-200'>
								<div className='flex items-center px-4 sm:px-6'>
									<div className='flex-shrink-0'>
										<img
											className='h-10 w-10 rounded-full'
											src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
											alt=''
										/>
									</div>
									<div className='ml-3'>
										<div className='text-base font-medium text-gray-800'>
											Tom Cook
										</div>
										<div className='text-sm font-medium text-gray-500'>
											tom@example.com
										</div>
									</div>
									<button className='ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
										<span className='sr-only'>
											View notifications
										</span>
										<BellIcon
											className='h-6 w-6'
											aria-hidden='true'
										/>
									</button>
								</div>
								<div className='mt-3 space-y-1'>
									<a
										href='/'
										className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'
									>
										Your Profile
									</a>
									<a
										href='/'
										className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'
									>
										Settings
									</a>
									<a
										href='/'
										className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'
									>
										Sign out
									</a>
								</div>
							</div>
						</Disclosure.Panel>
					</div>
				)}
			</Disclosure>
		</div>
	)
}