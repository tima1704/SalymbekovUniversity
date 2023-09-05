import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { IDataImages } from "../../../../types/common";
import {
  deleteImages,
  getImages,
  postImages,
} from "../../../../hooks/api/images";
import { TrashIcon } from "@heroicons/react/24/outline";
import DeleteModal from "../../../ui/DeleteModal";
import Loader from "../../../ui/Loader/Loader";

export const UploadImagesModal = () => {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["images"],
    queryFn: getImages!,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postImages,
    onSuccess: () => {
      queryClient.invalidateQueries(["images"], { exact: true });
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div className="text-center">
      <div className="flex items-center justify-between mb-4">
        Upload new image:
        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files) return;
            setSelectedImage(e.target.files[0] as File);
          }}
        />
        <button
          type="button"
          className="bg-blue-500 text-white rounded px-4 py-2 disabled:bg-blue-300"
          onClick={() => mutation.mutate(selectedImage)}
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Loading" : "Upload"}
        </button>
      </div>
      {data && Array.isArray(data) && data.length < 0 ? (
        <div className="flex gap-3 flex-wrap items-center justify-between">
          {data.map(({ id, image }: IDataImages) => (
            <Image id={id} key={id} image={image} />
          ))}
        </div>
      ) : (
        <p className="text-lg">Нет доступных изображений.</p>
      )}
    </div>
  );
};

function Image({ id, image }: IDataImages) {
  const [isActive, setIsActive] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteImages,
    onSuccess: () => {
      queryClient.invalidateQueries(["images"], { exact: true });
    },
  });

  return (
    <div
      key={id}
      className="bg-slate-200 p-1 relative min-w-[40px] flex justify-center"
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
    >
      <img src={image} className="max-w-xs max-h-28" alt={`Image ${id}`} />
      {isActive && (
        <button
          className="bg-red-600 text-white rounded text-xs p-1 absolute right-1 bottom-1 hover:bg-red-700"
          disabled={mutation.isLoading}
          onClick={() => setOpenModal(true)}
        >
          <TrashIcon className="w-[20px]" />
        </button>
      )}
      {openModal && (
        <DeleteModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          onClick={() => mutation.mutate(id)}
          deleteSubject="image"
        />
      )}
    </div>
  );
}
