import React from "react";
import { IDataImages } from "../../../../types/common";
import { useImages } from "../../../../hooks/api/images";

export const UploadImagesModal = () => {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);

  const { isLoading, data, mutation } = useImages();

  if (isLoading) return <h1>Loading...</h1>;

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
      <div className="flex gap-3 flex-wrap items-start">
        {data?.map(({ id, image }: IDataImages) => (
          <div key={id} className="bg-slate-200 p-1">
            <img src={image} className="max-w-xs" />
          </div>
        ))}
      </div>
    </div>
  );
};
