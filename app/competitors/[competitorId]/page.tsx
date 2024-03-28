export default function CompetitorDet({
  params,
}: {
  params: { competitorId: string };
}) {
  return <div>Details about competitor {params.competitorId}</div>;
}

// const CompetitorDetails = (data) => {
//   if (!data) return;
//   const { competitors } = data;
//   const comp = competitors[0];
//   const name = comp.name;
//   //   document.getElementById("compname").innerHTML = name;
//   return (
//     <>
//       <div>Details about competitor</div>
//     </>
//   );
// };
