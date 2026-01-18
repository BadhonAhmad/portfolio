"use client";

export default function CompetitiveProgrammingSection() {
  const platforms = [
    {
      name: "Codeforces Pupil",
      handle: "BADHON30",
      rating: "Max: 1260",
      solved: "1200+",
      description: "Active competitive programmer with consistent rating",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800",
      url: "https://codeforces.com/profile/BADHON30",
    },
    {
      name: "Multi-Platform Solver",
      handle: "",
      rating: "2000+",
      solved: "",
      description:
        "Problems solved across Codeforces, VJudge, CodeChef, LeetCode",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
      color: "from-purple-600 to-purple-800",
    },
    {
      name: "VJudge Enthusiast",
      handle: "2020331030Badhon",
      rating: "420+",
      solved: "",
      description: "Diverse problem-solving experience",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      color: "from-green-600 to-green-800",
      url: "https://vjudge.net/user/2020331030Badhon",
    },
    {
      name: "CodeChef Competitor",
      handle: "badhon30",
      rating: "Max: 1505",
      solved: "",
      description: "2-Star rating with consistent problem solving",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
      color: "from-orange-600 to-orange-800",
      url: "https://www.codechef.com/users/badhon30",
    },
    {
      name: "LeetCode Solver",
      handle: "BADHON30",
      rating: "215+",
      solved: "",
      description: "Consistent problem solving on LeetCode platform",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.776-1.64-7.872.637l-1.418 1.537-3.619 3.882a4.83 4.83 0 0 0-1.162 2.797 4.945 4.945 0 0 0 .206 1.943c.21.57.49 1.104.84 1.576.87 1.168 2.068 1.946 3.405 2.211a6.63 6.63 0 0 0 1.876.119c1.433-.067 2.789-.631 3.846-1.599l3.854-4.126 5.406-5.788A1.385 1.385 0 0 0 20.562.436L13.483 0z" />
        </svg>
      ),
      color: "from-yellow-600 to-yellow-800",
      url: "https://leetcode.com/BADHON30",
    },
    {
      name: "Training Camp",
      handle: "",
      rating: "3+ Years",
      solved: "",
      description: "SUST Programming Training Camp participant since 2022",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      color: "from-pink-600 to-pink-800",
    },
  ];

  return (
    <section id="competitive-programming" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
              Competitive Programming
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Problem-solving expertise across multiple coding platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${platform.color} rounded-2xl p-6 hover:scale-105 transition duration-300 ${platform.url ? "cursor-pointer" : ""}`}
              onClick={() =>
                platform.url && window.open(platform.url, "_blank")
              }
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  {platform.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">
                    {platform.name}
                  </h3>
                  {platform.handle && (
                    <p className="text-white/80 text-sm">{platform.handle}</p>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <div className="text-3xl font-bold text-white mb-1">
                  {platform.solved || platform.rating}
                </div>
                <p className="text-white/90 text-sm">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-center border border-blue-500">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              className="w-8 h-8 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <h3 className="text-2xl font-bold text-white">
              Problem Solving Skills
            </h3>
          </div>
          <div className="space-y-2 text-gray-200">
            <p>
              <span className="font-semibold text-white">Codeforces:</span>{" "}
              BADHON30 — Pupil (Max: 1260) — Solved 1000+ Problems
            </p>
            <p>
              <span className="font-semibold text-white">CodeChef:</span>{" "}
              badhon30 — 2* (Max: 1505)
            </p>
            <p>
              <span className="font-semibold text-white">Leetcode:</span>{" "}
              BADHON30 — Solved 215+ Problems
            </p>
            <p>
              <span className="font-semibold text-white">Vjudge:</span>{" "}
              2020331030Badhon — Solved 420+ Problems
            </p>
            <p className="mt-4 text-lg font-semibold text-yellow-300">
              ✓ Solved 2000+ algorithm problems across CF / CC / AtCoder /
              Vjudge / LeetCode.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
