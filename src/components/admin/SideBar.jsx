import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    InboxIcon,
    PowerIcon,
    VideoCameraIcon
  } from "@heroicons/react/24/solid";
   
  export default function AdminSidebar({controllTabs}) {

    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 shadow-xl mt-4 ml-4 shadow-blue-gray-900/5">
        <div className="mb-2 p-4 flex justify-around">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
          <h1>clopase</h1>
        </div>
        <List>
          <ListItem onClick={()=>{
            controllTabs('dashboard')
          }}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem onClick={()=>{
            controllTabs('property')
          }}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Property
          </ListItem>
          <ListItem onClick={()=>{
            controllTabs('category')
          }}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Category
          </ListItem>
          <ListItem onClick={()=>{
            controllTabs('youtube')
          }}>
            <ListItemPrefix>
            
              <VideoCameraIcon className="h-5 w-5" />
            </ListItemPrefix>
            Videos
          </ListItem>
          <ListItem onClick={()=>{
            controllTabs('logout')
          }}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    );
  }