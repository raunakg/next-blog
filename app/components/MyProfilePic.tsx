import Image from 'next/image'

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            <div className="w-32 h-32 translate-x-[calc(50vw-50%)]">
                <Image
                    fill={true}
                    src="/images/Avatar.jpg"
                    alt="Raunak"
                    priority={true}
                    className="object-cover border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                />
            </div>
        </section>
    )
}
