import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Competitive interest rates',
        description:
            'We provide one of the lowest interest rates in the market. We earn even at such low interest rates by operational excellence and retention of customers',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'We try to work as transparently as possible and all the costs and fees are discussed upfront without any hidden cost or fees charged later on.',
        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            'Loans are disbursed instantly into your bank accounts after successful verification of documents and KYC of customer.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            'The users are notified every step of the way via email and mobile notifications.',
        icon: AnnotationIcon,
    },
]

export default function Footer() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-5xl text-indigo-600 font-bold tracking-wide uppercase">Agrian</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to avail loans
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We provide easy and flexible loans ranging from short term to long term durations.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}