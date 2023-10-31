import React from "react";
import './App.css';
import { List, Space, FloatButton, Col, Divider, Row, Button, Tabs, Card } from "antd";
import { DownloadOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import profilePic from "./assets/Dahlin-Carneiro.png";
import ribbon from "./assets/ribbon.svg";
import cv from "./assets/Dahlin-CV-2023.pdf"
const data = [
  {
    title: "Property Scout",
    href: "https://propertyscout.io/",
    description:
      "PropertyScout.io provides instant access to over 140 Million properties in U.S."
  },
  {
    title: "OrgaDynamics",
    description: "Cargo management software."
  },
  {
    title: "Provision",
    description: "Hotel budgeting software."
  },
  {
    title: "An Advanced Review of Speech–Language Pathology",
    href: "https://web.advancedreviewpractice.com/",
    description: "Exam preparation app."
  },
  {
    title:
      "Fundamentals of Anatomy and Physiology of Speech, Language, and Hearing",
    description: "Exam preparation app."
  },
  {
    title: "Care jobs",
    href: "http://carejobs.io/",
    description: "UK care job search app."
  },
  {
    title: "Nurses jobs",
    href: "http://nursesjobs.io/",
    description: "UK nurses job search app."
  },
  {
    title: "Housing jobs",
    href: "http://housingjobs.io/",
    description: "UK housing job search app."
  },
  {
    title: "Chef jobs",
    href: "http://chefjobs.io/",
    description: "UK chef job search app."
  },
  {
    title: "Council jobs",
    href: "http://counciljobs.io/",
    description: "UK council job search app."
  },
  {
    title: "HelloSharky",
    href: "https://www.hellosharky.com/",
    description: "Stocks monitor."
  },
  {
    title: "First messenger",
    href: "http://1stmessenger.com/",
    description: "App marketing website."
  },
  {
    title: "Feedback suite by Estill voice",
    description: "Speech training software."
  },
  {
    title: "RoyCares",
    href: "https://roycares.org/",
    description: "Therapy website."
  },
  {
    title: "RoyCares",
    description: "Client management system."
  },
  {
    title: "Happysoul",
    href: "https://happysoul.in/",
    description: "Online store."
  },
  {
    title: "Hire intelligence",
    href: "https://www.hireintelligence.io",
    description: "Hiring management system."
  },
  {
    title: "Back office",
    description: "Company management system."
  },
  {
    title: "Travco Holidays Pvt. Ltd.",
    href: "https://travcoholidays.com/",
    description: "Travel agency website."
  },
  {
    title: "Super hoteliers",
    href: "https://superhoteliers.com/",
    description: "A hotel web application marketing website."
  },
  {
    title: "Super hoteliers web application",
    href: "https://manage.superhoteliers.com/",
    description: "Hotel management software."
  },
  {
    title: "Mandrem village resort",
    href: "https://mandremvillageresort.com/",
    description: "Hotel website."
  },
  {
    title: "GSIDC eSewa",
    href: "https://gmtgoa.in/",
    description: "GSIDC service request management system."
  },
  {
    title: "Yash group",
    href: "http://yashgoa.com/",
    description: "Business & brand Development"
  },
  {
    title: "Yash app",
    href: "https://play.google.com/store/apps/details?id=yash.client.sac.com",
    href2: "https://play.google.com/store/apps/details?id=s.a.c.yash.tab.com",
    description: "Business & brand Development"
  },
  {
    title: "Antaraa diamonds and gold",
    href: "http://antaraagold.com/",
    description:
      "Superior quality diamond & gold jewelry store located at Ponda and Valpoi."
  },
  {
    title: "MSK builders",
    href: "http://mskbuildersgoa.in/",
    description: "A leading real-estate development company."
  },
  {
    title: "Samrdh design studio and branding Pvt. Ltd.",
    href: "http://samrdh.in/",
    description: "IT based designing & branding company."
  },
  {
    title: "Giir gold",
    href: "http://www.giirgold.com/",
    description: "For a company that provides Pure A2 milk products."
  },
  {
    title: "Gajantlaxmi Devasthan",
    href: "http://gajantlaxmimarcel.in/",
    description: "For a Temple Located in Marcel."
  },
  {
    title: "Geeta Automation Technologies",
    href: "http://www.gtechglobal.in/",
    description:
      "Company that provides various services from Home Automation, CCTV etc."
  },
  {
    title: "MOS Pune",
    href: "http://mospune.in/",
    description: "Company that provides Software Services, Home automation etc."
  },
  {
    title: "Dhempe Doodle",
    description:
      "College project : It consisted of online voting, placement cell and feedback forms."
  },
  {
    title: "Remnant (3D Platform game) – Tiger Studio",
    description:
      "College project : ‘Remnant’ is an action-adventure & also Hack and Slash Genre - Type. Here the Game basically has a Storyline in which the player must follow and hence must complete it. In order to accomplish that, the player must be prepared and cautious about the enemies that stand in his way."
  },
  {
    title: "Unique Calculator app",
    description:
      "A Hybrid app built solely on the clients specifications to promote his business. With the functionality of a Standard Calculator, Scientific Calculator and a Converter with Themes and Google ads Integrated."
  },
  {
    title: "Videos, Logos & other media.",
    description2: "E.g. Giir gold promo video ",
    href: "https://www.youtube.com/watch?v=4n_89tfW4Sk",
    description: (
      <span>
        Made multiple Animated <strong>videos</strong> in After Effects,{" "}
        <strong>logo designs, branding posts for social media</strong> in
        Photoshop, <strong>banners, flyers etc.</strong> in CorelDraw for
        business promotion for various clients.
      </span>
    )
  }
];
const frontendSkills = [
  {
    title: 'HTML',
  },
  {
    title: 'CSS',
  },
  {
    title: 'Javascript',
  },
  {
    title: 'Typescript',
  },
  {
    title: 'React JS',
  },
  {
    title: 'Vue JS',
  },
  {
    title: 'Angular JS',
  },
  {
    title: 'Jquery',
  },
  {
    title: 'Bootstrap',
  },
  {
    title: 'Material UI',
  },
  {
    title: 'Ant Design',
  },
  {
    title: 'Next JS',
  },
  {
    title: 'Tailwind CSS',
  },
  {
    title: 'SASS',
  },
  {
    title: 'Ionic',
  },
];
const tools = [
  {
    title: 'Photoshop',
  },
  {
    title: 'Figma',
  },
  {
    title: 'Illustrator',
  },
  {
    title: 'Photopea',
  },
  {
    title: 'Blender',
  },
  {
    title: 'Filmora',
  },
  {
    title: 'XD',
  },
  {
    title: 'ESLint',
  },
  {
    title: 'SonarLint',
  },
  {
    title: 'Git',
  },
  {
    title: 'Google Analytics',
  },
  {
    title: 'CorelDraw',
  },
  {
    title: 'VS Code',
  },
  {
    title: 'NPM',
  },
  {
    title: 'Yarn',
  },
];

function App() {
  const items = [
    {
      key: '1',
      label: <span className="text-base lg:text-xl">Frontend</span>,
      children:
        <List
          grid={{
            gutter: 12,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 5,
            xxl: 6,
          }}
          className="overflow-y-auto overflow-x-hidden h-72"
          dataSource={frontendSkills}
          renderItem={(item) => (
            <List.Item>
              <Card className="text-center font-semibold text-lg border-2 border-cyan-600">{item.title}</Card>
            </List.Item>
          )}
        />
    },
    {
      key: '2',
      label: <span className="text-base lg:text-xl">Tools</span>,
      children: 
      <List
          grid={{
            gutter: 12,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 5,
            xxl: 6,
          }}
          className="overflow-y-auto overflow-x-hidden h-72"
          dataSource={tools}
          renderItem={(item) => (
            <List.Item>
              <Card className="text-center font-semibold text-lg border-2 border-cyan-600">{item.title}</Card>
            </List.Item>
          )}
        />
    },
  ];
  return (
    <div className="container mx-auto my-7 px-3">
      <img src={ribbon} alt="backgroud" className="absolute w-full lg:w-4/6 top-0 right-0" />
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <div className="grid place-content-center place-items-center h-full">
            <img src={profilePic} alt="avatar" className="w-8/12 mb-3 lg:mb-5 rounded-md" />
          </div>
        </Col>
        <Col xs={24} lg={16}>
          <div className="text-gray-400">
            <div className="font-medium text-lg pl-1">Hi 👋, my name is</div>
            <div className="text-5xl lg:text-7xl font-light mb-2"><span className="text-cyan-700 font-bold">Dahlin</span> Carneiro</div>
            <div className="text-lg lg:text-3xl font-semibold">I turn <span className="text-cyan-700 font-bold">ideas</span> into stunning digital <span className="text-cyan-700 font-bold">reality.</span></div>
            <div className="font-medium my-7 w-full lg:w-9/12">
              I'm a passionate frontend developer based in Goa. I build creative web apps that are both visually stunning and user-friendly. I'm committed to delivering high-quality solutions that exceed expectations. With a focus on innovation and problem-solving. I'm dedicated to helping businesses and individuals achieve their digital goals.
            </div>
            <Space>
              <a href={cv} download="Dahlin-Carneiro-CV-2023.pdf">
                <Button className="bg-cyan-700 hover:bg-cyan-600 text-white hover:!text-slate-100" shape="round" icon={<DownloadOutlined />} size="large">
                  Download CV
                </Button>
              </a>
              <a href="tel:+919511890013">
                <Button className="bg-cyan-700 hover:bg-cyan-600 text-white hover:!text-slate-100" shape="round" icon={<PhoneOutlined />} size="large">
                  Contact me
                </Button>
              </a>
            </Space>
            <Divider />
          </div>
        </Col>
      </Row>
      <div>
        <div className="w-full lg:w-4/5 mx-auto pl-6 lg:pl-7 pb-6 pt-3.5 text-3xl text-cyan-700">
          <strong>Skills</strong>
        </div>
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          className="mb-7"
          items={items}
        />
      </div>
      <div className="w-full lg:w-4/5 mx-auto">
        <List
          header={
            <div className="text-3xl text-cyan-700">
              <strong>Projects</strong>
            </div>
          }
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.title}>
              <div>
                <div>{item.title}</div>
                <div>
                  <span>{item.description2}</span>
                  <a href={item.href} className="!text-cyan-600 underline font-semibold">{item.href}</a>
                </div>
                <div>
                  <a href={item.href2} className="!text-cyan-600 underline font-semibold">{item.href2}</a>
                </div>
                <div className="text-gray-400">{item.description}</div>
              </div>
            </List.Item>
          )}
        />
      </div>
      <FloatButton.Group
        shape="square"
      >
        <a href="tel:+919511890013"><FloatButton tooltip={<div>Call me</div>} type="primary" icon={<PhoneOutlined />} /></a>
        <a href="mailto:dahlincarneiro01@gmail.com"><FloatButton tooltip={<div>Mail me</div>} type="primary" icon={<MailOutlined />} /></a>
        <a href={cv} download="Dahlin-Carneiro-CV-2023.pdf"><FloatButton tooltip={<div>Download CV</div>} type="primary" /></a>
        <FloatButton.BackTop type="primary" tooltip={<div>Scroll to top</div>} />
      </FloatButton.Group>
    </div>
  );
}

export default App;
