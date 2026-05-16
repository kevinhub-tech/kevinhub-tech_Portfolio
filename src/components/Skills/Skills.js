import React from "react";
import "./Skills.css";
import data from "../../schemas/data";

const skills = data("skills") ?? [];

/** Row groups: 6→2, 8→2, 9→3, 10→2, 12→3; otherwise ~4 items per row. */
function getSkillsRowGroupCount(total) {
  if (total <= 0) return 1;
  if (total === 10) return 2;
  return Math.ceil(total / 4);
}

function chunkSkillsIntoRows(items, rowCount) {
  const n = items.length;
  if (rowCount <= 0 || n === 0) return [items];
  const perRow = Math.ceil(n / rowCount);
  const rows = [];
  for (let i = 0; i < n; i += perRow) {
    rows.push(items.slice(i, i + perRow));
  }
  return rows;
}

function Skills() {
  const rowCount = getSkillsRowGroupCount(skills.length);
  const rows = chunkSkillsIntoRows(skills, rowCount);

  return (
    <div>
      <section className="section container">
        <h2 className="skills__heading">Skills</h2>
        <hr className="skills__divider" />
        <div className="skills__part">
          {rows.map((rowSkills, rowIndex) => {
            const indexOffset = rows
              .slice(0, rowIndex)
              .reduce((sum, row) => sum + row.length, 0);
            return (
              <div className="skills__row" key={`skills-row-${rowIndex}`}>
                {rowSkills.map((skill, i) => (
                  <div
                    className="skill__wrapper"
                    key={skill.label}
                    data-index={indexOffset + i}
                  >
                    <img src={skill.image} alt={skill.label} />
                    <h3 className="skill__label">{skill.label}</h3>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Skills;
