function SkillList({src, skill}) {
  return (
    <div>
      <span>
        <img src={src} alt="Check Mark Icon" />
        <p>{skill}</p>
      </span>
    </div>
  );
}

export default SkillList;
