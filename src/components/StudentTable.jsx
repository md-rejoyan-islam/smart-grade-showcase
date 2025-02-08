import { Fragment } from "react";
import image from "../assets/avatar.png";
import classesData from "../data/classes.json";

function CalculateScore(mark) {
  if (mark >= 80 && mark <= 100) {
    return "A+";
  } else if (mark >= 70) {
    return "A";
  } else if (mark >= 60) {
    return "A-";
  } else if (mark >= 50) {
    return "B";
  } else if (mark >= 40) {
    return "C";
  } else if (mark >= 33) {
    return "D";
  } else if (mark >= 0 && mark < 33) {
    return "F";
  } else {
    return "Invalid Mark";
  }
}

export default function StudentTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
          <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
        </tr>
      </thead>
      <tbody>
        {/* class  */}
        {classesData.classes.map((classData) => {
          return (
            <Fragment key={classData.id}>
              <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">
                  {classData.name}
                </td>
              </tr>
              {classData.students.map((student) => {
                return (
                  <tr className="border-b border-[#7ECEB529]" key={student.id}>
                    <td className="p-5 text-sm md:text-xl">{student.id}</td>
                    <td className="p-5 text-sm md:text-xl">
                      <div className="flex space-x-3 items-center">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={student.image.src || image}
                          width="32"
                          height="32"
                          alt={student.image.alt || "Student Image"}
                        />
                        <span className="whitespace-nowrap">
                          {student.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {CalculateScore(student.marks)}
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {student.marks}%
                    </td>
                  </tr>
                );
              })}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
