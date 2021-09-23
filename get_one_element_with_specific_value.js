const compliance = [{
    "id": "cisbenchmark",
    "typeId": "global",
    "groupId": null,
    "index": 0,
    "displayName": "CIS Benchmark"
  },
  {
    "id": "csastarattestation",
    "typeId": "global",
    "groupId": null,
    "index": 1,
    "displayName": "CSA STAR Attestation"
  }
]

var complianceInitial = compliance.reduce(
  (acc, curr) => ((acc[curr.id] = false), acc),
  {}
);

console.log(complianceInitial)

// console result 
// {
//     cisbenchmark:false,
//     csastarattestation:false
// }