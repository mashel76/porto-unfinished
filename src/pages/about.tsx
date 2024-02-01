import { Divider, Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const About = () => {
  return (
    <>
      <div className="m-10 flex gap-5">
        <img src="./avatar.jpg" className="w-40 h-40 rounded-full"/>
        <div className="text-justify w-3/5 pt-8">
          <p>Nostrud sint officia sit adipisicing consequat nisi adipisicing sunt voluptate non. Ut et ea exercitation adipisicing aliquip deserunt consectetur. Laborum qui sit occaecat non eu nisi Lorem dolore aute sit qui occaecat. Sunt sit quis laboris veniam Lorem consequat nostrud occaecat eiusmod ipsum.</p>
        </div>
      </div>
      <Divider className="mr-4" />
      <div className="m-10">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="edu" title="Education">
              <Card>
                <CardBody>
                  <li>Sekolah 1</li>
                  <li>Sekolah 1</li>
                  <li>Sekolah 1</li>
                  <li>Sekolah 1</li>
                  <li>Sekolah 1</li>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="exp" title="Experience">
              <Card>
                <CardBody>
                  <li>Experience 1</li>
                  <li>Experience 1</li>
                  <li>Experience 1</li>
                  <li>Experience 1</li>
                  <li>Experience 1</li>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default About