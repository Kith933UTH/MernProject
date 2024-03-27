import {useState, React} from "react";
import {
  Card,
  Typography,
  List,
  ListItem,

  Accordion,
  AccordionHeader,
  AccordionBody,

} from "@material-tailwind/react";

import {ChevronDownIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
    const [open, setOpen] = useState([
        {
          title: "Price",
          checked:false,
          choose:["High to Low","Low to High"]
        },
        {
          title: "Rating",
          checked:false,
          choose:["Highest","Lowest"]
        },
      
      ]
    );
      const handleOpen = (title) => {
        const listItems=open.map((item)=>item.title===title ? {...item, checked: !item.checked} : item);
        setOpen(listItems);
      };
      
      const renderItems = open.map(
        (item) => (
            <Accordion
              key={item.title}
              open={item.checked}
              icon={
                <ChevronDownIcon
                  open={item.checked}
                  strokeWidth={2.5}
                  className={`text-text mx-auto h-4 w-4 transition-transform ${item.checked === true ? "rotate-180" : ""}`}
                />
              }
            >
                
              <ListItem className="p-0 max-w-[10rem] hover:bg-opacity-10 active:bg-opacity-10" selected={false} >
                <AccordionHeader onClick={() => handleOpen(item.title)} className="border-b-0 p-3 ">
                  <Typography color="blue-gray" className="text-text mr-auto font-normal">
                    {item.title}
                  </Typography>
                </AccordionHeader>  
              </ListItem>

              <AccordionBody className="py-1">
              <div className="flex flex-col">
                {
                  item.choose.map((option)=>{
                    return <label className="text-text p-2"><input className="p-8" type="radio" name={item.title} value={option}/> {option} </label> 
                  })
                }
              </div>
              </AccordionBody>
            </Accordion>
        ),
      );
      return (
        <div className="max-w-[1200px] mx-auto">
        <Card className=" max-w-[12rem] p-2 shadow-xl shadow-blue-gray-900/5 bg-main border-solid border-text border-sm">
          <List>
          {renderItems}
          </List>
        </Card>
        </div>


      );
    }

export default Sidebar