async function getCompetitors() {
  const res = await fetch("http://localhost:4000/competitors");

  return res.json();
}

export default async function CompetitorList() {
  const competitors = await getCompetitors();

  return (
    <>
      {competitors.map((competitor) => (
        <div key={competitor.id}>
          <div>{competitor.name}</div>
          <div>{competitor.school}</div>
          <div>{competitor.experience}</div>
          <div>{competitor.gender}</div>
        </div>
      ))}
    </>
  );
}
