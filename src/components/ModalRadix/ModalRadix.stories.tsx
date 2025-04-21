
import {Meta, StoryObj} from '@storybook/react';
import {ModalRadix, ModalRadixProps} from './ModalRadix.tsx';
import {useState} from 'react';
import {Button} from '../Button/Button.tsx';

const meta= {
    component: ModalRadix,
    tags: ['autodocs'],
} satisfies Meta<typeof ModalRadix>

export default meta

type Story = StoryObj<typeof ModalRadix>
function Render(args: ModalRadixProps) {
    const [showModal, setShowModal] = useState(false)
    const openModalHandler = () => {
        setShowModal(true)
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }
    return (
        <>
            <Button variant={"primary"} onClick={openModalHandler}>Open modal</Button>

            <ModalRadix
                {...args}
                open={showModal}
                onClose={closeModalHandler}
            />

        </>

    )
}

export const BAseModal: Story = {

    args: {
        modalTitle: 'Modal title',
        children: <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, numquam.</div>
    },
    render: Render
}


export const BAseModalSm: Story = {

    args: {
        ...BAseModal.args,
        size: 'sm'
    },
    render: Render
}

