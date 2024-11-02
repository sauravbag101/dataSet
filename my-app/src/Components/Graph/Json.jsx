import React from 'react'

const Json = () => {
    const data = [
        {
          "model": "Row Labels",
          "totalVehical": "Battery Electric Vehicle (BEV)",
          "totalBEV": "Plug-in Hybrid Electric Vehicle (PHEV)",
          "totalPHEV": "Grand Total"
        },
        {
          "model": "500",
          "totalVehical": "826",
          "totalBEV": null,
          "totalPHEV": "826"
        },
        {
          "model": "330E",
          "totalVehical": null,
          "totalBEV": "261",
          "totalPHEV": "261"
        },
        {
          "model": "530E",
          "totalVehical": null,
          "totalBEV": "163",
          "totalPHEV": "163"
        },
        {
          "model": "530E XDRIVE",
          "totalVehical": null,
          "totalBEV": "142",
          "totalPHEV": "142"
        },
        {
          "model": "740E XDRIVE",
          "totalVehical": null,
          "totalBEV": "28",
          "totalPHEV": "28"
        },
        {
          "model": "745E",
          "totalVehical": null,
          "totalBEV": "7",
          "totalPHEV": "7"
        },
        {
          "model": "918 SPYDER",
          "totalVehical": null,
          "totalBEV": "1",
          "totalPHEV": "1"
        },
        {
          "model": "A3",
          "totalVehical": null,
          "totalBEV": "557",
          "totalPHEV": "557"
        },
        {
          "model": "A7",
          "totalVehical": null,
          "totalBEV": "11",
          "totalPHEV": "11"
        },
        {
          "model": "A8 E",
          "totalVehical": null,
          "totalBEV": "2",
          "totalPHEV": "2"
        },
        {
          "model": "ACCORD",
          "totalVehical": null,
          "totalBEV": "8",
          "totalPHEV": "8"
        },
        {
          "model": "AVIATOR",
          "totalVehical": null,
          "totalBEV": "76",
          "totalPHEV": "76"
        },
        {
          "model": "B-CLASS",
          "totalVehical": "98",
          "totalBEV": null,
          "totalPHEV": "98"
        },
        {
          "model": "BENTAYGA",
          "totalVehical": null,
          "totalBEV": "2",
          "totalPHEV": "2"
        },
        {
          "model": "BOLT EV",
          "totalVehical": "4246",
          "totalBEV": null,
          "totalPHEV": "4246"
        },
        {
          "model": "C40",
          "totalVehical": "30",
          "totalBEV": null,
          "totalPHEV": "30"
        },
        {
          "model": "CARAVAN",
          "totalVehical": "1",
          "totalBEV": null,
          "totalPHEV": "1"
        },
        {
          "model": "CAYENNE",
          "totalVehical": null,
          "totalBEV": "252",
          "totalPHEV": "252"
        },
        {
          "model": "C-CLASS",
          "totalVehical": null,
          "totalBEV": "21",
          "totalPHEV": "21"
        },
        {
          "model": "CITY",
          "totalVehical": "3",
          "totalBEV": null,
          "totalPHEV": "3"
        },
        {
          "model": "CLARITY",
          "totalVehical": "1",
          "totalBEV": "767",
          "totalPHEV": "768"
        },
        {
          "model": "C-MAX",
          "totalVehical": null,
          "totalBEV": "1568",
          "totalPHEV": "1568"
        },
        {
          "model": "CORSAIR",
          "totalVehical": null,
          "totalBEV": "21",
          "totalPHEV": "21"
        },
        {
          "model": "COUNTRYMAN",
          "totalVehical": null,
          "totalBEV": "172",
          "totalPHEV": "172"
        },
        {
          "model": "CROSSTREK HYBRID AWD",
          "totalVehical": null,
          "totalBEV": "51",
          "totalPHEV": "51"
        },
        {
          "model": "CT6",
          "totalVehical": null,
          "totalBEV": "16",
          "totalPHEV": "16"
        },
        {
          "model": "EDV",
          "totalVehical": "1",
          "totalBEV": null,
          "totalPHEV": "1"
        },
        {
          "model": "E-GOLF",
          "totalVehical": "1059",
          "totalBEV": null,
          "totalPHEV": "1059"
        },
        {
          "model": "ELR",
          "totalVehical": null,
          "totalBEV": "77",
          "totalPHEV": "77"
        },
        {
          "model": "EQ FORTWO",
          "totalVehical": "49",
          "totalBEV": null,
          "totalPHEV": "49"
        },
        {
          "model": "EQS-CLASS",
          "totalVehical": "27",
          "totalBEV": null,
          "totalPHEV": "27"
        },
        {
          "model": "ESCAPE",
          "totalVehical": null,
          "totalBEV": "128",
          "totalPHEV": "128"
        },
        {
          "model": "E-TRON",
          "totalVehical": "659",
          "totalBEV": null,
          "totalPHEV": "659"
        },
        {
          "model": "E-TRON GT",
          "totalVehical": "42",
          "totalBEV": null,
          "totalPHEV": "42"
        },
        {
          "model": "E-TRON SPORTBACK",
          "totalVehical": "114",
          "totalBEV": null,
          "totalPHEV": "114"
        },
        {
          "model": "EV6",
          "totalVehical": "280",
          "totalBEV": null,
          "totalPHEV": "280"
        },
        {
          "model": "F-150",
          "totalVehical": "984",
          "totalBEV": null,
          "totalPHEV": "984"
        },
        {
          "model": "FOCUS",
          "totalVehical": "276",
          "totalBEV": null,
          "totalPHEV": "276"
        },
        {
          "model": "FORTWO",
          "totalVehical": "71",
          "totalBEV": null,
          "totalPHEV": "71"
        },
        {
          "model": "FORTWO ELECTRIC DRIVE",
          "totalVehical": "151",
          "totalBEV": null,
          "totalPHEV": "151"
        },
        {
          "model": "FUSION",
          "totalVehical": null,
          "totalBEV": "1916",
          "totalPHEV": "1916"
        },
        {
          "model": "GLC-CLASS",
          "totalVehical": null,
          "totalBEV": "167",
          "totalPHEV": "167"
        },
        {
          "model": "GLE-CLASS",
          "totalVehical": null,
          "totalBEV": "39",
          "totalPHEV": "39"
        },
        {
          "model": "HARDTOP",
          "totalVehical": "296",
          "totalBEV": null,
          "totalPHEV": "296"
        },
        {
          "model": "I3",
          "totalVehical": "594",
          "totalBEV": "1300",
          "totalPHEV": "1894"
        },
        {
          "model": "I4",
          "totalVehical": "3",
          "totalBEV": null,
          "totalPHEV": "3"
        },
        {
          "model": "I8",
          "totalVehical": null,
          "totalBEV": "85",
          "totalPHEV": "85"
        },
        {
          "model": "ID.4",
          "totalVehical": "862",
          "totalBEV": null,
          "totalPHEV": "862"
        },
        {
          "model": "I-MIEV",
          "totalVehical": "68",
          "totalBEV": null,
          "totalPHEV": "68"
        },
        {
          "model": "IONIQ",
          "totalVehical": "61",
          "totalBEV": "123",
          "totalPHEV": "184"
        },
        {
          "model": "IONIQ 5",
          "totalVehical": "176",
          "totalBEV": null,
          "totalPHEV": "176"
        },
        {
          "model": "I-PACE",
          "totalVehical": "199",
          "totalBEV": null,
          "totalPHEV": "199"
        },
        {
          "model": "IX",
          "totalVehical": "10",
          "totalBEV": null,
          "totalPHEV": "10"
        },
        {
          "model": "KARMA",
          "totalVehical": null,
          "totalBEV": "13",
          "totalPHEV": "13"
        },
        {
          "model": "KONA",
          "totalVehical": "199",
          "totalBEV": null,
          "totalPHEV": "199"
        },
        {
          "model": "KONA ELECTRIC",
          "totalVehical": "225",
          "totalBEV": null,
          "totalPHEV": "225"
        },
        {
          "model": "LEAF",
          "totalVehical": "12664",
          "totalBEV": null,
          "totalPHEV": "12664"
        },
        {
          "model": "LIFE",
          "totalVehical": "3",
          "totalBEV": null,
          "totalPHEV": "3"
        },
        {
          "model": "LUCID AIR",
          "totalVehical": "10",
          "totalBEV": null,
          "totalPHEV": "10"
        },
        {
          "model": "MACH-E",
          "totalVehical": "887",
          "totalBEV": null,
          "totalPHEV": "887"
        },
        {
          "model": "MODEL 3",
          "totalVehical": "19914",
          "totalBEV": null,
          "totalPHEV": "19914"
        },
        {
          "model": "MODEL S",
          "totalVehical": "6978",
          "totalBEV": null,
          "totalPHEV": "6978"
        },
        {
          "model": "MODEL X",
          "totalVehical": "3557",
          "totalBEV": null,
          "totalPHEV": "3557"
        },
        {
          "model": "MODEL Y",
          "totalVehical": "11792",
          "totalBEV": null,
          "totalPHEV": "11792"
        },
        {
          "model": "NIRO",
          "totalVehical": "2417",
          "totalBEV": "680",
          "totalPHEV": "3097"
        },
        {
          "model": "NIRO ELECTRIC",
          "totalVehical": "167",
          "totalBEV": null,
          "totalPHEV": "167"
        },
        {
          "model": "NIRO PLUG-IN HYBRID",
          "totalVehical": null,
          "totalBEV": "222",
          "totalPHEV": "222"
        },
        {
          "model": "OPTIMA",
          "totalVehical": null,
          "totalBEV": "110",
          "totalPHEV": "110"
        },
        {
          "model": "OPTIMA PLUG-IN HYBRID",
          "totalVehical": null,
          "totalBEV": "14",
          "totalPHEV": "14"
        },
        {
          "model": "OUTLANDER",
          "totalVehical": null,
          "totalBEV": "515",
          "totalPHEV": "515"
        },
        {
          "model": "PACIFICA",
          "totalVehical": null,
          "totalBEV": "1624",
          "totalPHEV": "1624"
        },
        {
          "model": "PANAMERA",
          "totalVehical": null,
          "totalBEV": "109",
          "totalPHEV": "109"
        },
        {
          "model": "PRIUS PLUG-IN",
          "totalVehical": null,
          "totalBEV": "926",
          "totalPHEV": "926"
        },
        {
          "model": "PRIUS PLUG-IN HYBRID",
          "totalVehical": null,
          "totalBEV": "1",
          "totalPHEV": "1"
        },
        {
          "model": "PRIUS PRIME",
          "totalVehical": null,
          "totalBEV": "2224",
          "totalPHEV": "2224"
        },
        {
          "model": "PS2",
          "totalVehical": "311",
          "totalBEV": null,
          "totalPHEV": "311"
        },
        {
          "model": "Q5",
          "totalVehical": null,
          "totalBEV": "51",
          "totalPHEV": "51"
        },
        {
          "model": "Q5 E",
          "totalVehical": null,
          "totalBEV": "471",
          "totalPHEV": "471"
        },
        {
          "model": "R1T",
          "totalVehical": "47",
          "totalBEV": null,
          "totalPHEV": "47"
        },
        {
          "model": "RANGE ROVER",
          "totalVehical": null,
          "totalBEV": "15",
          "totalPHEV": "15"
        },
        {
          "model": "RANGE ROVER SPORT",
          "totalVehical": null,
          "totalBEV": "22",
          "totalPHEV": "22"
        },
        {
          "model": "RANGER",
          "totalVehical": "12",
          "totalBEV": null,
          "totalPHEV": "12"
        },
        {
          "model": "RAV4",
          "totalVehical": "56",
          "totalBEV": null,
          "totalPHEV": "56"
        },
        {
          "model": "RAV4 PRIME",
          "totalVehical": null,
          "totalBEV": "762",
          "totalPHEV": "762"
        },
        {
          "model": "ROADSTER",
          "totalVehical": "58",
          "totalBEV": null,
          "totalPHEV": "58"
        },
        {
          "model": "RS E-TRON GT",
          "totalVehical": "13",
          "totalBEV": null,
          "totalPHEV": "13"
        },
        {
          "model": "S60",
          "totalVehical": null,
          "totalBEV": "64",
          "totalPHEV": "64"
        },
        {
          "model": "S90",
          "totalVehical": null,
          "totalBEV": "21",
          "totalPHEV": "21"
        },
        {
          "model": "SANTA FE",
          "totalVehical": null,
          "totalBEV": "54",
          "totalPHEV": "54"
        },
        {
          "model": "S-CLASS",
          "totalVehical": null,
          "totalBEV": "9",
          "totalPHEV": "9"
        },
        {
          "model": "SONATA",
          "totalVehical": null,
          "totalBEV": "82",
          "totalPHEV": "82"
        },
        {
          "model": "SONATA PLUG-IN HYBRID",
          "totalVehical": null,
          "totalBEV": "514",
          "totalPHEV": "514"
        },
        {
          "model": "SORENTO",
          "totalVehical": null,
          "totalBEV": "216",
          "totalPHEV": "216"
        },
        {
          "model": "SOUL",
          "totalVehical": "449",
          "totalBEV": null,
          "totalPHEV": "449"
        },
        {
          "model": "SOUL EV",
          "totalVehical": "242",
          "totalBEV": null,
          "totalPHEV": "242"
        },
        {
          "model": "SPARK",
          "totalVehical": "250",
          "totalBEV": null,
          "totalPHEV": "250"
        },
        {
          "model": "TAYCAN",
          "totalVehical": "315",
          "totalBEV": null,
          "totalPHEV": "315"
        },
        {
          "model": "TRANSIT",
          "totalVehical": "3",
          "totalBEV": null,
          "totalPHEV": "3"
        },
        {
          "model": "TRANSIT CONNECT ELECTRIC",
          "totalVehical": "7",
          "totalBEV": null,
          "totalPHEV": "7"
        },
        {
          "model": "TUCSON",
          "totalVehical": null,
          "totalBEV": "11",
          "totalPHEV": "11"
        },
        {
          "model": "V60",
          "totalVehical": null,
          "totalBEV": "8",
          "totalPHEV": "8"
        },
        {
          "model": "VOLT",
          "totalVehical": null,
          "totalBEV": "4937",
          "totalPHEV": "4937"
        },
        {
          "model": "WRANGLER",
          "totalVehical": null,
          "totalBEV": "704",
          "totalPHEV": "704"
        },
        {
          "model": "X3",
          "totalVehical": null,
          "totalBEV": "292",
          "totalPHEV": "292"
        },
        {
          "model": "X5",
          "totalVehical": null,
          "totalBEV": "1128",
          "totalPHEV": "1128"
        },
        {
          "model": "XC40",
          "totalVehical": "420",
          "totalBEV": null,
          "totalPHEV": "420"
        },
        {
          "model": "XC60",
          "totalVehical": null,
          "totalBEV": "438",
          "totalPHEV": "438"
        },
        {
          "model": "XC90",
          "totalVehical": null,
          "totalBEV": "579",
          "totalPHEV": "579"
        },
        {
          "model": "XC90 AWD PHEV",
          "totalVehical": null,
          "totalBEV": "1",
          "totalPHEV": "1"
        },
        {
          "model": "Grand Total",
          "totalVehical": "72183",
          "totalBEV": "24778",
          "totalPHEV": "96961"
        }
      ]
      
    
      return (
        <div >
          
          <div className="overflow-x-auto h-[423px] overflow-y-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-blue-200">
                <tr>
                  <th className="py-2 px-4 text-left text-xs font-semibold text-gray-700 border-b border-gray-300">Model</th>
                  <th className="py-2 px-4 text-left text-xs font-semibold text-gray-700 border-b border-gray-300">Total Vehical</th>
                  <th className="py-2 px-4 text-left text-xs font-semibold text-gray-700 border-b border-gray-300">Total BEV</th>
                  <th className="py-2 px-4 text-left text-xs font-semibold text-gray-700 border-b border-gray-300">Total PHEV</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="text-sm text-gray-800">
                    <td className="py-2 px-4 border-b border-gray-300">{item.model}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.totalVehical}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.totalBEV}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.totalPHEV}</td>
                  </tr>
                ))}
                <tr className="font-semibold text-gray-800 bg-blue-100">
                  <td className="py-2 px-4 border-b border-gray-300">Total</td>
                  <td className="py-2 px-4 border-b border-gray-300">96961</td>
                  <td className="py-2 px-4 border-b border-gray-300">72183</td>
                  <td className="py-2 px-4 border-b border-gray-300">24778</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    };

export default Json
