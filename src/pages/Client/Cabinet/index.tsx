import React from "react"
import { Navigate } from "react-router-dom"
import { ROUTES } from "../../../constants/routes"
import { useAppSelector } from "../../../hooks/redux"
import RenderedTemplate from '../../../components/common/RenderedTemplate'
import { register } from "swiper/element/bundle"
register();


interface ICabinetProps {
  route: string
}

export const Cabinet = ({ route }: ICabinetProps) => {
  const user = localStorage.getItem("accessToken")

  const addedTemplates = useAppSelector((s) => s.Template)

  const currentPage = addedTemplates[route]

  if (!user) return <Navigate to={ROUTES.auth.authRoute} />
  if (currentPage.blocks.length === 0) return <h1>Данная страница пуста</h1>
  return (
    <React.Fragment>
      {currentPage.blocks.map((block) => {
        return (
          <RenderedTemplate
            block={block}
            key={block.id}
          />
        );
      })}
    </React.Fragment>
  );
};
