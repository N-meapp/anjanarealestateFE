import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";

export function TableBlog({ properties,controlEdit,controlDelete}) {
  const [headArray, setHeadArray] = useState(Object.keys(properties[0]));


  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <div className="scroll-container rounded-2xl">
    <Card className="h-full w-fit rounded-2xl">
      <table className="table-auto text-left w-full rounded-2xl bg-white">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Title
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Description
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                category
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Date
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property, index) => {
            const isLast = index === properties.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {property.title}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                     {truncateText(property.description, 300)}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {property.category}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {property.date}
                  </Typography>
                </td>
                <td className="p-4 flex gap-5 justify-end">
                
                {/* <Typography onClick={()=>{
                  controlEdit(property._id)
                }} as="a" href="#" variant="small" color="blue-gray" className="font-medium p-3 w-12 h-12 content-center text-center bg-[#00000015] rounded-full">
                <FontAwesomeIcon icon={faPenToSquare} />
              </Typography> */}
              <Typography onClick={()=>{
                controlDelete(property._id)
              }} as="a" href="#" variant="small" color="blue-gray" className="font-medium p-3 w-12 h-12 content-center text-center bg-[#00000015] rounded-full">
              <FontAwesomeIcon icon={faTrash} />
              </Typography>
              </td>
                
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    </div>
  );
}
