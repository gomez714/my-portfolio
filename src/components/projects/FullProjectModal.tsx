import { Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text, useMatches } from "@mantine/core";
import StatusBadge from "../common/StatusBadge";

interface ProjectModalProps {
  opened: boolean;
  close: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    live: boolean;
    link: string;
    github: string;
    technologies: string[];
    status: "complete" | "inProgress" | "archived"; 
  };
}

const FullProjectModal = ({ opened, close, project }: ProjectModalProps) => {

  const download=useMatches({xs:"xs", md:"sm", lg:"md", bs:"lg"});
  const techno=useMatches({xs:"md", sm:"md", md:"lg", bs:"xl"});
  const btn =useMatches({xs:'xs',sm:'sm',md:'md',lg:'lg'});

  return (
    <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" centered className="font-mono" opened={opened} onClose={close}>
      <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor xs-mx:!p-2 !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title data-autofocus  
            className="!text-4xl sm-mx:!text-3xl xs-mx:!text-2xl xsm-mx:!text-xl text-white flex gap-3 xs-mx:gap-1 items-center !font-bold"
          >
            {project.title}
            <Group gap="sm">  
              {project.live && (
                <Badge 
                  className="flex items-center gap-1" 
                  size={download} 
                  variant="outline" 
                  color="red" 
                  rightSection={<Indicator color="red" position="middle-end" size={10} processing />}
                >
                  Live
                </Badge>
              )}

              <StatusBadge status={project.status} />
            </Group>
          </Modal.Title>
          <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor xs-mx:!p-2  !pt-2 !border-primaryColor  !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
          <Image
              className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
              src={project.image}
              alt={project.image}
          />
          <div className="flex flex-wrap gap-3 xs-mx:gap-2 my-3" >
              {project.technologies.map((tech: string) => <Badge key={tech} size={techno} variant="light" color="#64FFDA">{tech}</Badge>)}
          </div>
          <Text className="!text-justify !text-lg sm-mx:!text-base xs-mx:!text-xs"  size="lg" c="dimmed">
              {project.description}
          </Text>
          <Group justify="space-between" mt="md" mb={3}>
              <a href={project.github} target="_blank" rel="noreferrer" className="!w-[48%] sm-mx:!w-[46%]">
                <Button variant="outline" size={btn} color="#64FFDA" fullWidth mt="md" radius="md">
                  View Code
                </Button>
              </a>
              <a href={project.link} target="_blank" rel="noreferrer" className="!w-[48%]">
                <Button size={btn} color="#64FFDA" className="!text-bgColor" fullWidth mt="md" radius="md">
                  View Live App
                </Button>
              </a>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default FullProjectModal;