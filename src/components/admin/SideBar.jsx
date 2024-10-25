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
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
   
  export default function AdminSidebar({controllTabs}) {

    const dispatch = useDispatch()


    const showLoading = function() {
      let timerInterval;
      Swal.fire({
        title: "logging out",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          Swal.fire({
            title: "completed!",
            text: "successfully logged out",
            icon: "success"
          }).then(()=>{
            dispatch({ type: "SET_USER", payload: { username: null } });
            navigate('/admin')
          })
        }
      });
    };

    const controlLogout=()=>{
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then((result) => {
        if (result.isConfirmed) {
          showLoading()
         
        }
      });
    }

    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 shadow-xl mt-4 ml-4 shadow-blue-gray-900/5">
        <div className="mb-2 p-4 flex justify-around">
        <div className="w-full webkit-center">
        <img className="w-24 h-24" src="../src/assets/logo.png"></img>
        </div>
        </div>
        <List className="min-w-0">
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
            controlLogout()
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