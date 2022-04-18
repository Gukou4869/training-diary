import Modal from "@/components/modal/Modal";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CreateLogCard from "./CreateLogCard";

export default {
    title: "CreateLogCard",
    component: CreateLogCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CreateLogCard>;

const Template: ComponentStory<typeof CreateLogCard> = (args) => <CreateLogCard {...args} />;

export const Default = Template.bind({});

const withModal: ComponentStory<typeof CreateLogCard> = (args) => (
    <Modal open handleClose={null}>
        <CreateLogCard {...args} />
    </Modal>
);

export const WithModal = withModal.bind({});

WithModal.args = {
    currentMonth: 1,
    menu: 0,
    part: "sholder",
    weight: "10",
    reps: "10",
    selectedDay: 10,
    handleSetMenu: () => null,
    handleSetWeight: () => null,
    handleSetReps: () => null,
    handleSetTrainingPart: () => null,
    onSubmit: () => null,
};
