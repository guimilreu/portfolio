import { useState } from 'react'
import Spline from '@splinetool/react-spline';

function Hero() {
	return (
		<section className="dark:bg-gray-900 dark:text-gray-100">
			<div className="container max-w-7xl flex flex-col justify-center mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-between">
				<div className="flex flex-col justify-center p-6 text-center rounded-sm w-3/5 lg:text-left">
					<div className="text-left">
						<p className="text-xl leading-8 text-slate-300">
						👋 Hi there, my name is
						</p>
						<h1 className="acma mt-1 text-3xl font-bold tracking-tight text-white sm:text-5xl">
							Guilherme Milreu
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-500">
						I am a full stack developer and web designer, completely enthusiastic about learning new technologies. Currently focused on developing at <a className="no-underline text-gray-400 font-medium" href="https://hack.net.br/">Hack Sales Performance</a>.
						</p>
						<div className="mt-10 flex items-left justify-start gap-x-1">
							<a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800">
								Get started
								<svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</a>
							<a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
								Lorem ipsum
							</a>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center p-6 mt-8 w-2/5 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<Spline className="spline" scene="https://prod.spline.design/fqao8aZqi4kEael0/scene.splinecode" />
				</div>
			</div>
		</section>
	)
}

export default Hero;