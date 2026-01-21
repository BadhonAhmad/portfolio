"use client";

export default function CompetitiveProgrammingSection() {
  const platforms = [
    {
      name: "Codeforces",
      handle: "BADHON30",
      rating: "Max Pupil",
      solved: "1100+",
      description: "Active competitive programmer with consistent rating",
      url: "https://codeforces.com/profile/BADHON30",
    },
    {
      name: "Multi-Platform",
      handle: "",
      rating: "",
      solved: "2000+",
      description: "Total problems solved across all platforms",
      url: "",
    },
    {
      name: "VJudge",
      handle: "2020331030Badhon",
      rating: "",
      solved: "420+",
      description: "Diverse problem-solving experience",
      url: "https://vjudge.net/user/2020331030Badhon",
    },
    {
      name: "CodeChef",
      handle: "badhon30",
      rating: "2★ (Max: 1505)",
      solved: "",
      description: "Consistent problem solving record",
      url: "https://www.codechef.com/users/badhon30",
    },
    {
      name: "LeetCode",
      handle: "BADHON30",
      rating: "",
      solved: "215+",
      description: "DSA and interview preparation",
      url: "https://leetcode.com/BADHON30",
    },
    {
      name: "Training Camp",
      handle: "",
      rating: "3+ Years",
      solved: "",
      description: "SUST Programming Training Camp since 2022",
      url: "",
    },
  ];

  return (
    <section id="competitive-programming" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Competitive Programming
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Problem-solving expertise across multiple coding platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 ${platform.url ? "cursor-pointer" : ""}`}
              onClick={() =>
                platform.url && window.open(platform.url, "_blank")
              }
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">
                  {platform.name}
                </h3>
                {platform.url && (
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </div>

              {platform.handle && (
                <p className="text-gray-500 text-sm mb-3">@{platform.handle}</p>
              )}

              {platform.rating && (
                <div className="mb-2">
                  <span className="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30">
                    {platform.rating}
                  </span>
                </div>
              )}

              <div className="text-3xl font-bold text-blue-500 mb-2">
                {platform.solved ||
                  (platform.rating && !platform.solved ? platform.rating : "")}
              </div>
              <p className="text-gray-400 text-sm">{platform.description}</p>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Problem Solving Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-4 bg-gray-900 rounded-lg">
              <div className="text-gray-400 mb-1">Codeforces</div>
              <div className="text-white font-medium">
                BADHON30 • Pupil (1260)
              </div>
            </div>
            <div className="text-center p-4 bg-gray-900 rounded-lg">
              <div className="text-gray-400 mb-1">CodeChef</div>
              <div className="text-white font-medium">badhon30 • 2★ (1505)</div>
            </div>
            <div className="text-center p-4 bg-gray-900 rounded-lg">
              <div className="text-gray-400 mb-1">LeetCode</div>
              <div className="text-white font-medium">
                BADHON30 • 215+ Solved
              </div>
            </div>
            <div className="text-center p-4 bg-gray-900 rounded-lg">
              <div className="text-gray-400 mb-1">VJudge</div>
              <div className="text-white font-medium">420+ Solved</div>
            </div>
          </div>
          <p className="mt-6 text-center text-gray-400">
            <span className="text-blue-500 font-semibold">2000+</span> algorithm
            problems solved across CF / CC / AtCoder / VJudge / LeetCode
          </p>
        </div>
      </div>
    </section>
  );
}
