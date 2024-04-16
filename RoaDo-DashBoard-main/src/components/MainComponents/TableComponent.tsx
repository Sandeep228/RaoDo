import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ZepplinLogo from "../../assets/brand/Zepplin.svg";
import FigmaLogo from "../../assets/brand/Figma.svg";
import MetaLogo from "../../assets/brand/Meta.svg";
import AngularLogo from "../../assets/brand/Angular.svg";
import VueLogo from "../../assets/brand/Vue.svg";
import threeDots from "../../assets/icons/three-dots.svg";

function createData(
  source: string,
  sourceImage: string,
  amount: number,
  status: string,
  userID: string | number,
  joined: string,
  group: string
): RowData {
  return { source, sourceImage, amount, status, userID, joined, group };
}

const rows: RowData[] = [
  createData(
    "Zepplin",
    ZepplinLogo,
    686.0,
    "Active",
    "114423",
    "October",
    "Design"
  ),
  createData("Figma", FigmaLogo, 864.0, "Pending", "76223", "June", "Finance"),
  createData("Meta", MetaLogo, 176.0, "Cancelled", "89453", "March", "Coding"),
  createData(
    "Angular",
    AngularLogo,
    49.0,
    "Active",
    "11467",
    "February",
    "Marketing"
  ),
  createData("Vue", VueLogo, 999.0, "Active", "67385", "October", "Finance"),
];
interface RowData {
  source: string;
  sourceImage: string;
  amount: number;
  status: string;
  userID: number | string;
  joined: string;
  group: string;
}

const TableComponent = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 15;

  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handleChangePage = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="min-w-[90%] max-w-[90%] mb-10 bg-white rounded-xl shadow-md overflow-x-hidden">
      <div className="p-4 border-b-2 flex justify-between mr-4">
        <p className="font-semibold">Installed Apps</p>
        <img src={threeDots} alt="" />
      </div>
      <TableContainer>
        <Table>
          <TableHead className="bg-[#f9fafb]">
            <TableRow className="text-[#5f6980]">
              <TableCell>Source</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Joined</TableCell>
              <TableCell>Group</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex gap-3 items-center">
                      <img src={row.sourceImage} alt="" />
                      <p className="font-bold tracking-wide">{row.source}</p>
                    </div>
                  </TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <div
                      className={`px-3 py-1 font-semibold rounded-full text-center w-max ${
                        row.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : row.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {row.status}
                    </div>
                  </TableCell>
                  <TableCell>{row.userID}</TableCell>
                  <TableCell>{row.joined}</TableCell>
                  <TableCell>{row.group}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex items-center justify-center gap-3 text-[#282828] mt-6">
        <ArrowBackRoundedIcon
          onClick={() => handleChangePage(page - 1)}
          style={{ cursor: "pointer" }}
        />
        <h1 className="text-[18px] leading-[30px] font-normal">1/15</h1>
        <ArrowForwardRoundedIcon
          onClick={() => handleChangePage(page + 1)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default TableComponent;
