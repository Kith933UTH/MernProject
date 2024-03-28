import React from 'react';
import { GoGoal } from "react-icons/go";
import {
  Typography,
  ListItemPrefix,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
} from "@material-tailwind/react";
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
const AboutPage = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-blue-gray-800 to-black-500 py-6 max-w-[1200px]'>
        <Typography className='pt-4 flex align-center justify-center' variant="h2">
          ABOUT TECHSHOP
        </Typography>
        <Typography className='py-4 text-xl px-28 flex align-center justify-center'>
          TECHSHOP is passionate about technology and driven by innovation. We dream, we dare and we strive to create an effortless and joyful digital life for everyone. We're always in search of incredible ideas and experiences, and we aspire to deliver the incredible in everything we do.
        </Typography>
      </div>
      
      <div className='max-w-[1200px] flex flex-col'>
        <Typography className='pt-4 flex justify-center' variant="h2">
          OUR GOALS
        </Typography>
        <div className='flex flex-col items-center justify-center py-4 px-2 max-w-[1200px] tablet:flex-row'>
          <Typography className='items-center text-xl bg-gradient-to-r mx-4 from-gray-800 to-gray-900 border py-4 my-2 rounded-lg px-10 flex-col'>
            <ListItemPrefix>
              <GoGoal className='size-16'/>
            </ListItemPrefix>
            Increase representation of diverse voices in the design of products and solutions
          </Typography>
          <Typography className='items-center text-xl bg-gradient-to-r mx-4 from-gray-800 to-gray-900 border py-4 my-2 rounded-lg px-10 flex-col'>
            <ListItemPrefix>
              <GoGoal className='size-16' />
            </ListItemPrefix>
            Use our scale and global presence to raise awareness and champion inclusivity      </Typography>
          <Typography className='items-center text-xl bg-gradient-to-r mx-4 from-gray-800 to-gray-900 border py-4 my-2 rounded-lg px-10 flex-col'>
            <ListItemPrefix>
              <GoGoal className='size-16' />
            </ListItemPrefix>
            Drive ambitious goals and targets for the business around Diversity and Inclusion in all its forms      </Typography>
        </div>
      </div>

      <Typography className='pt-4 flex items-center justify-center m-4' variant="h2">
        OUR TEAM
      </Typography>
      <div className='flex flex-col items-center max-w-[1200px] tablet:flex-row'>
        <Card className="w-96 m-4 bg-main">
          <CardHeader floated={false} className="h-50">
            <img src={img3} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="mb-2 text-text">
              Nguyễn Huỳnh Phước
            </Typography>
            <Typography className="font-medium text-text" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-96 m-4 bg-main">
          <CardHeader floated={false} className="h-50">
            <img src={img1} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="mb-2 text-text">
              Nguyễn Hồng<br></br>Vũ
            </Typography>
            <Typography className="font-medium text-text" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-96 m-4 bg-main">
          <CardHeader floated={false} className="h-50">
            <img src={img2} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="mb-2 text-text">
              Nguyễn Trung Tuấn Kiệt
            </Typography>
            <Typography className="font-medium text-text" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-96 m-4 bg-main">
          <CardHeader floated={false} className="h-50">
            <img src={img4} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="mb-2 text-text">
              Nguyễn Thị Phương Trinh
            </Typography>
            <Typography className="font-medium text-text" textGradient>
              Staff
            </Typography>
          </CardBody>
        </Card>
      </div>

    </>
  );
};

export default AboutPage;
