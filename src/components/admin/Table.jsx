import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";

export function Table({ properties,controlEdit,controlDelete}) {
  const [headArray, setHeadArray] = useState(Object.keys(properties[0]));

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
                name
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                rate
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                area
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                photos
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                address
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                features
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                status
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                furnished status
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
                    {property.name}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {property.rate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {property.area}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                 

                    <img className=" w-[50px]" src={property.photos[0]} alt="pics" />
                    {/* {property.photos} */}
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {property.address}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                  {property.features?
                    Object.entries(property.features).map(([key, value]) => (
                      <div className="bg-[#9fbd9f3e] mb-1 rounded-full text-center px-1 py-1">
                      <h1 className="">{value} {key}</h1>
                      </div>
                    )):<h className="text-red-500">no features</h>
                  }
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
                    {property.status}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {property.furnishedStatus}
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
                    {property.category}
                  </Typography>
                </td>
                <td className="p-4 flex gap-5 justify-end">
                
                <Typography onClick={()=>{
                  controlEdit(property._id)
                }} as="a" href="#" variant="small" color="blue-gray" className="font-medium p-3 w-12 h-12 content-center text-center bg-[#00000015] rounded-full">
                <FontAwesomeIcon icon={faPenToSquare} />
              </Typography>
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
