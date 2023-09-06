import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser';
import DeleteModal from '../DeleteModal';
import { useDeleteBlocks } from '../../../hooks/api/useBlocks';
import { IBlock } from '../../../types/common';

interface RenderedTemplateProps {
  block: IBlock
}

const RenderedTemplate = ({ block }: RenderedTemplateProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const { mutate } = useDeleteBlocks()

  function removeBlock() {
    mutate(block)
  }

  const frontJson = block.front_json
  
  if (!frontJson.placeholders) return <h1>Something went wrong...</h1>

  if (block.block_type === 'static') return (
    <div
      key={block.id}
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
      className="relative"
    >
      {parse(
        frontJson.placeholders.reduce((total, { key, value }) => {
          return total.replace(key, value);
        }, frontJson.layout as string)
      )}
      {isActive && (
        <button
          className="bg-red-600 text-white rounded text-xs p-1 absolute right-1 bottom-1 hover:bg-red-700"
          onClick={() => setOpenModal(true)}
        >
          <TrashIcon className="w-[20px]" />
        </button>
      )}
      {openModal && (
        <DeleteModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          deleteSubject="block"
          onClick={removeBlock}
        />
      )}
    </div>
  )

  if (block.block_type === 'get_list') return (
    <div>
      Get list-ы ещё не написаны
    </div>
  )
}

export default RenderedTemplate