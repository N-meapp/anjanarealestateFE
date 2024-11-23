import { Card, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUsers,faShieldHalved, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
 
export default function CategoryTable({categories,controlDelete}) {
  
  return (
    <Card className="h-full ">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                Category Name
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
          {categories.map((category, index) => (
            <tr key={category.name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-bold">
                  {category.categoryName}
                </Typography>
              </td>
              <td className="p-4 flex gap-5 justify-end">
              <Typography onClick={()=>{
                controlDelete(category.categoryName)
              }} as="a" href="#" variant="small" color="blue-gray" className="font-medium p-3 w-12 h-12 content-center text-center bg-[#00000015] rounded-full">
              <FontAwesomeIcon icon={faTrash} />
              </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}