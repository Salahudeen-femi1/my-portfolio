
export default function Experiences() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">Experiences</h1>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

          <div className="space-y-10">
            <div className="relative md:max-w-[46%] md:ml-auto md:pr-8">
              <div className="absolute left-0 md:left-[-1.75rem] top-8 md:left-auto md:right-[calc(50%_-_0.75rem)]">
                <div className=" md:hidden h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white shadow-lg" />
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white mb-4">
                  March 14 - September 26
                </div>
                <p className="text-xl font-semibold mb-1">Frontend Web Developer</p>
                <span className="text-blue-600 font-medium">Vergold</span>
                <div className="mt-5 flex flex-wrap gap-3">
                  {['Next.js', 'Tailwind', 'Rest APIs', 'Git'].map((tag) => (
                    <span key={tag} className="rounded-full border border-blue-500 bg-white px-3 py-1 text-[13px] font-medium text-blue-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative md:max-w-[46%] md:mr-auto md:pl-8">
              <div className="absolute left-0 md:left-auto md:right-[calc(50%_-_0.75rem)] top-8">
                <div className=" md:hidden h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-white shadow-lg" />
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white mb-4">
                  November 10 - Still a staff
                </div>
                <p className="text-xl font-semibold mb-1">Frontend Web Developer</p>
                <span className="text-blue-600 font-medium">Sunmence</span>
                <div className="mt-5 flex flex-wrap gap-3">
                  {['React', 'Tailwind', 'Rest APIs', 'Git'].map((tag) => (
                    <span key={tag} className="rounded-full border border-blue-500 bg-white px-3 py-1 text-[13px] font-medium text-blue-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative md:max-w-[46%] md:ml-auto md:pr-8">
              <div className="absolute left-0 md:left-auto md:right-[calc(50%_-_0.75rem)] top-8">
                <div className=" md:hidden h-6 w-6 rounded-full bg-gradient-to-r from-green-600 to-teal-600 border-4 border-white shadow-lg" />
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white mb-4">
                  Jan 1st - Feb 10th
                </div>
                <p className="text-xl font-semibold mb-1">Frontend Web Developer</p>
                <span className="text-blue-600 font-medium">Affirment</span>
                <div className="mt-5 flex flex-wrap gap-3">
                  {['React', 'Tailwind', 'Rest APIs', 'Git'].map((tag) => (
                    <span key={tag} className="rounded-full border border-blue-500 bg-white px-3 py-1 text-[13px] font-medium text-blue-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
