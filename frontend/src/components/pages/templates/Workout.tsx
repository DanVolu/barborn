import Nav from "../../navbar/Nav";

function Workout() {
  return (
    <main className="flex">
      <Nav></Nav>
      <div className="h-fit flex flex-col pt-24 justify-center lg:items-center w-full px-4">
        <div className="flex flex-col gap-8 justify-between lg:w-6/12 h-full px-4">
          <div className="border-[#444444] p-6 rounded-lg mb-16 bg-gradient-to-br from-[#111111] to-[#111111] shadow-lg shadow-black/40 flex flex-col">
            <h3 className="text-[#e0e0e0] text-3xl md:text-4xl font-semibold mb-4">
              Bare-bones template
            </h3>

            <p className="text-[#e0e0e0] text-lg leading-relaxed">
              This template represents the bare minimum needed in a workout,
              compound exercises that cover all the influential body parts. You
              have full control over how you want to approach your training.
              You're free to add additional compounds or isolations. Think of
              this as a foundation, what you build on top is entirely up to you
              and your goals.
            </p>

            <ul className="text-[#e0e0e0] ml-4 mt-8 md:mt-4 list-disc md:p-2">
              <li>
                Don't limit your rest, rest between sets until you're ready.
              </li>
              <li>Start with the exercise that you find the hardest.</li>
              <li>Warmup with dynamic movements</li>
              <li>More doesn't always mean better</li>
              <li>Sleep well, eat well</li>
            </ul>

            <h3 className="text-[#e0e0e0] text-lg font-semibold leading-relaxed mt-16">
              Full Body (3x weekly / highest amount of frequency per group)
            </h3>

            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Day 1</p>
              <ul className="ml-4 list-disc px-4">
                <li>Horizontal push (push-ups, close grip bench)</li>
                <li>Vertical Pull (pull-ups, lat pulldowns)</li>
                <li>Squat Movement (barbell squats, bulgarian split squats)</li>
                <li>Hip Hinge (romanian deadlifts, hip thrusts)</li>
              </ul>
            </div>
            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Day 2</p>
              <ul className="ml-4 list-disc px-4">
                <li>Vertical Push (incline bench, decline push-ups)</li>
                <li>Horizontal Pull (rows, inverted rows)</li>
                <li>Squat Movement (barbell squats, bulgarian split squats)</li>
                <li>Hip Hinge (romanian deadlifts, hip thrusts)</li>
              </ul>
            </div>
            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Day 3</p>
              <ul className="ml-4 list-disc px-4">
                <li>Overhead Push (shoulder press, pike pushups)</li>
                <li>Vertical Pull (pull-ups, lat pulldowns)</li>
                <li>Squat Movement (barbell squats, bulgarian split squats)</li>
                <li>Hip Hinge (romanian deadlifts, hip thrusts)</li>
              </ul>
            </div>

            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full mt-6 text-[#e0e0e0] text-base border-separate border-spacing-0 overflow-hidden shadow-md shadow-black/40">
                <thead className="bg-[#1e1e1e]">
                  <tr>
                    {["I", "II", "III", "IV", "V", "VI", "VII"].map(
                      (item, idx) => (
                        <th
                          key={idx}
                          className="px-4 py-3 font-semibold border border-[#333333]"
                        >
                          {item}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="bg-[#111111]">
                  <tr className="transition duration-200">
                    {[1, "REST", 2, "REST", 3, "REST", "REST"].map(
                      (item, idx) => (
                        <td
                          key={idx}
                          className="px-4 py-3 border-[#2c2c2c] text-center"
                        >
                          {item}
                        </td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[#e0e0e0] text-lg leading-relaxed mt-16 font-semibold">
              Upper Lower Split (4x weekly / less risk of overtraining,
              community favorite)
            </h3>

            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Upper 1 (Pull focused)</p>
              <ul className="text-[#e0e0e0] ml-4 list-disc px-4">
                <li>Overhead push (shoulder press, pike pushups)</li>
                <li>Vertical pull (pull-ups, lat pulldowns)</li>
                <li>Horizontal pull (rows, inverted rows)</li>
              </ul>
            </div>
            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Lower 2</p>
              <ul className="text-[#e0e0e0] ml-4 list-disc px-4">
                <li>Squat movement (barbell squats, bulgarian split squats)</li>
                <li>Hip hinge (romanian deadlifts, hip thrusts)</li>
                <li>Hip flexion (pike pulses, leg raises)</li>
              </ul>
            </div>
            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Upper 3 (Push focused)</p>
              <ul className="text-[#e0e0e0] ml-4 list-disc px-4">
                <li>Vertical push (incline bench, decline push-ups)</li>
                <li>Horizontal pull (rows, inverted rows)</li>
                <li>Horizontal push (push-ups, close grip bench)</li>
              </ul>
            </div>
            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Lower 4</p>
              <ul className="text-[#e0e0e0] ml-4 list-disc px-4">
                <li>Squat movement (barbell squats, bulgarian split squats)</li>
                <li>Hip hinge (romanian deadlifts, hip thrusts)</li>
                <li>Trunk rotation (windshield wipers)</li>
              </ul>
            </div>

            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full mt-6 text-[#e0e0e0] text-base border-separate border-spacing-0 overflow-hidden shadow-md shadow-black/40">
                <thead className="bg-[#1e1e1e]">
                  <tr>
                    {["I", "II", "III", "IV", "V", "VI", "VII"].map(
                      (item, idx) => (
                        <th
                          key={idx}
                          className="px-4 py-3 font-semibold border border-[#333333]"
                        >
                          {item}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="bg-[#111111]">
                  <tr className="transition duration-200">
                    {[1, 2, "REST", 3, 4, "REST", "REST"].map((item, idx) => (
                      <td
                        key={idx}
                        className="px-4 py-3 border-[#2c2c2c] text-center"
                      >
                        {item}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[#e0e0e0] text-lg leading-relaxed mt-16 font-semibold">
              Push Pull Legs (6x weekly / more freedom over set x rep count)
            </h3>

            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Push 1</p>
              <ul className="text-[#e0e0e0] ml-4 list-disc px-4">
                <li>Overhead push (shoulder press, pike pushups)</li>
                <li>Vertical push (incline bench, decline push-ups)</li>
                <li>Horizontal push (push-ups, close grip bench)</li>
              </ul>
            </div>
            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Pull 2</p>
              <ul className="text-[#e0e0e0] ml-4 list-disc px-4">
                <li>Vertical pull (pull-ups, lat pulldowns)</li>
                <li>Horizontal pull (rows, inverted rows)</li>
              </ul>
            </div>
            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">Legs 3</p>
              <ul className="text-[#e0e0e0] ml-4 list-disc px-4">
                <li>Squat movement (barbell squats, bulgarian split squats)</li>
                <li>Hip hinge (romanian deadlifts, hip thrusts)</li>
              </ul>
            </div>

            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full mt-6 text-[#e0e0e0] text-base border-separate border-spacing-0 overflow-hidden shadow-md shadow-black/40">
                <thead className="bg-[#1e1e1e]">
                  <tr>
                    {["I", "II", "III", "IV", "V", "VI", "VII"].map(
                      (item, idx) => (
                        <th
                          key={idx}
                          className="px-4 py-3 font-semibold border border-[#333333]"
                        >
                          {item}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="bg-[#111111]">
                  <tr className="transition duration-200">
                    {[1, 2, 3, 1, 2, 3, "REST"].map((item, idx) => (
                      <td
                        key={idx}
                        className="px-4 py-3 border-[#2c2c2c] text-center"
                      >
                        {item}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Workout;
